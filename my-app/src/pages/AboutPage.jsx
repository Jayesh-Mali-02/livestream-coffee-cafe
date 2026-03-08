import React from 'react';
import { Fade } from '../components/ui/Fade';
import { SectionHead } from '../components/ui/SectionHead';
import { T } from '../utils/constants';
import { VALUES, TEAM } from '../data/about';
import { IcLeaf, IcHandshake, IcSparkles, IcPalette, LogoSVG } from '../components/ui/Icons';

const ICON_MAP = {
    IcLeaf: (s, c) => <IcLeaf s={s} c={c} />,
    IcHandshake: (s, c) => <IcHandshake s={s} c={c} />,
    IcSparkles: (s, c) => <IcSparkles s={s} c={c} />,
    IcPalette: (s, c) => <IcPalette s={s} c={c} />,
};

export function AboutPage({ setPage }) {

    return (
        <div className="page">
            {/* PAGE HERO */}
            <section style={{ background: `linear-gradient(145deg,${T.dark} 0%,#4A1010 55%,${T.berry} 100%)`, minHeight: "56vh", display: "flex", alignItems: "flex-end", padding: "130px 0 80px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
                <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: .04, fontSize: "22rem", lineHeight: 1, userSelect: "none" }}>☕</div>
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", width: "100%", position: "relative", zIndex: 1 }}>
                    <Fade>
                        <span style={{ display: "inline-block", fontSize: ".65rem", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", marginBottom: 16 }}>Our Story</span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,6vw,5.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1, maxWidth: 680 }}>
                            More Than Coffee.<br /><em style={{ color: "rgba(255,255,255,.55)", fontWeight: 400 }}>A Community.</em>
                        </h1>
                        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.5)", marginTop: 18, maxWidth: 460, lineHeight: 1.7 }}>A carefully curated space where modern design meets warm Surati hospitality.</p>
                    </Fade>
                </div>
            </section>

            {/* STORY */}
            <section style={{ padding: "110px 0", background: T.cream }} className="spad">
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">
                        <Fade>
                            <div style={{ position: "relative" }}>
                                {/* Main image block */}
                                <div style={{
                                    borderRadius: 24,
                                    boxShadow: "0 20px 70px rgba(91,26,26,.15)",
                                    position: "relative",
                                    overflow: "hidden",
                                    aspectRatio: "4/5",
                                    width: "100%",
                                    background: T.linen
                                }}>
                                    <img 
                                        src="/assets/images/about/main.jpg" 
                                        alt="Livestream Coffee Interior" 
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                                    />
                                    {/* subtle inner shadow/border overlay */}
                                    <div style={{ position: "absolute", inset: 0, borderRadius: 24, border: "1px solid rgba(255,255,255,.15)", pointerEvents: "none" }} />
                                </div>
                                
                                {/* Floating Badge Image */}
                                <div style={{
                                    position: "absolute",
                                    bottom: -32,
                                    right: -32,
                                    width: "45%",
                                    aspectRatio: "1/1",
                                    borderRadius: 20,
                                    boxShadow: "0 16px 48px rgba(91,26,26,.18)",
                                    border: `8px solid ${T.cream}`, // matches section bg for cutoff effect
                                    background: T.parchm,
                                    overflow: "hidden",
                                    zIndex: 2
                                }}>
                                    <img 
                                        src="/assets/images/about/badge.jpg" 
                                        alt="Livestream Detail" 
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
                                    />
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={.12}>
                            <div>
                                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: ".65rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: T.gold, marginBottom: 16 }}>
                                    <span style={{ width: 20, height: 1, background: T.gold, display: "inline-block" }} /> Since 2023
                                </span>
                                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.9rem,3.5vw,2.8rem)", fontWeight: 700, color: T.dark, marginBottom: 24, lineHeight: 1.2 }}>Where Vesu Comes to Breathe</h2>
                                <p style={{ fontSize: ".94rem", color: T.espr, lineHeight: 1.95, marginBottom: 16 }}>Livestream Coffee was born from a simple belief: <strong>great coffee should feel like a conversation</strong>. We opened in the heart of Vesu with one mission — to build a space where quality, warmth, and design come together.</p>
                                <p style={{ fontSize: ".94rem", color: T.espr, lineHeight: 1.95, marginBottom: 16 }}>Every bean is ethically sourced and freshly roasted. Every dish is prepared fresh each morning. Our baristas train relentlessly so your cup is nothing short of perfect.</p>
                                <p style={{ fontSize: ".94rem", color: T.espr, lineHeight: 1.95 }}>Whether you're a working professional, a student, a parent, or a dreamer — pull up a chair. Stay a while.</p>
                                <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                                    <button onClick={() => setPage("menu")} className="btn-p" style={{ padding: "13px 30px", background: T.berry, color: "#fff", fontSize: ".88rem", fontWeight: 600, borderRadius: 50, boxShadow: `0 6px 22px rgba(91,26,26,.22)`, letterSpacing: ".02em" }}>Our Menu →</button>
                                    <button onClick={() => setPage("contact")} style={{ padding: "13px 30px", background: "transparent", color: T.berry, fontSize: ".88rem", fontWeight: 600, borderRadius: 50, border: `1.5px solid ${T.berry}`, cursor: "pointer", transition: "all .3s ease" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = T.berry; e.currentTarget.style.color = "#fff"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.berry; }}>
                                        Visit Us
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section style={{ padding: "110px 0", background: `linear-gradient(180deg,${T.parchm},${T.cream})` }} className="spad">
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <SectionHead tag="What We Stand For" title="Our Values" sub="The principles that guide every cup, every plate, every interaction." />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }} className="g4">
                        {VALUES.map((v, i) => (
                            <Fade key={v.title} delay={i * .08}>
                                <div className="lift" style={{ background: "#fff", borderRadius: 22, padding: "32px 26px", boxShadow: "0 2px 16px rgba(91,26,26,.07)", border: `1px solid ${T.linen}`, textAlign: "center", height: "100%" }}>
                                    <div style={{ width: 60, height: 60, borderRadius: 18, background: `linear-gradient(135deg,${T.wine},${T.rose})`, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(91,26,26,.18)" }}>
                                        {ICON_MAP[v.iconKey] && ICON_MAP[v.iconKey](28, "#fff")}
                                    </div>
                                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.35rem", fontWeight: 700, color: T.dark, marginBottom: 10 }}>{v.title}</h3>
                                    <p style={{ fontSize: ".84rem", color: T.mink, lineHeight: 1.8 }}>{v.desc}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section style={{ padding: "110px 0", background: "#fff" }} className="spad">
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <SectionHead tag="The People Behind Every Cup" title="Meet The Team" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, maxWidth: 880, margin: "0 auto" }} className="g3">
                        {TEAM.map((m, i) => (
                            <Fade key={m.name} delay={i * .1}>
                                <div className="lift" style={{ background: T.cream, borderRadius: 22, padding: "40px 28px 32px", textAlign: "center", boxShadow: "0 2px 16px rgba(91,26,26,.07)", border: `1px solid ${T.linen}` }}>
                                    <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg,${T.berry},${T.dark})`, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", boxShadow: "0 6px 22px rgba(91,26,26,.22)" }}>{m.emoji}</div>
                                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 700, color: T.dark, marginBottom: 4 }}>{m.name}</h3>
                                    <p style={{ fontSize: ".72rem", color: T.rose, letterSpacing: ".06em", textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>{m.role}</p>
                                    <p style={{ fontSize: ".83rem", color: T.mink, lineHeight: 1.7, fontStyle: "italic" }}>{m.bio}</p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
