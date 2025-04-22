import LikeButton from './component/like-button';
import Navbar from './component/navbar';
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