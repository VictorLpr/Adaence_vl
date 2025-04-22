'use client'

import Link from "next/link"

export default function Navbar() {
    return (<nav className="flex">
        <div>🍵Adaence</div>
        <ul>
            <li>
            <Link href="/">Accueil</Link>
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
        <div>
            <Link href="/don">Faire un don</Link>
        </div>

    </nav>)
}