import React from 'react';
import { T, INSTA, WHATSAPP, NAV } from '../utils/constants';
import { LogoSVG, IcInstagram, IcWhatsApp } from '../components/ui/Icons';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer style={{ background: T.dark, color: "#FDF5E6", padding: "72px 0 0", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: .025, backgroundImage: "radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
            <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
                <div className="fgrid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr", gap: 52, paddingBottom: 52, borderBottom: "1px solid rgba(255,255,255,.07)" }}>

                    <div>
                        <LogoSVG fill="#ffffff" style={{ width: 190, height: "auto", marginBottom: 18, opacity: .88 }} />
                        <p style={{ fontSize: ".83rem", opacity: .5, lineHeight: 1.8, maxWidth: 270, marginBottom: 20 }}>Where every cup tells a story. Premium specialty coffee &amp; handcrafted food across Surat — Vesu, Piplod &amp; Pal.</p>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <a href={INSTA} target="_blank" rel="noopener noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 50, fontSize: ".79rem", color: "rgba(255,255,255,.65)", transition: "all .3s ease" }}
                                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "rgba(255,255,255,.65)"; }}>
                                <IcInstagram s={15} c="rgba(255,255,255,.65)" /> @livestreamcoffee
                            </a>
                            <a href="https://jsdl.in/DT-541CENB8QKS" target="_blank" rel="noopener noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 50, fontSize: ".79rem", color: "rgba(255,255,255,.65)", transition: "all .3s ease" }}
                                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "rgba(255,255,255,.65)"; }}>
                                🌟 Rate on Justdial
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: ".8rem", fontWeight: 700, marginBottom: 20, color: "rgba(255,255,255,.35)", letterSpacing: ".18em", textTransform: "uppercase" }}>Pages</h4>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                            {NAV.map(n => {
                                const path = n.id === 'home' ? '/' : `/${n.id}`;
                                return (
                                <li key={n.id}>
                                    <Link to={path} style={{ textDecoration: 'none', display: 'inline-block', background: "none", border: "none", color: "rgba(253,245,230,.5)", fontSize: ".84rem", cursor: "pointer", padding: 0, transition: "all .2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.paddingLeft = "6px"; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = "rgba(253,245,230,.5)"; e.currentTarget.style.paddingLeft = "0"; }}>
                                        {n.label}
                                    </Link>
                                </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: ".8rem", fontWeight: 700, marginBottom: 20, color: "rgba(255,255,255,.35)", letterSpacing: ".18em", textTransform: "uppercase" }}>Visit Us</h4>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".83rem", color: "rgba(255,255,255,.5)", marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                            <span>Mon – Sun</span><span style={{ color: "rgba(255,255,255,.75)", fontWeight: 500 }}>9 AM – 12 AM</span>
                        </div>
                        <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.3)", fontStyle: "italic", marginBottom: 24 }}>Open every day of the year.</p>
                        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", background: "#25D366", color: "#fff", fontSize: ".82rem", fontWeight: 600, borderRadius: 50, boxShadow: "0 4px 16px rgba(37,211,102,.22)", transition: "all .35s cubic-bezier(.34,1.56,.64,1)" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1.03)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                            <IcWhatsApp s={16} /> WhatsApp Us
                        </a>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", flexWrap: "wrap", gap: 8 }}>
                    <p style={{ fontSize: ".73rem", color: "rgba(255,255,255,.22)" }}>© 2026 Livestream Coffee Vesu. All Rights Reserved.</p>
                    <p style={{ fontSize: ".73rem", color: "rgba(255,255,255,.15)" }}>Vesu · Piplod · Pal · Surat · Gujarat · India</p>
                </div>
            </div>
        </footer>
    );
}
