'use client'
import Card from "./card"

export default function WhyVolunteer() {
    return (

        <section className="how">
            <h1>POURQUOI DEVENIR BÉNÉVOLE ?</h1>
            <p>Être bénévole chez Adaence, c'est bien plus qu'une simple activité. C'est une expérience simple activite. Ce
                enrichissante qui apporte du sens à votre vie et à celle des autres.</p>
            <div className="cards">
                <Card
                    imgUrl="./images/leaf.png"
                    title="Faire une différence concrète"
                    text="Chaque visite, chaque sourire partagé contribue à réduire l’isolement des personnes âgées et enrichit leur quotidien."
                />
                <Card
                    imgUrl="./images/brain.png"
                    title="Acquérir de nouvelles compétences"
                    text="Développez votre empathie, votre écoute active et vos qualités relationnelles tout en vous formant à l'accompagnement des aînés."
                />
                <Card
                    imgUrl="./images/bust.png"
                    title="Intégrer une communauté solidaire"
                    text="Rejoignez un réseau de bénévoles engagés et participez à des événements qui renforcent le lien social au sein de votre territoire."
                />
                <Card
                    imgUrl="./images/star.png"
                    title="Donner du sens à votre temps"
                    text="Transformez votre temps libre en moments précieux de partage intergénérationnel et de transmission de savoirs."
                />
            </div>
        </section>
    )
}