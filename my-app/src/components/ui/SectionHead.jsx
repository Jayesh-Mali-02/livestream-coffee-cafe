import React from 'react';
import { useReveal } from '../../hooks/useReveal';
import { T } from '../../utils/constants';

export function SectionHead({ tag, title, sub, light = false, center = true }) {
    const [ref, vis] = useReveal();
    return (
        <div ref={ref} style={{ textAlign: center ? "center" : "left", marginBottom: 64, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: "all .75s ease" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: ".65rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: light ? "rgba(255,255,255,.4)" : T.gold, marginBottom: 14 }}>
                <span style={{ width: 24, height: 1, background: light ? "rgba(255,255,255,.2)" : T.gold, display: "inline-block" }} />
                {tag}
                <span style={{ width: 24, height: 1, background: light ? "rgba(255,255,255,.2)" : T.gold, display: "inline-block" }} />
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 700, color: light ? "#fff" : T.dark, lineHeight: 1.08, letterSpacing: "-.02em", marginBottom: sub ? 14 : 0 }}>{title}</h2>
            {sub && <p style={{ fontSize: "1rem", color: light ? "rgba(255,255,255,.55)" : T.mink, maxWidth: 520, margin: center ? "0 auto" : 0, lineHeight: 1.7 }}>{sub}</p>}
            <div style={{ width: 40, height: 2.5, background: light ? `linear-gradient(90deg,rgba(255,255,255,.35),transparent)` : `linear-gradient(90deg,${T.gold},transparent)`, margin: center ? "16px auto 0" : "16px 0 0", borderRadius: 2 }} />
        </div>
    );
}
