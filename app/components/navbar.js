'use client'

import Link from "next/link"

export default function Navbar() {
    return (<nav className="flex">
        <div className="title">🍵Ada<span>ence</span></div>
        <ul>
            <li>
            <Link href="/">🏠Accueil</Link>
            </li>
            <li>
            <Link href="/visite">Je rends visite</Link>
            </li>
            <li>
            <Link href="/guide">Guide du partage</Link>
            </li>
            <li>
            <Link href="/benevole">Devenir bénévole</Link>
            </li>

        </ul>
        <div className="don">
            <Link href="/don">Faire un don</Link>
        </div>

    </nav>)
}