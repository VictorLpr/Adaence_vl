"use client"
import '../styles/globals.css';
import Searchbar from '../components/search-bar';
import { useSearchParams } from 'next/navigation';
import Users from '../components/users';
import { users } from '../../public/data/users.js'
import { useState } from 'react';

export default function Visite() {
    const searchParams = useSearchParams();
    const usersPerPage = 8;

    const initialFilters = {
        moment: searchParams.get('moment') || '',
        localisation: searchParams.get('localisation') || '',
    }
    const [filters, setFilters] = useState(initialFilters);
    const [page, setPage] = useState(1)

    const filteredUsers = users.filter(user => {
        const matchMoment = !filters.moment || user.type === filters.moment;
        const matchLocalisation = !filters.localisation || user.city.toLowerCase().includes(filters.localisation);
        return matchMoment && matchLocalisation;
    });

    const maxPage = Math.ceil(filteredUsers.length / usersPerPage)
    const pagedUsers = filteredUsers.slice((page - 1) * usersPerPage, page * usersPerPage)
    const pages = [];
    for (let i = 1; i <= maxPage; i++) {
        pages.push(i);
    }

    const handlePageChange = (newPage) => {
            setPage(newPage);
    };


    return (
        <main>
            <div className='header'>

                <Searchbar
                    moment={filters.moment}
                    localisation={filters.localisation}
                    num={filteredUsers.length}
                    onChange={(newFilters) => {
                        setFilters(newFilters);
                        setPage(1);
                    }}
                />
            </div>
                <Users users={pagedUsers} />
                <div className="pagination">
              

                    {pages.map((p) => {
                        return (
                            <button
                                key={p}
                                className={p === page ? 'active' : ''}
                                onClick={() => handlePageChange(p)}
                            >
                                {p}
                            </button>
                        );
                    })}

                </div>
        </main>
    );
}