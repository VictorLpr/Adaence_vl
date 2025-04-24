

export default function How() {
    return (

        <section className="how">
            <h1>comment ça marche</h1>
            <p>Offrir un peu de votre temps, c'est offrir beaucoup. Découvrez comment planifier une visite en
                toute simplicité.</p>
            <div className="cards">
                <div className="card">
                    <img src="./images/loupe.png" alt="" width={32} />
                    <h2>1. Choisissez une
                        rencontre</h2>
                    <p>Parcourez les profils de nos aînés et trouvez la personne
                        avec qui vous aimeriez partager un moment chaleureux.</p>
                </div>
                <div className="card">
                    <img src="./images/memo.png" alt="" width={32} />
                    <h2>2. Remplissez le
                        formulaire</h2>
                    <p>Indiquez vos disponibilités et vos envies. Cela nous aide à
                        organiser une rencontre adaptée et en toute confiance.</p>
                </div>
                <div className="card">
                    <img src="./images/waving.png" alt="" width={32} />
                    <h2>3. Partagez un
                    moment</h2>
                    <p>Rendez visite à la personne âgée dans un cadre bienveillant. Une
discussion, une balade ou simplement l'aider à une tâche
Chaque moment compte.</p>
                </div>
                <div className="card">
                    <img src="./images/heart.png" alt="" width={32} />
                    <h2>4. Créez du lien</h2>
                    <p>Si le courant passe, vous pouvez revenir ! Ensemble, tissons des
liens durables et combattons l'isolement pas a pas.</p>
                </div>
            </div>
        </section>
    )
}