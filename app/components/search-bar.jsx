'use client'
import '../styles/search-bar.css'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Searchbar({ moment, localisation, num, onChange }) {
    const pathname = usePathname()
    const router = useRouter()
    const options = ["Un repas", "Un café/thé", "Une promenade", "Une sortie culturelle", "Autre activité"];
    const [formMoment, setFormMoment] = useState(moment)
    const [formLoc, setFormLoc] = useState(localisation)

    const handleSubmit = (e) => {
        e.preventDefault()

        const params = new URLSearchParams()
        if (formMoment) {
            params.set('moment', formMoment)
        }
        if (formLoc) {
            params.set('localisation', formLoc)
        }

        if (pathname === '/visite') {
            console.log(params)
            router.replace(`/visite?${params.toString()}`)
            onChange({ moment: formMoment, localisation: formLoc })
        } else {
            router.push(`/visite?${params.toString()}`)
        }
    }

    const handleReset = () => {
        setFormMoment('')
        setFormLoc('')
        onChange({ moment: '', localisation: '' })
        router.replace(`/visite`)

    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className='up-search-bar'>
                <div className='labeled'>
                    <label htmlFor="moment">Moment à partager</label>
                    <select name="moment"
                        id="moment"
                        value={formMoment}
                        onChange={e => setFormMoment(e.target.value)}
                    >
                        <option value="">Tous les moments possibles</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className='labeled'>
                    <label htmlFor="localisation">Localisation</label>
                    <input
                        type="text"
                        name="localisation"
                        placeholder="Votre ville"
                        value={formLoc}
                        onChange={e => setFormLoc(e.target.value)}
                    />
                </div>
                <input type="submit" value="Rechercher 🔎" />
            </div>
            <div className='results' style={{ display: pathname === '/visite' ? 'flex' : 'none' }}>
                <p>{num} moments trouvés</p>
                <p className='refresh' onClick={handleReset}>Réinitialiser les filtres</p>
            </div>
        </form>
    )
}