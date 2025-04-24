import PhotoGrid from './photo-grid';
import Link from 'next/link';
export default function Persons () {
    const images = [
        './images/danie-franco-ClHY-KyvI1M-unsplash.jpg',
        './images/tim-mossholder-FRPbQvAwY10-unsplash.jpg',
        './images/tatiana-zanon-MMhazsT2wtM-unsplash.jpg',
        './images/quentin-mahe-a6jCS61X1Hg-unsplash.jpg',
        './images/vladimir-soares-z_8Jqe0Cc-s-unsplash.jpg',
        './images/shimo-yann-7nTFrV1xQGE-unsplash.jpg',
        './images/michael-matveev-Bk8zT4gLLt0-unsplash.jpg',
        './images/mohammad-samir-huHXKc_usoA-unsplash.jpg'
      ]
    return (
    <section className='intro'>
        <h1>Les personnalité à rencontrer</h1>
        <p>Feuilletez les visages de celles et ceux qui attendent simplement un peu de votre temps. Chaque
        sourire porte une histoire, chaque rencontre est une promesse.</p>
      <PhotoGrid images={images} />
      <div className='visite'>
      <Link href="/visite">Voir tous les profils</Link>
      </div>
    </section>
    );
}