import React, { useState } from 'react';
import { T, WHATSAPP, INSTA } from '../utils/constants';
import { IcWhatsApp, IcInstagram } from '../components/ui/Icons';

export function FloatingCTA() {
    const [hov, setHov] = useState(null);
    return (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
            {[
                { id: "wa", href: `https://wa.me/${WHATSAPP}`, lbl: "Chat on WhatsApp", bg: "#25D366", icon: <IcWhatsApp s={22} /> },
                { id: "ig", href: INSTA, lbl: "Follow on Instagram", bg: "radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)", icon: <IcInstagram s={22} c="#fff" /> },
            ].map(btn => (
                <div key={btn.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ background: T.dark, color: "#FDF5E6", fontSize: ".7rem", fontWeight: 600, letterSpacing: ".03em", padding: "6px 13px", borderRadius: 50, whiteSpace: "nowrap", opacity: hov === btn.id ? 1 : 0, transform: hov === btn.id ? "translateX(0)" : "translateX(10px)", transition: "all .3s ease", pointerEvents: "none", boxShadow: "0 2px 12px rgba(0,0,0,.3)" }}>{btn.lbl}</span>
                    <a href={btn.href} target="_blank" rel="noopener noreferrer"
                        style={{ width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: btn.bg, boxShadow: "0 4px 20px rgba(0,0,0,.2)", transition: "all .45s cubic-bezier(.34,1.56,.64,1)", transform: hov === btn.id ? "scale(1.12) translateY(-3px)" : "scale(1)" }}
                        onMouseEnter={() => setHov(btn.id)} onMouseLeave={() => setHov(null)}>
                        {btn.icon}
                    </a>
                </div>
            ))}
        </div>
    );
}
