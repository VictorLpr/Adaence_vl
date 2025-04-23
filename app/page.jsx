import Navbar from './components/navbar';
import './styles/globals.css';
import Searchbar from './components/search-bar';


export default function HomePage() {
 
  return (
    <div className='main'>
      <Navbar />
      <img className='background-img' src='./images/fiqih-pradana-qm-SgY--sVg-unsplash.jpg'></img>
      <Searchbar />
    </div>
  );
}