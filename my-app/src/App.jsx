import React, { useState, useCallback } from 'react';
import './styles/global.css';

import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { FloatingCTA } from './layouts/FloatingCTA';

import { HomePage } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
    const [page, setPage] = useState("home");

    const navigate = useCallback((id) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setPage(id), 80);
    }, []);

    const PAGES = {
        home: <HomePage setPage={navigate} />,
        about: <AboutPage setPage={navigate} />,
        menu: <MenuPage />,
        gallery: <GalleryPage />,
        contact: <ContactPage />,
    };

    return (
        <>
            <Navbar page={page} setPage={navigate} />
            <main>{PAGES[page]}</main>
            <Footer setPage={navigate} />
            <FloatingCTA />
        </>
    );
}
