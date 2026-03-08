import React, { useState } from 'react';
import { Fade } from '../components/ui/Fade';
import { T, BRANCHES, WHATSAPP, INSTA } from '../utils/constants';
import { IcClock, IcWhatsApp, IcInstagram, IcStar, IcPin } from '../components/ui/Icons';

export function ContactPage() {
    const [activeBranch, setActiveBranch] = useState(0);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", subject: "General Enquiry", branch: "Any Branch" });
    const [sent, setSent] = useState(false);
    const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
    const submit = () => {
        if (!form.name || !form.email || !form.message) return;
        const txt = `👋 *New Website Message*\n\n*Branch:* ${form.branch}\n*Subject:* ${form.subject}\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone || "Not provided"}\n\n*Message:*\n${form.message}`;
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
        setSent(true);
        setTimeout(() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "", subject: "General Enquiry", branch: "Any Branch" }); }, 3500);
    };

    const inp = { width: "100%", padding: "15px 18px", fontFamily: "'Outfit',sans-serif", fontSize: ".9rem", borderRadius: 12, background: T.cream, color: T.dark };
    const b = BRANCHES[activeBranch];

    return (
        <div className="page">
            <section style={{ background: `linear-gradient(145deg,${T.dark} 0%,#4A1010 50%,${T.berry} 100%)`, minHeight: "50vh", display: "flex", alignItems: "flex-end", padding: "130px 0 72px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", width: "100%", position: "relative", zIndex: 1 }}>
                    <Fade>
                        <span style={{ display: "inline-block", fontSize: ".65rem", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,.38)", marginBottom: 16 }}>Get In Touch</span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.8rem,6vw,5.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1 }}>Contact Us</h1>
                        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.5)", marginTop: 14, lineHeight: 1.7 }}>Three locations across Surat — find us wherever you are.</p>
                    </Fade>
                </div>
            </section>

            {/* Branch selector cards */}
            <section style={{ padding: "60px 0 0", background: T.cream }}>
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 56 }} className="g3">
                        {BRANCHES.map((br, i) => (
                            <Fade key={br.id} delay={i * .08}>
                                <div onClick={() => setActiveBranch(i)} style={{
                                    borderRadius: 20, overflow: "hidden", cursor: "pointer",
                                    border: activeBranch === i ? `2px solid ${T.berry}` : `1px solid ${T.linen}`,
                                    background: "#fff",
                                    boxShadow: activeBranch === i ? `0 8px 40px rgba(91,26,26,.18)` : "0 2px 12px rgba(91,26,26,.07)",
                                    transition: "all .35s ease",
                                }}>
                                    {/* Map preview */}
                                    <div style={{ position: "relative", height: 160, pointerEvents: "none" }}>
                                        <iframe title={`Map ${br.name}`} src={br.mapSrc} width="100%" height="160" style={{ border: 0, display: "block" }} loading="lazy" />
                                        <div style={{ position: "absolute", top: 10, left: 12, padding: "4px 12px", background: activeBranch === i ? T.berry : T.dark, color: "#fff", fontSize: ".6rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 50, transition: "background .3s" }}>
                                            {br.tag}
                                        </div>
                                    </div>
                                    {/* Info */}
                                    <div style={{ padding: "18px 20px 20px" }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                                            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 700, color: T.dark }}>{br.name}</h3>
                                            {activeBranch === i && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,.2)", display: "block" }} />}
                                        </div>
                                        <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                                            <IcPin s={13} c={T.rose} /><p style={{ fontSize: ".8rem", color: T.mink, lineHeight: 1.6, whiteSpace: "pre-line" }}>{br.address}</p>
                                        </div>
                                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                            <IcClock s={13} c={T.rose} /><p style={{ fontSize: ".8rem", color: T.mink }}>9 AM – 12 AM · Every Day</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info + Form */}
            <section style={{ padding: "0 0 100px", background: T.cream }}>
                <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
                    <div className="cgrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "start" }}>

                        {/* LEFT — INFO */}
                        <Fade style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {[
                                { icon: <IcClock s={20} c="#fff" />, title: "Opening Hours", body: "Every Day  ·  9:00 AM – 12:00 AM", type: "text" },
                                { icon: <IcWhatsApp s={20} />, title: "WhatsApp", body: "Chat with us for reservations or queries", type: "wa" },
                                { icon: <IcInstagram s={20} c="#fff" />, title: "Instagram", body: "@livestreamcoffee", type: "insta" },
                            ].map(c => (
                                <div key={c.title} className="tcard" style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 22px", background: "#fff", borderRadius: 18, boxShadow: "0 2px 16px rgba(91,26,26,.07)", border: `1px solid ${T.linen}` }}>
                                    <div style={{ width: 48, height: 48, minWidth: 48, background: `linear-gradient(135deg,${T.wine},${T.rose})`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", boxShadow: "0 4px 14px rgba(91,26,26,.18)" }}>{c.icon}</div>
                                    <div>
                                        <div style={{ fontSize: ".84rem", fontWeight: 600, color: T.dark, marginBottom: 5 }}>{c.title}</div>
                                        {c.type === "insta" ? <a href={INSTA} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".87rem", color: T.berry, fontWeight: 500 }}>{c.body}</a>
                                            : c.type === "wa" ? <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: ".87rem", color: "#25D366", fontWeight: 500 }}>{c.body}</a>
                                                : <p style={{ fontSize: ".87rem", color: T.mink, lineHeight: 1.7, whiteSpace: "pre-line" }}>{c.body}</p>}
                                    </div>
                                </div>
                            ))}

                            {/* Active branch full map */}
                            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 6px 28px rgba(91,26,26,.1)", border: `1px solid ${T.linen}` }}>
                                <iframe key={b.id} title={`Map ${b.name}`} src={b.mapSrc} width="100%" height="240" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" />
                            </div>
                        </Fade>

                        {/* RIGHT — FORM */}
                        <Fade delay={.1}>
                            <div style={{ background: "#fff", padding: "44px 40px", borderRadius: 24, boxShadow: "0 10px 50px rgba(91,26,26,.1)", border: `1px solid ${T.linen}` }}>
                                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.9rem", fontWeight: 700, color: T.dark, marginBottom: 6 }}>Send a Message</h2>
                                <p style={{ fontSize: ".83rem", color: T.mink, marginBottom: 28, lineHeight: 1.6 }}>We'll reply via WhatsApp within a few hours. Fields marked * are required.</p>

                                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                    {/* Branch selector */}
                                    <select name="branch" value={form.branch} onChange={handle} className="finp" style={{ ...inp }}>
                                        {["Any Branch", ...BRANCHES.map(b => b.name)].map(o => <option key={o}>{o}</option>)}
                                    </select>

                                    {/* Subject */}
                                    <select name="subject" value={form.subject} onChange={handle} className="finp" style={{ ...inp }}>
                                        {["General Enquiry", "Table Reservation", "Feedback", "Catering / Events", "Other"].map(o => <option key={o}>{o}</option>)}
                                    </select>

                                    {[{ name: "name", ph: "Your Name *", type: "text" }, { name: "email", ph: "Your Email *", type: "email" }, { name: "phone", ph: "Phone Number (optional)", type: "tel" }].map(f => (
                                        <input key={f.name} name={f.name} type={f.type} placeholder={f.ph} value={form[f.name]} onChange={handle} className="finp" style={inp} />
                                    ))}
                                    <textarea name="message" placeholder="Your Message *" rows={5} value={form.message} onChange={handle} className="finp" style={{ ...inp, resize: "vertical", minHeight: 110 }} />

                                    <button onClick={submit} className="btn-p" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 32px", background: sent ? "#1ebe57" : "#25D366", color: "#fff", fontSize: ".95rem", fontWeight: 600, borderRadius: 50, border: "none", boxShadow: "0 6px 22px rgba(37,211,102,.3)", letterSpacing: ".03em" }}>
                                        {sent ? <><IcStar s={18} c="#fff" filled /> Sent!</> : <><IcWhatsApp s={20} /> Send on WhatsApp</>}
                                    </button>
                                    <p style={{ fontSize: ".73rem", color: T.mink, textAlign: "center", lineHeight: 1.5 }}>Tapping opens WhatsApp with your message pre-filled.<br />Your details are never stored by this website.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
}
