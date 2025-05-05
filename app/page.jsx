import './styles/globals.css';
import Header from './components/header';
import Persons from './components/persons';
import How from './components/how';
import MakeDifference from './components/make-difference';
import { Suspense } from 'react';


export default function HomePage() {


  return (
    <main>
      <Suspense>

        <Header />
      </Suspense>
      <Persons />
      <How />
      <MakeDifference />
    </main>
  );
}