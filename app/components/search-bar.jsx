'use client'
import '../styles/search-bar.css'

export default function Searchbar() {
    const options = ["Un repas", "Un café/thé", "Une promenade", "Une sortie culturelle", "Autre activité"]

    return (
        <form action="/visite" method="GET" className="search-bar">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="moment">Moment à partager</label>
                <select name="moment" id="moment">
                    <option value="">Tous les moments possibles</option>
                    {options.map(option => (
                    <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="localisation">Localisation</label>
                <input type="text" name="localisation" placeholder="Votre ville" />
            </div>
            <input type="submit" value="Rechercher 🔎" />
        </form>
    )
}