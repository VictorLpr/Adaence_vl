'use client'
import '../styles/search-bar.css'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Searchbar({ moment, localisation, num, onChange }) {
    const pathname = usePathname()
    const router = useRouter()

    const [formMoment, setFormMoment] = useState(moment || '')
    const [formLoc, setFormLoc] = useState(localisation || '')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === 'moment') setFormMoment(value)
        if (name === 'localisation') setFormLoc(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const params = new URLSearchParams()
        if (formMoment) params.set('moment', formMoment)
        if (formLoc) params.set('localisation', formLoc)

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
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className='up-search-bar'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="moment">Moment à partager</label>
                    <select name="moment" id="moment" value={formMoment} onChange={handleInputChange}>
                        <option value="">Tous les moments possibles</option>
                        {["Un repas", "Un café/thé", "Une promenade", "Une sortie culturelle", "Autre activité"].map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="localisation">Localisation</label>
                    <input
                        type="text"
                        name="localisation"
                        placeholder="Votre ville"
                        value={formLoc}
                        onChange={handleInputChange}
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