import React, { useState } from 'react';
import { useScrollY } from '../hooks/useScrollY';
import { LogoSVG } from '../components/ui/Icons';
import { NAV, T } from '../utils/constants';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const y = useScrollY();
    const location = useLocation();
    
    // Default to 'home' if path is '/', otherwise use the path without leading slash
    const page = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    
    const scrolled = y > 70;
    const isHome = page === "home";
    const [mob, setMob] = useState(false);
    const transp = isHome && !scrolled;

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                padding: scrolled ? "9px 0" : "16px 0",
                background: transp ? "transparent" : "rgba(254,250,244,.97)",
                backdropFilter: transp ? "none" : "blur(28px) saturate(200%)",
                boxShadow: transp ? "none" : `0 1px 0 rgba(91,26,26,.07), 0 4px 32px rgba(91,26,26,.06)`,
                transition: "all .5s cubic-bezier(.22,1,.36,1)",
            }}>
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", minWidth: 0 }}>

                    {/* LOGO */}
                    <Link to="/" aria-label="Go to Home" onClick={() => setMob(false)} style={{ background: "none", border: "none", cursor: "pointer", lineHeight: 0, padding: 0, flexShrink: 0, display: 'inline-block' }}>
                        <LogoSVG
                            fill={transp ? "#ffffff" : T.dark}
                            style={{ height: scrolled ? 36 : 44, width: "auto", transition: "all .4s ease" }}
                        />
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hide-m" style={{ display: "flex", gap: 2 }}>
                        {NAV.map(n => {
                            const active = page === n.id;
                            const path = n.id === 'home' ? '/' : `/${n.id}`;
                            return (
                                <Link key={n.id} to={path} className="nav-pill" style={{
                                    padding: "9px 18px", borderRadius: 50, border: "none", fontSize: ".86rem",
                                    fontWeight: active ? 600 : 400,
                                    color: active ? "#fff" : (transp ? "rgba(255,255,255,.82)" : T.berry),
                                    background: active
                                        ? (transp ? "rgba(255,255,255,.2)" : T.berry)
                                        : "transparent",
                                    letterSpacing: active ? ".01em" : 0,
                                    boxShadow: active && !transp ? `0 2px 12px rgba(91,26,26,.25)` : "none",
                                    display: "inline-block"
                                }}>
                                    {n.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* HAMBURGER */}
                    <button aria-label="Open Mobile Menu" className="show-m" onClick={() => setMob(!mob)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", padding: 8, zIndex: 1001 }}>
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                width: 22, height: 2, borderRadius: 2, display: "block",
                                background: transp ? "rgba(255,255,255,.9)" : T.berry,
                                transition: "all .35s ease",
                                transform: mob ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none",
                                opacity: mob && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                </div>
            </nav>

            {/* MOBILE DRAWER */}
            <div style={{
                position: "fixed", top: 0, right: mob ? 0 : "-100%",
                width: "min(80vw,290px)", height: "100dvh",
                background: T.dark, padding: "0 28px 40px",
                display: "flex", flexDirection: "column",
                boxShadow: "0 0 80px rgba(0,0,0,.4)",
                transition: "right .5s cubic-bezier(.22,1,.36,1)", zIndex: 1000,
            }}>
                {/* Logo in drawer */}
                <div style={{ padding: "28px 0 24px", borderBottom: "1px solid rgba(255,255,255,.08)", marginBottom: 16 }}>
                    <LogoSVG fill="#ffffff" style={{ height: 40, width: "auto" }} />
                </div>
                {NAV.map(n => {
                    const path = n.id === 'home' ? '/' : `/${n.id}`;
                    return (
                        <Link key={n.id} to={path} onClick={() => setMob(false)} style={{
                            textAlign: "left", padding: "14px 0", background: "none", border: "none",
                            borderBottom: `1px solid rgba(255,255,255,.06)`, display: "block",
                            fontSize: "1rem", fontWeight: page === n.id ? 600 : 400,
                            color: page === n.id ? "#fff" : "rgba(255,255,255,.55)",
                            letterSpacing: page === n.id ? ".02em" : 0,
                            transition: "color .2s",
                        }}>
                            {n.label}
                        </Link>
                    )
                })}
                <div style={{ marginTop: "auto", fontSize: ".75rem", color: "rgba(255,255,255,.25)", letterSpacing: ".05em" }}>
                    VESU · PIPLOD · PAL · 9AM–12AM
                </div>
            </div>
            {mob && <div onClick={() => setMob(false)} style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,.3)", backdropFilter: "blur(4px)" }} />}
        </>
    );
}
