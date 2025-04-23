import LikeButton from './components/like-button';
import Navbar from './components/navbar';
import './styles/globals.css';
import Searchbar from './components/search-bar';
import Image from 'next/image';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
 
  return (
    <div className='main'>
      <Navbar />
      <img className='background-img' src='./images/fiqih-pradana-qm-SgY--sVg-unsplash.jpg'></img>
      <Searchbar />
    </div>
  );
}