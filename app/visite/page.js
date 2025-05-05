"use client"
import '../styles/globals.css';
import Searchbar from '../components/search-bar';
import Users from '../components/users';
import { users } from '../../public/data/users.js'
import { useState, useRef, Suspense } from 'react';

export default function Visite() {
    const usersPerPage = 8;
    const usersRef = useRef()

    const [filters, setFilters] = useState({
        moment: '',
        localisation: ''
    });

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
        usersRef.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <main>
            <header className='visite-header'>
                <Suspense>

                    <Searchbar
                        num={filteredUsers.length}
                        onChange={(newFilters) => {
                            setFilters(newFilters);
                            setPage(1);
                        }}
                    />
                </Suspense>
            </header>
            <Users ref={usersRef} users={pagedUsers} />
            <div className="pagination">
                <button onClick={() => handlePageChange(page - 1)} className={page === 1 ? "hide previous-next" : "previous-next"}>
                    {"<< Précédent"}
                </button>

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

                <button onClick={() => handlePageChange(page + 1)} className={page === maxPage ? "hide previous-next" : "previous-next"}>
                    {"Suivant >>"}
                </button>

            </div>
        </main>
    );
}