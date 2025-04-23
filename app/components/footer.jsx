import {
    Facebook,
    Instagram,
    Linkedin,
    Twitch
} from 'lucide-react';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3 className="footer-title">ADAENCE</h3>
                    <p className="footer-text">
                        Notre mission est de recréer du lien avec les personnes âgées isolées,
                        en leur offrant des moments de partage, d'écoute et de présence.
                    </p>
                    <div className="footer-icons">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                        <a href="#"><Twitch size={20} /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">INFORMATIONS UTILES</h3>
                    <ul className="footer-list">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Liste des activités</a></li>
                        <li><a href="#">Nous contacter</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">CONTACT</h3>
                    <p className="footer-text">
                        116 Rue du Faubourg Saint-Martin<br />
                        75010 Paris, France<br />
                        Email: <a href="mailto:contact@adaence.fr">contact@adaence.fr</a><br />
                        Tél: +33 1 23 45 67 89
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Adaence. Tous droits réservés. <br />
                Ce site a été développé dans le cadre d'un projet pour ADA Tech School.
            </div>
        </footer>
    );
}
