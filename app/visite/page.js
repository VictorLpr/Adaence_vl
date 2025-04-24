"use client"
import '../styles/globals.css';
import Searchbar from '../components/search-bar';
import { useSearchParams } from 'next/navigation';
 


export default function Visite() {
          const searchParams = useSearchParams();
          const moment = searchParams.get('moment');
          const localisation = searchParams.get('localisation')
    return (<div className="main">
        <div className='header'>
            <Searchbar moment={moment} localisation={localisation}/>
        </div>
    </div>)
}