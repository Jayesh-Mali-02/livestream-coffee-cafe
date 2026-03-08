import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export function Fade({ children, delay = 0, style = {}, x = 0 }) {
    const [ref, vis] = useReveal();
    return (
        <div ref={ref} style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : `translateY(24px) translateX(${x}px)`,
            transition: `opacity .75s ease ${delay}s, transform .75s ease ${delay}s`,
            ...style,
        }}>{children}</div>
    );
}
