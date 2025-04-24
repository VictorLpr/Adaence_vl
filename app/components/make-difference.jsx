import Don from "./don";
import Link from "next/link";
export default function MakeDifference() {
    return (
        <section className="make-difference">
            <h1>PRÊT-E À FAIRE LA DIFFÉRENCE ?</h1>
            <p>Offrez un peu de votre temps, partagez un moment, créez du lien ... Chaque présence compte. En
                tendant la main à une personne âgée, vous lui offrez bien plus qu'une visite : une vraie bouffée de
                chaleur humaine</p>
            <div className="links">
                <div className="visite">
                    <Link href="/visite">Programmer une visite</Link>
                </div>
                <Don />
                <div className="volunteer">
                    <Link href="/benevole">Devenir bénévole</Link>
                </div>

            </div>
        </section>
    )
}