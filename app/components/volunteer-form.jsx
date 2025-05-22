'use client'
import '../styles/volunteer-form.css'

import { useState } from 'react';

export default function VolunteerForm() {
    const options = ["une fois par semaine", "une fois par mois", "une fois par trimestre", "une fois par an"];
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        zipCode: '',
        dispo: '',
        motivation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const response = await fetch('https://myapp-wlng.onrender.com/volunteers', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },           
                body: JSON.stringify(formData)
            });

            const result = await response.json()
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className='volunteer-form' name='volunteer-form' onSubmit={handleSubmit}>
            <h2>FORMULAIRE D'INSCRIPTION</h2>
            <p>Remplissez ce formulaire pour rejoindre notre reseau de benevoles. Nous vous
                contacterons rapidement pour vous présenter les prochaines étapes.</p>
            <div className='name'>
                <div className='labeled'>
                    <label htmlFor="firstName">Prénom <span>*</span></label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Votre prénom"
                        required
                        autoComplete='off'
                        value={formData.firstName}
                        onChange={handleChange}
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
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='labeled'>
                <label htmlFor="email">Adresse email <span>*</span></label>
                <input
                    type="email"
                    name="email"
                    placeholder="exemple@email.com"
                    required
                    autoComplete='off'
                    value={formData.email}
                    onChange={handleChange}
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
                        value={formData.city}
                        onChange={handleChange}
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
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='labeled'>
                <label htmlFor="dispo">Disponibilités <span>*</span></label>
                <select name="dispo" id="dispo" required value={formData.dispo} onChange={handleChange}>
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
                    placeholder='Parlez-nous de votre motivation à devenir bénévole chez Adaence...'
                    rows={8}
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Envoyer ma candidature" />
        </form>
    );
}
