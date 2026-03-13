import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Fade } from '../components/ui/Fade';
import { SectionHead } from '../components/ui/SectionHead';
import { T } from '../utils/constants';

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
                                <div style={{ 
                                    display: "flex", gap: 32, alignItems: "center", 
                                    background: "#fff", padding: "24px", borderRadius: 24, 
                                    boxShadow: "0 4px 24px rgba(91,26,26,.06)", border: `1px solid ${T.linen}`,
                                    flexWrap: "wrap"
                                }}>
                                    {/* Image */}
                                    <div style={{ 
                                        width: "100%", maxWidth: 300, height: 220, 
                                        borderRadius: 16, overflow: "hidden", flexShrink: 0,
                                        position: "relative"
                                    }}>
                                        <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)", color: T.wine, fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", padding: "6px 14px", borderRadius: 50, zIndex: 2 }}>
                                            {art.tag}
                                        </div>
                                        <img src={art.img} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                                    </div>
                                    
                                    {/* Content */}
                                    <div style={{ flex: 1, minWidth: 280, padding: "10px 0" }}>
                                        <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: ".75rem", color: T.mink, marginBottom: 12, letterSpacing: ".02em" }}>
                                            <span>{art.date}</span>
                                            <span style={{ width: 4, height: 4, background: "rgba(91,26,26,.2)", borderRadius: "50%" }} />
                                            <span>{art.readTime}</span>
                                        </div>
                                        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.9rem", fontWeight: 700, color: T.dark, marginBottom: 14, lineHeight: 1.15 }}>
                                            {art.title}
                                        </h2>
                                        <p style={{ fontSize: ".9rem", color: T.espr, lineHeight: 1.7, opacity: .8, marginBottom: 20 }}>
                                            {art.excerpt}
                                        </p>
                                        <button style={{ background: "transparent", color: T.berry, fontSize: ".82rem", fontWeight: 700, border: "none", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 6, opacity: .9 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = .9}>
                                            Read Article <span style={{ transition: "transform .2s" }}>→</span>
                                        </button>
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
        </div>
    );
}
