import LikeButton from './components/like-button';
import Navbar from './components/navbar';
import './styles/globals.css';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
 
  return (
    <div>
      <Navbar />
     
      <LikeButton />
    </div>
  );
}