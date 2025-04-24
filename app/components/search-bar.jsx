'use client'
import '../styles/search-bar.css'
import { usePathname } from 'next/navigation'

export default function Searchbar(props) {
    const options = ["Un repas", "Un café/thé", "Une promenade", "Une sortie culturelle", "Autre activité"]
    const pathname = usePathname()

    return (
        <form action="/visite"  className="search-bar">
            <div className='up-search-bar'>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="moment">Moment à partager</label>
                <select name="moment" id="moment" defaultValue={props.moment || ""}>
                    <option value="">Tous les moments possibles</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="localisation">Localisation</label>
                <input type="text" name="localisation" placeholder="Votre ville" defaultValue={props.localisation || ""}/>
            </div>
            <input type="submit" value="Rechercher 🔎" />
            </div>
            <div className='results' style={{display : pathname == '/visite' ? 'flex' : 'none'}}>
                    <p> moments trouvés</p>
                    <p>Réintialiser les filtres</p>
            </div>
        </form>
    )
}