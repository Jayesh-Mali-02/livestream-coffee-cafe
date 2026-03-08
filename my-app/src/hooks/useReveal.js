import { useState, useEffect, useRef } from "react";

export function useReveal(rootMargin = "-30px") {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const el = ref.current; if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } }, { threshold: .06, rootMargin: `0px 0px ${rootMargin} 0px` });
        obs.observe(el); return () => obs.disconnect();
    }, [rootMargin]);
    return [ref, vis];
}
