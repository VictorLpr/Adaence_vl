"use client"
import '../styles/globals.css';
import Searchbar from '../components/search-bar';
import { useSearchParams } from 'next/navigation';
import {users} from '../../public/data/users.js'
import UserCard from '../components/user-card';


export default function Visite() {
          const searchParams = useSearchParams();
          const moment = searchParams.get('moment');
          const localisation = searchParams.get('localisation')
          console.log(moment)
          console.log(users[0])
    return (<div className="main">
        <div className='header'>
            <Searchbar moment={moment} localisation={localisation}/>
        </div>
            <section className='users'>
                {users.map((user, index) => (
                    <UserCard key={index} {...user} />

                ))}
            </section>
    </div>)
}