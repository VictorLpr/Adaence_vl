'use client'
import '../styles/volunteer-form.css'

export default function VolunteerForm() {
    const options = ["une fois par semaine", "une fois par mois", "une fois par trimestre", "une fois par an"]

    return (
        <form className='volunteer-form' name='volunteer-form'>
            <h2>FORMULAIRE D'INSCRIPTION</h2>
            <p>Remplissez ce formulaire pour rejoindre notre reseau de benevoles. Nous vous
                contacterons rapidement pour vous presenter les prochaines etapes.</p>
            <div className='name'>
                <div className='labeled'>
                    <label htmlFor="firstName">Prénom <span>*</span></label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Votre prénom"
                        required
                        autoComplete='off'
                    />
                </div>
                <div className='labeled'>
                    <label htmlFor="lastName">Nom <span>*</span></label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Votre nom"
                        required
                        autoComplete='off'
                    />
                </div>
            </div>
            <div className='labeled'>
                <label htmlFor="email">Adresse email <span>*</span></label>
                <input
                    type="text"
                    name="email"
                    placeholder="exmple@email.com"
                    required
                    autoComplete='off'
                />
            </div>
            <div className='adress'>
                <div className='labeled'>
                    <label htmlFor="city">Ville <span>*</span></label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Votre ville"
                        required
                        autoComplete='off'
                    />
                </div>
                <div className='labeled'>
                    <label htmlFor="zipCode">Code postal <span>*</span></label>
                    <input
                        type="text"
                        name="zipCode"
                        placeholder="Code postal"
                        required
                        autoComplete='off'
                    />
                </div>
            </div>
            <div className='labeled'>
                <label htmlFor="dispo">Disponibilités <span>*</span></label>
                <select name="dispo" id="dispo">
                    <option value="">Sélectionnez vos disponibilités</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className='labeled'>
                <label htmlFor="motivation">Votre motivation <span>*</span></label>
                <textarea
                    name='motivation'
                    placeholder='Parlez-nous de votre motivattion à devenir bénévole chez Adaence...'
                    rows={8}
                >
                </textarea>
            </div>
            <input type="submit" value="Envoyer ma candidature" />


        </form>
    )
}