import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useScrollY } from '../hooks/useScrollY';
import { Fade } from '../components/ui/Fade';
import { SectionHead } from '../components/ui/SectionHead';
import { BRANCHES, T, TESTIMONIALS, WHATSAPP } from '../utils/constants';
import { IcUsers, IcUtensils, IcStar, IcTrophy, IcDiamond, LogoSVG, IcClock, IcCalendar, IcPin, IcCoffee, IcSofa, IcWhatsApp } from '../components/ui/Icons';

export function HomePage() {
    const y = useScrollY();
    const navigate = useNavigate();
    const setPage = (id) => navigate(id === 'home' ? '/' : `/${id}`);

    const STATS = [
        { icon: <IcUsers s={24} c="rgba(255,255,255,.7)" />, val: "500+", lbl: "Daily Guests" },
        { icon: <IcUtensils s={24} c="rgba(255,255,255,.7)" />, val: "40+", lbl: "Menu Items" },
        { icon: <IcStar s={24} c="rgba(255,255,255,.7)" filled />, val: "4.9", lbl: "Google Rating" },
        { icon: <IcTrophy s={24} c="rgba(255,255,255,.7)" />, val: "3", lbl: "Locations in Surat" },
    ];

    return (
        <div className="page">
            <Helmet>
                <title>Livestream Coffee | Specialty Coffee & Handcrafted Food in Surat</title>
                <meta name="description" content="Welcome to Livestream Coffee. Experience Surat's best specialty coffee, artisan food, and aesthetic vibes. Visit our Vesu, Piplod, or Pal cafes today." />
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "CafeOrCoffeeShop",
                      "name": "Livestream Coffee",
                      "image": "https://livestreamcoffee.com/assets/images/hero.jpg",
                      "priceRange": "$$",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Surat",
                        "addressRegion": "Gujarat",
                        "addressCountry": "IN"
                      },
                      "openingHours": "Mo-Su 09:00-00:00",
                      "sameAs": [
                        "https://www.instagram.com/livestreamcoffee",
                        "https://jsdl.in/DT-541CENB8QKS",
                        "https://share.google/s0sXr25rBMlSOlkHr",
                        "https://share.google/kQO7NigA02NOH0sEb",
                        "https://share.google/DOq0lnECyR1te2YQ7",
                        "https://share.google/WXmpNOCzM12c8yrSK",
                        "https://share.google/kgHGboI0tuIEcI3R9"
                      ]
                    }
                    `}
                </script>
            </Helmet>

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

                {/* BG */}
                <div style={{
                    position: "absolute", inset: "-12%",
                    backgroundImage: `url('/assets/images/hero.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: `translateY(${y * .38}px)`, willChange: "transform",
                }}>
                    {/* Dark overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg,rgba(26,7,7,.72) 0%,rgba(74,18,18,.65) 45%,rgba(61,16,16,.72) 100%)" }} />
                    {/* Gold glow */}
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 30%,rgba(200,149,42,.10),transparent 55%)" }} />
                    {/* Vignette */}
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%,transparent 30%,rgba(0,0,0,.60) 100%)" }} />
                </div>

                {/* Bottom fade */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: `linear-gradient(to top,${T.dark},transparent)`, zIndex: 1 }} />

                {/* CONTENT */}
                <div className="hero-content" style={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff", padding: "160px 24px 80px", maxWidth: 900, width: "100%" }}>

                    {/* Location pill */}
                    <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 40, animation: "fadeUp .8s ease .2s both" }}>
                        {BRANCHES.map(b => (
                            <div key={b.id} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(200,149,42,.15)", border: "1px solid rgba(200,149,42,.35)", color: "rgba(255,255,255,.85)", fontSize: ".68rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", padding: "8px 20px", borderRadius: 50, backdropFilter: "blur(12px)" }}>
                                <IcDiamond s={8} c={T.goldlt} /> {b.name}
                            </div>
                        ))}
                    </div>

                    {/* LOGO SVG — brand icon */}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 24, animation: "fadeUp .9s ease .4s both" }}>
                        <LogoSVG
                            fill="#ffffff"
                            style={{ width: "clamp(120px,22vw,200px)", height: "auto", filter: "drop-shadow(0 8px 32px rgba(0,0,0,.5))", opacity: .95 }}
                        />
                    </div>

                    {/* BRAND NAME */}
                    <div style={{ animation: "fadeUp .9s ease .6s both", marginBottom: 6 }}>
                        <h1 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: "clamp(2.8rem,8vw,6rem)", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1, color: "#fff", margin: 0, textShadow: "0 4px 32px rgba(0,0,0,.4)" }}>
                            LIVESTREAM
                        </h1>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 6 }}>
                            <span style={{ flex: 1, maxWidth: 120, height: 1, background: `linear-gradient(to left,rgba(200,149,42,.5),transparent)` }} />
                            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 400, fontSize: "clamp(.78rem,1.8vw,1rem)", textTransform: "uppercase", letterSpacing: "0.55em", color: "rgba(255,255,255,.55)" }}>COFFEE</span>
                            <span style={{ flex: 1, maxWidth: 120, height: 1, background: `linear-gradient(to right,rgba(200,149,42,.5),transparent)` }} />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p style={{ fontSize: "clamp(.92rem,1.7vw,1.1rem)", fontWeight: 300, lineHeight: 1.85, maxWidth: 500, margin: "28px auto 36px", opacity: .82, animation: "fadeUp .9s ease .8s both", fontStyle: "italic", color: "rgba(255,255,255,.88)" }}>
                        Where every cup tells a story — specialty coffee &amp; handcrafted food.<br />Now across 3 locations in Surat.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 56, animation: "fadeUp .9s ease 1s both" }}>
                        <button onClick={() => setPage("menu")} className="btn-p" style={{ padding: "15px 36px", background: `linear-gradient(135deg,${T.berry},${T.rose})`, color: "#fff", fontSize: ".9rem", fontWeight: 600, borderRadius: 50, boxShadow: "0 6px 28px rgba(91,26,26,.45)", letterSpacing: ".03em" }}>
                            Explore Menu →
                        </button>
                        <button onClick={() => setPage("contact")} className="btn-g" style={{ padding: "15px 36px", background: "rgba(255,255,255,.08)", color: "#fff", fontSize: ".9rem", fontWeight: 500, borderRadius: 50, border: "1.5px solid rgba(255,255,255,.3)", letterSpacing: ".03em" }}>
                            Find Us
                        </button>
                    </div>

                    {/* Meta strip */}
                    <div className="hero-sub" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap", fontSize: ".78rem", color: "rgba(255,255,255,.5)", animation: "fadeUp .9s ease 1.2s both", letterSpacing: ".04em" }}>
                        {[
                            { icon: <IcClock s={14} c="rgba(255,255,255,.5)" />, txt: "9 AM – 12 AM" },
                            { icon: <IcCalendar s={14} c="rgba(255,255,255,.5)" />, txt: "Open Every Day" },
                            { icon: <IcPin s={14} c="rgba(255,255,255,.5)" />, txt: "Vesu · Piplod · Pal" },
                        ].map((item, i) => (
                            <span key={item.txt} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                                {i > 0 && <span style={{ display: "inline-block", width: 1, height: 12, background: "rgba(255,255,255,.2)", margin: "0 20px" }} />}
                                {item.icon}{item.txt}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: "absolute", bottom: 36, left: "50%", zIndex: 2, animation: "fadeIn 1s ease 1.6s both" }}>
                    <div style={{ width: 24, height: 40, border: "1.5px solid rgba(255,255,255,.3)", borderRadius: 12, position: "relative" }}>
                        <div style={{ width: 3, height: 7, background: "rgba(255,255,255,.7)", borderRadius: 4, position: "absolute", top: 7, left: "50%", animation: "scrollDot 2s ease-in-out infinite" }} />
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ──────────────────────────────────────────────── */}
            <section style={{ background: `linear-gradient(100deg,${T.dark} 0%,#3A0E0E 50%,${T.dark} 100%)`, padding: "0", borderBottom: `1px solid rgba(255,255,255,.04)` }}>
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="g4 g4-2col">
                    {STATS.map((s, i) => (
                        <Fade key={s.val} delay={i * .07}>
                            <div style={{ textAlign: "center", padding: "40px 20px", borderRight: i < 3 ? `1px solid rgba(255,255,255,.06)` : "none", position: "relative" }}>
                                <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>{s.icon}</div>
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.8rem", fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: "-.02em" }}>{s.val}</div>
                                <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.38)", marginTop: 7, letterSpacing: ".1em", textTransform: "uppercase" }}>{s.lbl}</div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            {/* ── OFFERINGS ────────────────────────────────────────────────── */}
            <section style={{ padding: "110px 0", background: T.cream }} className="spad">
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <SectionHead tag="What We Offer" title="Crafted With Passion" sub="From your first sip to the last bite — every detail is made with care." />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 52 }} className="g3">
                        {[
                            { icon: <IcCoffee s={26} c="#fff" />, title: "Specialty Coffee", desc: "Single-origin pour-overs, inventive espresso creations — each cup is a handcrafted ritual.", cta: "See Drinks", pg: "menu" },
                            { icon: <IcUtensils s={26} c="#fff" />, title: "Handcrafted Food", desc: "Fresh local ingredients, bold flavors. Sandwiches, bowls, and desserts made every morning.", cta: "See Food", pg: "menu" },
                            { icon: <IcSofa s={26} c="#fff" />, title: "Cozy Ambiance", desc: "A thoughtfully designed space where you can work, meet friends, or simply breathe.", cta: "Visit Us", pg: "contact" },
                        ].map((c, i) => (
                            <Fade key={c.title} delay={i * .1}>
                                <div className="lift" style={{ background: "#fff", borderRadius: 22, padding: "38px 32px 32px", boxShadow: "0 2px 20px rgba(91,26,26,.07)", border: `1px solid ${T.linen}`, height: "100%", display: "flex", flexDirection: "column" }}>
                                    {/* Icon circle */}
                                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `linear-gradient(135deg,${T.wine},${T.rose})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: 22, boxShadow: `0 6px 20px rgba(91,26,26,.2)` }}>{c.icon}</div>
                                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.65rem", fontWeight: 700, color: T.dark, marginBottom: 10, lineHeight: 1.15 }}>{c.title}</h3>
                                    <p style={{ fontSize: ".88rem", color: T.mink, lineHeight: 1.85, flex: 1 }}>{c.desc}</p>
                                    <button onClick={() => setPage(c.pg)} style={{ marginTop: 24, padding: "10px 22px", background: "transparent", color: T.berry, fontSize: ".82rem", fontWeight: 600, border: `1.5px solid ${T.berry}`, borderRadius: 50, cursor: "pointer", alignSelf: "flex-start", transition: "all .3s ease" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = T.berry; e.currentTarget.style.color = "#fff"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.berry; }}>
                                        {c.cta} →
                                    </button>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <Fade style={{ textAlign: "center" }}>
                        <button onClick={() => setPage("menu")} className="btn-p" style={{ padding: "14px 42px", background: T.berry, color: "#fff", fontSize: ".9rem", fontWeight: 600, borderRadius: 50, boxShadow: `0 6px 24px rgba(91,26,26,.25)`, letterSpacing: ".03em" }}>
                            View Full Menu →
                        </button>
                    </Fade>
                </div>
            </section>

            {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
            <section style={{ padding: "110px 0", background: T.parchm }} className="spad">
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <SectionHead tag="What People Say" title="Loved By Surat" sub="Real reviews from our regulars — the people who make Livestream home." />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="g4">
                        {TESTIMONIALS.map((t, i) => (
                            <Fade key={t.name} delay={i * .09}>
                                <div className="tcard" style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", boxShadow: "0 2px 16px rgba(91,26,26,.07)", border: `1px solid ${T.linen}`, height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                                    {/* Decorative quote */}
                                    <div style={{ fontFamily: "Georgia,serif", fontSize: "4rem", lineHeight: .7, color: T.linen, position: "absolute", top: 18, left: 22, userSelect: "none", pointerEvents: "none" }}>"</div>
                                    <div style={{ color: T.gold, fontSize: ".85rem", letterSpacing: 3, marginBottom: 14, marginTop: 16 }}>{"★".repeat(t.stars)}</div>
                                    <p style={{ fontSize: ".87rem", color: T.espr, lineHeight: 1.8, flex: 1, position: "relative", zIndex: 1 }}>{t.text}</p>
                                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${T.linen}`, display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg,${T.wine},${T.rose})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".85rem", color: "#fff", fontWeight: 700, flexShrink: 0 }}>
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: ".82rem", color: T.wine }}>{t.name}</div>
                                            <div style={{ fontSize: ".72rem", color: T.mink }}>{t.loc}</div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BAND ─────────────────────────────────────────────────── */}
            <section style={{ background: `linear-gradient(140deg,${T.dark} 0%,${T.berry} 60%,${T.wine} 100%)`, padding: "90px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                <Fade style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 28px" }}>
                        <div style={{ fontFamily: "Georgia,serif", fontSize: "3.5rem", color: "rgba(200,149,42,.3)", lineHeight: .8, marginBottom: 8 }}>"</div>
                        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3.1rem)", fontWeight: 700, color: "#fff", marginBottom: 14, lineHeight: 1.12 }}>Ready for Your Next Cup?</h2>
                        <p style={{ fontSize: ".98rem", color: "rgba(255,255,255,.6)", marginBottom: 34, lineHeight: 1.7 }}>Drop by any day from 9 AM to midnight.<br />We'll have your table ready.</p>
                        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                            <button onClick={() => setPage("contact")} className="btn-p" style={{ padding: "14px 32px", background: "#fff", color: T.wine, fontSize: ".9rem", fontWeight: 700, borderRadius: 50, boxShadow: "0 6px 24px rgba(0,0,0,.2)" }}>Get Directions</button>
                            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: "#25D366", color: "#fff", fontSize: ".9rem", fontWeight: 600, borderRadius: 50, transition: "all .3s ease", boxShadow: "0 6px 24px rgba(37,211,102,.25)" }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                                <IcWhatsApp s={20} /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
}
