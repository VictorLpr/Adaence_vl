import Comment from '../components/comment';
import VolunteerForm from '../components/volunteer-form';
import WhyVolunteer from '../components/why-volunteer';
import '../styles/globals.css';
import Link from "next/link"



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
        <section className='testimony'>
            <h1>TÉMOIGNAGES DE BÉNÉVOLES</h1>
            <p>Découvrez ce que nos bénévoles ont à dire sur leur expérience avec Adaence</p>
            <Comment
                name="Marie D."
                duration="1 an"
                quote="J'ai commencé à rendre visite à Germaine il y a un an. Ce qui devait être une simple visite hebdomadaire est devenu une véritable amitié. Nous partageons des recettes, des histoires et beaucoup de rires. Cette expérience m’a ouvert les yeux sur la richesse que représente l’échange intergénérationnel."
                imageUrl="./images/anil-sharma-vssw0Ad6TFg-unsplash.jpg"
            />
            <Comment 
                name="Thomas L."
                duration="6 mois"
                quote={`Je cherchais une façon de m'engager localement et Adaence m'a permis de rencontrer Robert, un ancien menuisier passionné. Nos promenades hebdomadaires sont
devenues des moments que j'attends avec impatience. J'apprends énormément de son expérience et de sa vision de la vie.`}
                imageUrl="./images/diego-hernandez-MSepzbKFz10-unsplash.jpg"
            />
        </section>
        <section className="make-difference">
            <h1>DES QUESTIONS ?</h1>
            <p>Nous sommes là pour répondre à toutes vos interrogations concernant le bénévolat chez Adaence.
            N'hésitez pas à nous contacter pour en savoir plus sur notre démarche.</p>
            <div className="links">
                <div className="visite">
                    <Link href="#">Foire aux questions</Link>
                </div>
                <div className="don">
                    <Link href="#">Contactez-nous</Link>
                </div>

            </div>
        </section>
    </main>)
}