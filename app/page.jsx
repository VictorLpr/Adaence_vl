import './styles/globals.css';
import Header from './components/header';
import Persons from './components/persons';
import How from './components/how';


export default function HomePage() {
  

  return (
    <div className='main'>
      <Header />
      <Persons />
      <How />
    </div>
  );
}