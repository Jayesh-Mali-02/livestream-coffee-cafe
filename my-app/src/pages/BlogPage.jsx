import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fade } from '../components/ui/Fade';
import { T, INSTA } from '../utils/constants';
import { supabase } from '../lib/supabase';

/* ─── Custom Hook: Lazy Load Instagram Embeds ─── */
function useInstagramEmbed() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
            setIsLoaded(true);
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoaded) {
                const script = document.createElement('script');
                script.src = '//www.instagram.com/embed.js';
                script.async = true;
                script.onload = () => {
                    if (window.instgrm) window.instgrm.Embeds.process();
                    setIsLoaded(true);
                };
                document.body.appendChild(script);
                observer.disconnect();
            }
        }, { rootMargin: '200px' });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [isLoaded]);

    return containerRef;
}

/* ─── Static fallback articles ─── */
const ARTICLES = [
    {
        id: 'rise-of-specialty-coffee-surat',
        title: 'The Rise of Specialty Coffee Culture in Surat',
        excerpt: "Move over instant coffee. Surat's youth and creative professionals are embracing the nuanced flavors of specialty pour-overs, single-origin beans, and manually pulled espresso.",
        date: 'October 12, 2026',
        readTime: '4 min read',
        tag: 'Culture',
        img: '/assets/images/gallery/g2.webp',
    },
    {
        id: 'best-places-to-work-vesu',
        title: 'Why Livestream Coffee is the Best Place for Meetings in Vesu',
        excerpt: "Finding a quiet, ambient spot with high-speed WiFi and great food can be a challenge. Livestream Coffee has become the go-to remote workspace for Vesu's freelancers.",
        date: 'September 28, 2026',
        readTime: '3 min read',
        tag: 'Community',
        img: '/assets/images/gallery/g4.webp',
    },
    {
        id: 'understanding-espresso-notes',
        title: 'Understanding Espresso: Crema, Body, and Notes',
        excerpt: "Ever wondered why your favorite handcrafted flat white tastes so good? It all comes down to the perfect espresso extraction. Let's break down the science behind the golden crema.",
        date: 'August 15, 2026',
        readTime: '5 min read',
        tag: 'Education',
        img: '/assets/images/gallery/g7.webp',
    },
];

/* ─── Single article card ─── */
function ArticleCard({ art, i }) {
    return (
        <Fade delay={i * 0.08}>
            <article className="blog-card lift">
                {/* Image */}
                <div className="blog-card-img-wrap">
                    <div className="blog-card-tag">{art.tag}</div>
                    <img
                        src={art.img}
                        alt={art.title}
                        loading="lazy"
                        className="blog-card-img"
                    />
                </div>

                {/* Content */}
                <div className="blog-card-body">
                    <div className="blog-card-meta">
                        <span>{art.date}</span>
                        <span className="blog-card-dot" />
                        <span>{art.readTime}</span>
                    </div>
                    <h2 className="blog-card-title">{art.title}</h2>
                    <p className="blog-card-excerpt">{art.excerpt}</p>
                    <div className="blog-card-cta">
                        Read Article <span className="blog-card-arrow">→</span>
                    </div>
                </div>
            </article>
        </Fade>
    );
}

/* ─── Page ─── */
export function BlogPage() {
    const instaRef = useInstagramEmbed();
    const [articles, setArticles] = useState(ARTICLES);

    useEffect(() => {
        async function fetchPosts() {
            try {
                if (supabase.supabaseUrl === 'https://placeholder.supabase.co') return;
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .order('published_date', { ascending: false });
                if (error) throw error;
                if (data && data.length > 0) {
                    setArticles(
                        data.map((post) => ({
                            id: post.slug,
                            title: post.title,
                            excerpt: post.excerpt,
                            date: new Date(post.published_date).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'long', day: 'numeric',
                            }),
                            readTime: '5 min read',
                            tag: 'Article',
                            img: post.cover_image_url,
                        }))
                    );
                }
            } catch (err) {
                console.error('Error fetching blog posts:', err);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="page">
            <Helmet>
                <title>Journal | Livestream Coffee Surat</title>
                <meta name="description" content="Read the Livestream Coffee Journal. Stories about specialty coffee culture, our handcrafted recipes, barista tips, and community events in Surat." />
                <link rel="canonical" href="https://livestreamcoffee.in/blog" />
            </Helmet>

            {/* ── HERO ── */}
            <section
                className="page-hero"
                style={{
                    background: `linear-gradient(145deg,${T.dark} 0%,#280A0A 50%,${T.wine} 100%)`,
                    minHeight: '40vh',
                    display: 'flex', alignItems: 'flex-end',
                    padding: '130px 0 64px',
                    position: 'relative', overflow: 'hidden',
                }}
            >
                <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
                    <Fade>
                        <span style={{ display: 'inline-block', fontSize: '.65rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)', marginBottom: 16 }}>
                            Stories &amp; Thoughts
                        </span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.4rem,6vw,5.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1, margin: 0 }}>
                            The Journal
                        </h1>
                        <p style={{ fontSize: '.95rem', color: 'rgba(255,255,255,.5)', marginTop: 14, maxWidth: 420, lineHeight: 1.7 }}>
                            News, coffee education, and community stories straight from the barista bar.
                        </p>
                    </Fade>
                </div>
            </section>

            {/* ── BLOG LIST ── */}
            <section className="blog-list-section spad" style={{ background: T.cream }}>
                <div className="blog-list-inner">
                    <div className="blog-list-stack">
                        {articles.map((art, i) => (
                            <ArticleCard key={art.id} art={art} i={i} />
                        ))}
                    </div>

                    <Fade delay={0.3}>
                        <div style={{ textAlign: 'center', marginTop: 56 }}>
                            <button
                                className="btn-g blog-load-more"
                                onMouseEnter={e => { e.currentTarget.style.border = `1.5px solid ${T.gold}`; e.currentTarget.style.color = T.gold; }}
                                onMouseLeave={e => { e.currentTarget.style.border = `1.5px solid #EDE5D5`; e.currentTarget.style.color = T.mink; }}
                            >
                                Load More Articles
                            </button>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* ── INSTAGRAM ── */}
            <section
                ref={instaRef}
                className="spad"
                style={{ background: '#fff', borderTop: `1px solid ${T.linen}` }}
            >
                <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
                    <Fade>
                        <div style={{ textAlign: 'center', marginBottom: 44 }}>
                            <span style={{ display: 'inline-block', fontSize: '.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: T.gold, marginBottom: 12 }}>
                                Stay Connected
                            </span>
                            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 700, color: T.dark, lineHeight: 1.1 }}>
                                From The Gram
                            </h2>
                            <p style={{ fontSize: '.9rem', color: T.mink, marginTop: 12 }}>
                                Daily brews &amp; community vibes.{' '}
                                <a href={`https://instagram.com/${INSTA}`} target="_blank" rel="noopener noreferrer" style={{ color: T.berry, fontWeight: 700 }}>
                                    @{INSTA}
                                </a>
                            </p>
                        </div>
                    </Fade>

                    <div className="blog-insta-grid">
                        <Fade delay={0.1}>
                            <div className="blog-insta-embed">
                                <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DB1v-X6zK7P/" data-instgrm-version="14" style={{ background: '#FFF', border: '0', margin: '0', padding: '0', width: '100%' }}></blockquote>
                            </div>
                        </Fade>
                        <Fade delay={0.2}>
                            <div className="blog-insta-embed">
                                <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DBM5TqRzZzV/" data-instgrm-version="14" style={{ background: '#FFF', border: '0', margin: '0', padding: '0', width: '100%' }}></blockquote>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
}
