'use client'

export default function Searchbar() {
    return (
        <form action="" className="search-bar">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="moment">Moment à partager</label>
                <select name="moment" id="moment">
                    <option value="repas">Un Repas</option>
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