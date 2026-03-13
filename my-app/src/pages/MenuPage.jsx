import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fade } from '../components/ui/Fade';
import { T, ZOMATO_URL, SWIGGY_URL } from '../utils/constants';
import { DRINKS, FOOD } from '../data/menu'; // Fallback
import { IcCoffee, IcUtensils, IcWhatsApp, IcGlass, IcTea, IcBlender, IcSandwich, IcBowl, IcSalad, IcCake } from '../components/ui/Icons';

/* ─── Item row — matches .mrow from global.css ─────────── */
function ItemRow({ item, isLast }) {
    const isNew = item.desc && item.desc.trim().toUpperCase() === 'NEW';
    const hasDesc = item.desc && !isNew;

    return (
        <div className="mrow" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            borderBottom: isLast ? 'none' : `1px solid ${T.linen}`,
        }}>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '.87rem', fontWeight: 500, color: T.espr, lineHeight: 1.4 }}>
                    {item.name}
                    {isNew && (
                        <span style={{
                            display: 'inline-block',
                            fontSize: '.55rem', fontWeight: 800,
                            letterSpacing: '.08em', textTransform: 'uppercase',
                            background: `linear-gradient(135deg,${T.rose},${T.berry})`,
                            color: '#fff', borderRadius: 3,
                            padding: '2px 6px', marginLeft: 8,
                            verticalAlign: 'middle', position: 'relative', top: -1,
                        }}>New</span>
                    )}
                </div>
                {hasDesc && (
                    <div style={{ fontSize: '.72rem', color: T.mink, marginTop: 2, fontStyle: 'italic' }}>
                        {item.desc}
                    </div>
                )}
            </div>
            <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.05rem', fontWeight: 700,
                color: T.gold, whiteSpace: 'nowrap', paddingTop: 1,
                letterSpacing: '.01em',
            }}>
                {item.price}
            </span>
        </div>
    );
}

/* ─── Category card — matches Home offerings card style ─── */
function CategoryCard({ cat, i }) {
    const useTwoCol = cat.items.length > 8;

    return (
        <Fade delay={i * .06}>
            <div className="lift" style={{
                background: '#fff',
                borderRadius: 22,
                padding: '32px 28px 24px',
                boxShadow: '0 2px 20px rgba(91,26,26,.07)',
                border: `1px solid ${T.linen}`,
                boxSizing: 'border-box',
            }}>
                {/* Icon + title — same as home page offering cards */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <div style={{
                        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                        background: `linear-gradient(135deg,${T.wine},${T.rose})`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: `0 6px 20px rgba(91,26,26,.20)`,
                    }}>
                        <span style={{ color: '#fff', display: 'flex' }}>{cat.icon}</span>
                    </div>
                    <h3 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.5rem', fontWeight: 700,
                        color: T.dark, margin: 0, lineHeight: 1.15,
                    }}>
                        {cat.cat}
                    </h3>
                </div>

                {/* Gold gradient divider — matches site's decorative line style */}
                <div style={{
                    height: 1,
                    background: `linear-gradient(to right,${T.gold}55,${T.linen},transparent)`,
                    marginBottom: 16,
                }} />

                {/* Item list */}
                <div className={useTwoCol ? "menu-items-grid" : "menu-items-single"}>
                    {cat.items.map((item, j) => (
                        <ItemRow
                            key={item.name}
                            item={item}
                            isLast={
                                useTwoCol
                                    ? j >= cat.items.length - (cat.items.length % 2 === 0 ? 2 : 1)
                                    : j === cat.items.length - 1
                            }
                        />
                    ))}
                </div>
            </div>
        </Fade>
    );
}

/* ─── Main page ────────────────────────────────────────── */
export function MenuPage() {
    const [tab, setTab] = useState('drinks');
    const [menuData, setMenuData] = useState({ drinks: DRINKS, food: FOOD }); // Default to static data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMenu() {
            setLoading(true);
            try {
                const { supabase } = await import('../lib/supabase');
                
                // Check if Supabase is connected
                if (supabase.supabaseUrl === 'https://placeholder.supabase.co') {
                   console.log("Using static data as Supabase is not configured.");
                   setLoading(false);
                   return;
                }

                const { data, error } = await supabase
                    .from('menu_items')
                    .select('*')
                    .order('category')
                    .order('name');
                
                if (error) {
                    console.error('Error fetching menu:', error);
                    // Fallback to static
                    setLoading(false);
                    return;
                }

                if (data && data.length > 0) {
                    // Group the data into the structure expected by the UI.
                    // This is a complex mapping, we'll implement a helper.
                    const groupedDrinks = groupMenuData(data, 'drinks');
                    const groupedFood = groupMenuData(data, 'food');
                    
                    if(groupedDrinks.length > 0) {
                       setMenuData(prev => ({...prev, drinks: groupedDrinks}));
                    }
                    if(groupedFood.length > 0) {
                       setMenuData(prev => ({...prev, food: groupedFood}));
                    }
                }
            } catch (err) {
                console.error('Exception fetching menu:', err);
            } finally {
                setLoading(false);
            }
        }
        
        fetchMenu();
    }, []);

    const DATA = tab === 'drinks' ? menuData.drinks : menuData.food;

    return (
        <div className="page">
            <Helmet>
                <title>Menu | Livestream Coffee</title>
                <meta name="description" content="Explore Livestream Coffee's menu of specialty coffees, handcrafted espresso, pour-overs, and artisan food freshly prepared every morning in Surat." />
            </Helmet>

            {/* ── HERO — matches other page heroes exactly ── */}
            <section className="page-hero" style={{
                background: `linear-gradient(145deg,${T.dark} 0%,#4A1010 50%,${T.berry} 100%)`,
                minHeight: '48vh',
                display: 'flex', alignItems: 'flex-end',
                padding: '130px 0 64px',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '30px 30px' }} />
                <div style={{ position: 'absolute', right: -60, bottom: -60, width: 380, height: 380, borderRadius: '50%', border: '40px solid rgba(255,255,255,.03)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', right: 30, bottom: 30, width: 200, height: 200, borderRadius: '50%', border: '20px solid rgba(255,255,255,.04)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', width: '100%', position: 'relative', zIndex: 1 }}>
                    <Fade>
                        <span style={{ display: 'inline-block', fontSize: '.65rem', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)', marginBottom: 16 }}>
                            What We Serve
                        </span>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.8rem,6vw,5.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1, margin: 0 }}>
                            Our Menu
                        </h1>
                        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.5)', marginTop: 14, maxWidth: 440, lineHeight: 1.7, marginBottom: 28 }}>
                            Handcrafted beverages and fresh food — made with love, served with care.
                        </p>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                            <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 600, marginRight: 8 }}>Order Online:</span>
                            <a href={ZOMATO_URL} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 24px", background: "#E23744", color: "#fff", fontSize: ".82rem", fontWeight: 700, borderRadius: 50, boxShadow: "0 6px 20px rgba(226,55,68,.25)", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "transform 0.2s" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                                🏍 Zomato
                            </a>
                            <a href={SWIGGY_URL} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 24px", background: "#FC8019", color: "#fff", fontSize: ".82rem", fontWeight: 700, borderRadius: 50, boxShadow: "0 6px 20px rgba(252,128,25,.25)", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "transform 0.2s" }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                                🛵 Swiggy
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>

            {/* ── MENU CONTENT ── */}
            <section style={{ padding: '56px 0 88px', background: T.cream }} className="spad">
                <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

                    {/* TAB SWITCHER — pill style matching site buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
                        <div style={{
                            display: 'inline-flex',
                            background: '#fff', padding: 5, borderRadius: 50,
                            boxShadow: '0 2px 20px rgba(91,26,26,.09)',
                            border: `1px solid ${T.linen}`,
                        }}>
                            {[
                                { id: 'drinks', icon: <IcCoffee s={15} c={tab === 'drinks' ? '#fff' : T.mink} />, lbl: 'Drinks' },
                                { id: 'food',   icon: <IcUtensils s={15} c={tab === 'food'   ? '#fff' : T.mink} />, lbl: 'Food'   },
                            ].map(t => (
                                <button key={t.id} onClick={() => setTab(t.id)} className="btn-p" style={{
                                    padding: '11px 36px',
                                    fontSize: '.88rem', fontWeight: 600, letterSpacing: '.03em',
                                    border: 'none', borderRadius: 50,
                                    background: tab === t.id
                                        ? `linear-gradient(135deg,${T.berry},${T.wine})`
                                        : 'transparent',
                                    color: tab === t.id ? '#fff' : T.mink,
                                    boxShadow: tab === t.id ? '0 4px 18px rgba(91,26,26,.28)' : 'none',
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    transition: 'all .4s cubic-bezier(.34,1.56,.64,1)',
                                }}>
                                    {t.icon} {t.lbl}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* MASONRY — tight packing like gallery */}
                    <div className="menu-masonry">
                        {DATA.map((cat, i) => (
                            <div key={cat.cat} className="menu-masonry-item">
                                <CategoryCard cat={cat} i={i} />
                            </div>
                        ))}
                    </div>

                    {/* CUSTOMISE STRIP */}
                    <Fade>
                        <div className="menu-custom-strip" style={{
                            marginTop: 40, padding: '20px 26px',
                            background: '#fff',
                            borderRadius: 18,
                            border: `1px solid ${T.linen}`,
                            boxShadow: '0 2px 12px rgba(91,26,26,.06)',
                        }}>
                            <div style={{
                                width: 44, height: 44, borderRadius: 13, flexShrink: 0,
                                background: `linear-gradient(135deg,${T.wine},${T.rose})`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 14px rgba(91,26,26,.22)',
                            }}>
                                <IcWhatsApp s={18} />
                            </div>
                            <p style={{ fontSize: '.86rem', color: T.espr, margin: 0 }}>
                                <strong style={{ color: T.wine }}>Customise your order</strong> — oat milk, extra shots, decaf, or sugar-free options available. Just ask our barista!
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
}

// Map category icons
const CATEGORY_ICONS = {
    "Hot Coffee": <IcCoffee s={16} />,
    "Iced Coffee": <IcGlass s={16} />,
    "Signature Coffee Mocktails": <IcBlender s={16} />,
    "Manual Brews": <IcCoffee s={16} />,
    "Hot Chocolate": <IcTea s={16} />,
    "Specialty Teas": <IcTea s={16} />,
    "Frappe": <IcBlender s={16} />,
    "Shakes": <IcBlender s={16} />,
    "Mocktails": <IcGlass s={16} />,
    "All Day Breakfast": <IcBowl s={16} />,
    "Toasts": <IcSalad s={16} />,
    "Sandwiches": <IcSandwich s={16} />,
    "Appetizers": <IcSalad s={16} />,
    "Pasta": <IcBowl s={16} />,
    "Bowls": <IcBowl s={16} />,
    "Desserts": <IcCake s={16} />,
};

// Map backend categories to frontend tab groups
const DRINK_CATEGORIES = ["Hot Coffee", "Iced Coffee", "Signature Coffee Mocktails", "Manual Brews", "Hot Chocolate", "Specialty Teas", "Frappe", "Shakes", "Mocktails"];
const FOOD_CATEGORIES = ["All Day Breakfast", "Toasts", "Sandwiches", "Appetizers", "Pasta", "Bowls", "Desserts"];

// Helper to group flat database rows into the nested array structure expected by the UI.
function groupMenuData(rows, type) {
    const validCategories = type === 'drinks' ? DRINK_CATEGORIES : FOOD_CATEGORIES;
    const filteredRows = rows.filter(r => validCategories.includes(r.category) && r.is_available !== false);
    
    // Group by category string
    const grouped = filteredRows.reduce((acc, row) => {
        if (!acc[row.category]) {
            acc[row.category] = {
                cat: row.category,
                icon: CATEGORY_ICONS[row.category] || <IcCoffee s={16} />, // Default icon
                items: []
            };
        }
        acc[row.category].items.push({
            name: row.name,
            desc: row.description, // Mapped from DB to UI
            price: row.price ? `₹${row.price}` : '₹0', // Map numeric to formatted string
        });
        return acc;
    }, {});
    
    // Convert object back to array in the original order defined by DRINK_CATEGORIES or FOOD_CATEGORIES
    const result = [];
    validCategories.forEach(catName => {
        if (grouped[catName]) {
            result.push(grouped[catName]);
        }
    });

    return result;
}
