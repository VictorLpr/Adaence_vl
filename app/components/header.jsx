'use client'

import Searchbar from './search-bar';

export default function Header() {
    
    return (
        <header>
            <div className='presentation'>
                <h1>Rétablissons les liens</h1>
                <p>Et si vous offriez un peu de votre temps à ceux qui en ont le plus besoin ? Prenez rendez-vous pour partager un moment avec une personne agée isolée</p>
            </div>
            <img className='background-img' src='./images/fiqih-pradana-qm-SgY--sVg-unsplash.jpg'></img>
            <Searchbar />
        </header>
    )
}