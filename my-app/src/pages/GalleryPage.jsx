import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fade } from '../components/ui/Fade';
import { T, INSTA } from '../utils/constants';
import { GALLERY } from '../data/gallery';
import { IcInstagram } from '../components/ui/Icons';

/* ─── Staggered scroll reveal hook ───────────────────────────────────────── */
function useReveal(total) {
    const refs = useRef([]);
    const [visible, setVisible] = useState(new Array(total).fill(false));

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const i = Number(entry.target.dataset.index);
                        setTimeout(() => {
                            setVisible((prev) => {
                                const next = [...prev];
                                next[i] = true;
                                return next;
                            });
                        }, i * 80);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        refs.current.forEach((el) => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const setRef = useCallback((el, i) => {
        refs.current[i] = el;
    }, []);

    return { visible, setRef };
}

/* ─── 3D Tilt card ──────────────────────────────────────────────────────── */
function TiltCard({ item, index, onClick, revealed }) {
    const cardRef = useRef(null);
    const frameRef = useRef(null);
    const stateRef = useRef({ tiltX: 0, tiltY: 0, imgX: 0, imgY: 0, spring: null });

    const spring = useCallback((target, duration = 420) => {
        const s = stateRef.current;
        cancelAnimationFrame(s.spring);
        const start = performance.now();
        const fromX = s.tiltX, fromY = s.tiltY;
        const fromIX = s.imgX, fromIY = s.imgY;

        const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 4); // quartic ease-out
            s.tiltX = fromX + (target.tiltX - fromX) * ease;
            s.tiltY = fromY + (target.tiltY - fromY) * ease;
            s.imgX = fromIX + (target.imgX - fromIX) * ease;
            s.imgY = fromIY + (target.imgY - fromIY) * ease;
            applyTransform();
            if (t < 1) s.spring = requestAnimationFrame(tick);
        };
        s.spring = requestAnimationFrame(tick);
    }, []);

    const applyTransform = () => {
        const s = stateRef.current;
        const card = cardRef.current;
        if (!card) return;
        card.style.transform =
            `perspective(900px) rotateX(${s.tiltX}deg) rotateY(${s.tiltY}deg) scale3d(1.04,1.04,1.04)`;
        const inner = card.querySelector('.tilt-inner');
        if (inner) inner.style.transform = `translate(${s.imgX}px,${s.imgY}px)`;
    };

    const onMouseMove = (e) => {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(() => {
            const s = stateRef.current;
            const rect = cardRef.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);   // -1 … 1
            const dy = (e.clientY - cy) / (rect.height / 2);   // -1 … 1
            s.tiltX = -dy * 11;
            s.tiltY = dx * 11;
            s.imgX = dx * -14;
            s.imgY = dy * -14;
            applyTransform();
        });
    };

    const onMouseLeave = () => {
        cancelAnimationFrame(frameRef.current);
        spring({ tiltX: 0, tiltY: 0, imgX: 0, imgY: 0 });
        if (cardRef.current) {
            cardRef.current.style.transform = '';
            const inner = cardRef.current.querySelector('.tilt-inner');
            if (inner) inner.style.transform = '';
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                height: item.h,
                borderRadius: 20, /* restored natural heights and premium curves */
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 32px rgba(0,0,0,.22)', /* restored ambient shadow */
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transition: 'box-shadow .3s ease',
                /* staggered reveal */
                opacity: revealed ? 1 : 0,
                transform: revealed
                    ? 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1) translateY(0)'
                    : 'translateY(40px) scale(0.96)',
                transitionProperty: revealed ? 'opacity, transform' : 'opacity, transform',
                transitionDuration: revealed ? '.55s, .55s' : '0s, 0s',
                transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,.38)'; }}
        >
            {/* background layer — moves during tilt (parallax depth) */}
            <div
                className="tilt-inner"
                style={{
                    position: 'absolute',
                    inset: '-8px',       /* extra bleed so edges don't show on tilt */
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',  /* force crisp rendering */
                    transform: 'translateZ(0)',    /* trigger GPU */
                    transition: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                }}
            >
                {item.bg && (
                    <img 
                        src={item.bg.replace(/^url\(['"](.+)['"]\)$/, '$1')} 
                        alt={`${item.label || 'Livestream Coffee'} - specialty coffee cafe in Surat`} 
                        loading="lazy" 
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: '-webkit-optimize-contrast', pointerEvents: 'none' }} 
                    />
                )}
            </div>

            {/* inner border gloss */}
            <div style={{
                position: 'absolute', inset: 1, borderRadius: 19,
                border: '1px solid rgba(255,255,255,.10)', pointerEvents: 'none', zIndex: 1,
            }} />

            {/* hover tint (no text) */}
            <div className="gov" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top,rgba(10,3,3,.6) 0%,transparent 40%)',
                opacity: 0, borderRadius: 20, zIndex: 2,
                transition: 'opacity .28s ease',
            }} />
        </div>
    );
}



/* ─── Main page ─────────────────────────────────────────────────────────── */
export function GalleryPage() {
    const [light, setLight] = useState(null);
    const { visible, setRef } = useReveal(GALLERY.length);

    // Shuffle images on every mount
    const shuffledGallery = useMemo(() => {
        const arr = GALLERY.map((item, i) => ({ ...item, originalIndex: i }));
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }, []);

    // Pure CSS masonry handles responsiveness
    return (
        <div className="page">
            <Helmet>
                <title>Gallery | Livestream Coffee</title>
                <meta name="description" content="A glimpse inside Livestream Coffee. See our beautifully crafted spaces, artisan coffee, and food at our Vesu, Piplod, and Pal cafes." />
            </Helmet>

            {/* PAGE HERO */}
            <section className="page-hero" style={{ background: `linear-gradient(145deg,${T.dark} 0%,#4A1010 50%,${T.berry} 100%)`, minHeight: '50vh', display: 'flex', alignItems: 'flex-end', padding: '130px 0 72px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', width: '100%', position: 'relative', zIndex: 1 }}>
                    <Fade>
                        <span style={{ display: 'inline-block', fontSize: '.65rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)', marginBottom: 16 }}>Visual Stories</span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.8rem,6vw,5.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>Gallery</h1>
                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.5)', marginTop: 14, lineHeight: 1.7 }}>A glimpse inside Livestream Coffee — food, coffee &amp; moments.</p>
                    </Fade>
                </div>
            </section>

            {/* MASONRY GRID */}
            <section style={{ padding: '72px 0 100px', background: T.cream }} className="spad gallery-sec">
                <div style={{ maxWidth: 1240, margin: '0 auto' }} className="gallery-cont">

                    {/* Pure CSS Masonry Grid */}
                    <div className="gallery-masonry">
                        {shuffledGallery.map((item) => (
                            <div
                                key={item.label + item.originalIndex}
                                ref={(el) => setRef(el, item.originalIndex)}
                                data-index={item.originalIndex}
                                className="gallery-masonry-item"
                            >
                                <TiltCard
                                    item={item}
                                    index={item.originalIndex}
                                    onClick={setLight}
                                    revealed={visible[item.originalIndex]}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Instagram CTA */}
                    <Fade>
                        <div style={{ marginTop: 56, textAlign: 'center' }}>
                            <p style={{ fontSize: '.88rem', color: T.mink, marginBottom: 18 }}>Follow us for daily coffee moments &amp; behind-the-scenes content.</p>
                            <a href={INSTA} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 30px', background: 'radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)', color: '#fff', fontSize: '.9rem', fontWeight: 600, borderRadius: 50, boxShadow: '0 6px 24px rgba(0,0,0,.18)', transition: 'all .35s cubic-bezier(.34,1.56,.64,1)' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                                <IcInstagram s={18} c="#fff" />&nbsp;@livestreamcoffee
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
}
