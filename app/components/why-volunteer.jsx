'use client'

export default function WhyVolunteer() {
    return (

        <section className="how">
        <h1>POURQUOI DEVENIR BÉNÉVOLE ?</h1>
        <p>Être bénévole chez Adaence, c'est bien plus qu'une simple activité. C'est une expérience simple activite. Ce
            enrichissante qui apporte du sens à votre vie et à celle des autres.</p>
        <div className="cards">
            <div className="card">
                <img src="./images/leaf.png" alt="" width={32} />
                <h2>Faire une difference
                    concrète</h2>
                <p>Chaque visite, chaque sourire partage contribue a reduire
                    isolement des personnes agees et enrichit leur quotidien.</p>
            </div>
            <div className="card">
                <img src="./images/brain.png" alt="" width={32} />
                <h2>Acquerir de nouvelles
                    competences</h2>
                <p>Developpez votre empathie, votre ecoute active et vos qualités relationnelles tout en vous
                    formant à l'accompagnement des aînés.</p>
            </div>
            <div className="card">
                <img src="./images/bust.png" alt="" width={32} />
                <h2>Integrer une
                    communauté solidaire</h2>
                <p>Rejoignez un reseau de bénévoles engagés et participez à des évenements qui renforcent
                    le lien social au sein de votre territoire.</p>
            </div>
            <div className="card">
                <img src="./images/star.png" alt="" width={32} />
                <h2>Donner du sens à votre
                    temps</h2>
                <p>Transformez votre temps libre en moments precieux de partage
                    intergenerationnel et de transmission de savoirs.</p>
            </div>
        </div>
    </section>
    )
}