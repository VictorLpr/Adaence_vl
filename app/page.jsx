import './styles/globals.css';
import Header from './components/header';
import Navbar from './components/navbar';


export default function HomePage() {

  return (
    <div className='main'>
      <Navbar />

      <Header />
    </div>
  );
}