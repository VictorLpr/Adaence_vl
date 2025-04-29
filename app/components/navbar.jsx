'use client'

import Link from "next/link";
import { House , Accessibility, BookOpen,HandHelping} from 'lucide-react';
import Don from "./don";
import { usePathname } from 'next/navigation'



export default function Navbar() {
        const pathname = usePathname()
    
    return (<nav className="flex">
        <div className="title">🍵Ada<span>ence</span></div>
        <ul>
            <li>
            <Link href="/" className = {pathname == "/" ? "disabled" : ""}><House />Accueil</Link>
            </li>
            <li>
            <Link href="/visite" className = {pathname == "/visite" ? "disabled" : ""} ><Accessibility />Je rends visite</Link>
            </li>
            <li>
            <Link href="/guide"><BookOpen />Guide du partage</Link>
            </li>
            <li>
            <Link href="/benevole" className = {pathname == "/benevole" ? "disabled" : ""}><HandHelping />Devenir bénévole</Link>
            </li>

        </ul>
        <Don />
    </nav>)
}