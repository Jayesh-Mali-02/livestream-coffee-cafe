import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fade } from '../components/ui/Fade';
import { SectionHead } from '../components/ui/SectionHead';
import { T, INSTA } from '../utils/constants';

/* ─── Custom Hook: Lazy Load Instagram Embeds ─── */
function useInstagramEmbed() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // If script is already somehow present, just process it
        if (window.instgrm) {
            window.instgrm.Embeds.process();
            setIsLoaded(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoaded) {
                const script = document.createElement('script');
                script.src = "//www.instagram.com/embed.js";
                script.async = true;
                script.onload = () => {
                    if (window.instgrm) window.instgrm.Embeds.process();
                    setIsLoaded(true);
                };
                document.body.appendChild(script);
                observer.disconnect();
            }
        }, { rootMargin: '200px' }); // Load script 200px before it enters viewport

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [isLoaded]);

    return containerRef;
}

const ARTICLES = [
    {
        id: "rise-of-specialty-coffee-surat",
        title: "The Rise of Specialty Coffee Culture in Surat",
        excerpt: "Move over instant coffee. Surat's youth and creative professionals are embracing the nuanced flavors of specialty pour-overs, single-origin beans, and manually pulled espresso. Here is why the coffee culture is shifting in Gujarat's diamond city.",
        date: "October 12, 2026",
        readTime: "4 min read",
        tag: "Culture",
        img: "/assets/images/gallery/g2.jpg"
    },
    {
        id: "best-places-to-work-vesu",
        title: "Why Livestream Coffee is the Best Place for Meetings in Vesu",
        excerpt: "Finding a quiet, ambient spot with high-speed WiFi and great food can be a challenge. With our acoustically treated spaces and bottomless cold brews, Livestream Coffee has become the go-to remote workspace for Vesu's freelancers.",
        date: "September 28, 2026",
        readTime: "3 min read",
        tag: "Community",
        img: "/assets/images/gallery/g4.jpg"
    },
    {
        id: "understanding-espresso-notes",
        title: "Understanding Espresso: Crema, Body, and Notes",
        excerpt: "Ever wondered why your favorite handcrafted flat white tastes so good? It all comes down to the perfect espresso extraction. Let's break down the science behind the golden crema.",
        date: "August 15, 2026",
        readTime: "5 min read",
        tag: "Education",
        img: "/assets/images/gallery/g7.jpg"
    }
];

export function BlogPage() {
    const instaRef = useInstagramEmbed();

    return (
        <div className="page">
            <Helmet>
                <title>Journal | Livestream Coffee Surat</title>
                <meta name="description" content="Read the Livestream Coffee Journal. Stories about specialty coffee culture, our handcrafted recipes, barista tips, and community events in Surat (Vesu, Piplod, Pal)." />
                <link rel="canonical" href="https://livestreamcoffee.in/blog" />
            </Helmet>

            {/* ── HERO ── */}
            <section className="page-hero" style={{
                background: `linear-gradient(145deg,${T.dark} 0%,#280A0A 50%,${T.wine} 100%)`,
                minHeight: '40vh',
                display: 'flex', alignItems: 'flex-end',
                padding: '130px 0 64px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', inset: 0, opacity: .03, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
                
                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', width: '100%', position: 'relative', zIndex: 1 }}>
                    <Fade>
                        <span style={{ display: 'inline-block', fontSize: '.65rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)', marginBottom: 16 }}>
                            Stories & Thoughts
                        </span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.8rem,6vw,5.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1, margin: 0 }}>
                            The Journal
                        </h1>
                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.5)', marginTop: 14, maxWidth: 440, lineHeight: 1.7 }}>
                            News, coffee education, and community stories straight from the barista bar.
                        </p>
                    </Fade>
                </div>
            </section>

            {/* ── BLOG LIST ── */}
            <section style={{ padding: '80px 0 110px', background: T.cream }} className="spad">
                <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 28px' }}>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
                        {ARTICLES.map((art, i) => (
                            <Fade key={art.id} delay={i * .08}>
                                <div className="lift" style={{ 
                                    display: "flex", gap: "clamp(24px, 4vw, 40px)", alignItems: "center", 
                                    background: "#fff", padding: "clamp(16px, 3vw, 24px)", borderRadius: 24, 
                                    boxShadow: "0 4px 24px rgba(91,26,26,.06)", border: `1px solid ${T.linen}`,
                                    flexWrap: "wrap", cursor: "pointer", overflow: "hidden"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.querySelector('img').style.transform = "scale(1.05)";
                                    e.currentTarget.querySelector('.read-arr').style.transform = "translateX(6px)";
                                    e.currentTarget.querySelector('.read-btn').style.color = T.gold;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.querySelector('img').style.transform = "scale(1)";
                                    e.currentTarget.querySelector('.read-arr').style.transform = "none";
                                    e.currentTarget.querySelector('.read-btn').style.color = T.berry;
                                }}>
                                    {/* Image */}
                                    <div style={{ 
                                        flex: "1 1 300px", maxWidth: "100%",
                                        aspectRatio: "4/3",
                                        borderRadius: 16, overflow: "hidden",
                                        position: "relative"
                                    }}>
                                        <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)", color: T.wine, fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", padding: "6px 14px", borderRadius: 50, zIndex: 2 }}>
                                            {art.tag}
                                        </div>
                                        <img src={art.img} alt={art.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .6s cubic-bezier(.22,1,.36,1)" }} />
                                    </div>
                                    
                                    {/* Content */}
                                    <div style={{ flex: "2 1 380px", minWidth: "280px", padding: "10px 0" }}>
                                        <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: ".76rem", color: T.mink, marginBottom: 14, letterSpacing: ".03em", fontWeight: 500 }}>
                                            <span>{art.date}</span>
                                            <span style={{ width: 4, height: 4, background: "rgba(91,26,26,.2)", borderRadius: "50%" }} />
                                            <span>{art.readTime}</span>
                                        </div>
                                        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 700, color: T.dark, marginBottom: 16, lineHeight: 1.15 }}>
                                            {art.title}
                                        </h2>
                                        <p style={{ fontSize: ".92rem", color: T.espr, lineHeight: 1.75, opacity: .85, marginBottom: 24, paddingRight: "4%" }}>
                                            {art.excerpt}
                                        </p>
                                        <div className="read-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".82rem", fontWeight: 700, color: T.berry, transition: "color .3s ease" }}>
                                            Read Article <span className="read-arr" style={{ transition: "transform .3s ease", display: "inline-block" }}>→</span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>

                    <Fade delay={0.3}>
                        <div style={{ textAlign: "center", marginTop: 70 }}>
                            <button className="btn-g" style={{ padding: "14px 40px", background: "transparent", border: `1.5px solid ${T.linen}`, color: T.mink, fontSize: ".85rem", fontWeight: 600, borderRadius: 50, cursor: "pointer", transition: "all .3s ease" }} onMouseEnter={e => { e.currentTarget.style.border = `1.5px solid ${T.gold}`; e.currentTarget.style.color = T.gold; }} onMouseLeave={e => { e.currentTarget.style.border = `1.5px solid ${T.linen}`; e.currentTarget.style.color = T.mink; }}>
                                Load More Articles
                            </button>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* ── INSTAGRAM SECTION (LAZY LOADED) ── */}
            <section ref={instaRef} style={{ padding: '90px 0 120px', background: "#fff", borderTop: `1px solid ${T.linen}` }} className="spad">
                <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 28px' }}>
                    <Fade>
                        <div style={{ textAlign: "center", marginBottom: 50 }}>
                            <span style={{ display: "inline-block", fontSize: ".65rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: T.gold, marginBottom: 12 }}>Stay Connected</span>
                            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: T.dark, lineHeight: 1.1 }}>From The Gram</h2>
                            <p style={{ fontSize: ".9rem", color: T.mink, marginTop: 12, maxWidth: 400, margin: "12px auto 0" }}>Daily brews, behind-the-scenes, and community vibes. Follow us <a href={`https://instagram.com/${INSTA}`} target="_blank" rel="noopener noreferrer" style={{ color: T.berry, fontWeight: 700 }}>@{INSTA}</a></p>
                        </div>
                    </Fade>

                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                        gap: 30,
                        alignItems: "start"
                    }}>
                        {/* 
                            NOTE: These are placeholder blockquotes. 
                            To replace them with real posts: 
                            1. Go to Instagram -> 3 dots -> Embed -> Copy Embed Code
                            2. Paste the <blockquote> part here. Do NOT paste the <script> tag. 
                        */}
                        <Fade delay={0.1}>
                            <div style={{ background: T.cream, borderRadius: 16, overflow: "hidden", minHeight: 400, boxShadow: "0 4px 20px rgba(0,0,0,.03)" }}>
                                <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DB1v-X6zK7P/" data-instgrm-version="14" style={{ background:"#FFF", border:"0", margin:"0", padding:"0", width:"100%" }}></blockquote>
                            </div>
                        </Fade>
                        <Fade delay={0.2}>
                            <div style={{ background: T.cream, borderRadius: 16, overflow: "hidden", minHeight: 400, boxShadow: "0 4px 20px rgba(0,0,0,.03)" }}>
                                <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DBM5TqRzZzV/" data-instgrm-version="14" style={{ background:"#FFF", border:"0", margin:"0", padding:"0", width:"100%" }}></blockquote>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
}
