'use client'

import Link from "next/link";
import { House , Accessibility, BookOpen,HandHelping} from 'lucide-react';
import Don from "./don";


export default function Navbar() {
    return (<nav className="flex">
        <div className="title">🍵Ada<span>ence</span></div>
        <ul>
            <li>
            <Link href="/"><House />Accueil</Link>
            </li>
            <li>
            <Link href="/visite"><Accessibility />Je rends visite</Link>
            </li>
            <li>
            <Link href="/guide"><BookOpen />Guide du partage</Link>
            </li>
            <li>
            <Link href="/benevole"><HandHelping />Devenir bénévole</Link>
            </li>

        </ul>
        <Don />
    </nav>)
}