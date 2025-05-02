'use client'
'use client'

import Link from "next/link";
import { useState } from "react";
import { House, Accessibility, BookOpen, HandHelping, Menu, X } from 'lucide-react';
import Don from "./don";
import { usePathname } from 'next/navigation';
import "../styles/navbar.css";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-title">
                🍵Ada<span>ence</span>
            </div>

            <button className="burger" onClick={toggleMenu}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <Link href="/" onClick={closeMenu} className={pathname === "/" ? "disabled" : ""}>
                        <House /> Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/visite" onClick={closeMenu} className={pathname === "/visite" ? "disabled" : ""}>
                        <Accessibility /> Je rends visite
                    </Link>
                </li>
                <li>
                    <Link href="/guide" onClick={closeMenu}>
                        <BookOpen /> Guide du partage
                    </Link>
                </li>
                <li>
                    <Link href="/benevole" onClick={closeMenu} className={pathname === "/benevole" ? "disabled" : ""}>
                        <HandHelping /> Devenir bénévole
                    </Link>
                </li>
                <li className="don-mobile">
                    <Don />
                </li>
            </ul>

            <div className="don-desktop">
                <Don />
            </div>
        </nav>
    );
}