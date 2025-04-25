"use client"
import '../styles/globals.css';
import Searchbar from '../components/search-bar';
import { useSearchParams } from 'next/navigation';
import Users from '../components/users';
import { users } from '../../public/data/users.js'
import { useState } from 'react';

export default function Visite() {
    const searchParams = useSearchParams();
    const initialFilters = {
        moment: searchParams.get('moment') || '',
        localisation: searchParams.get('localisation') || '',
    }
    const [filters, setFilters] = useState(initialFilters);

    const filteredUsers = users.filter(user => {
        const matchMoment = !filters.moment || user.type === filters.moment;
        const matchLocalisation = !filters.localisation || user.city.toLowerCase().includes(filters.localisation);
        return matchMoment && matchLocalisation;
    });

    return (
        <main>
            <div className='header'>

                <Searchbar
                    moment={filters.moment}
                    localisation={filters.localisation}
                    num={filteredUsers.length}
                    onChange={setFilters}
                />
            </div>
                <Users users={filteredUsers} />
  
        </main>
    );
}