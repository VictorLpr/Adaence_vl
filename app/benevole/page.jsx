'use client'
import VolunteerForm from '../components/volunteer-form';
import WhyVolunteer from '../components/why-volunteer';
import '../styles/globals.css';


export default function Benevole() {
    return (<main>
        <header className='header-volunteer'>
            <div className='presentation'>
                <h1>DEVENIR BÉNÉVOLE</h1>
                <p>Rejoignez notre communauté et donnez du sens à votre temps libre. En devenant bénévole chez Adaence, vous contribuez à rétablir des liens humains essentiels avec nos aînés.</p>
            </div>
            <img className='background-img' src='/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg'></img>
            <VolunteerForm />
        </header>
        <WhyVolunteer />
    </main>)
}