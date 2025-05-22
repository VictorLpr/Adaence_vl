"use client"
import '../styles/globals.css';
import Searchbar from '../components/search-bar';
import Users from '../components/users';
import { useState, useRef, useEffect, Suspense } from 'react';

export default function Visite() {
    const usersPerPage = 8;
    const usersRef = useRef();

    const [filters, setFilters] = useState({
        moment: '',
        localisation: ''
    });

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const fetchUsers = (moment, localisation) => {
        setLoading(true);
        const queryParams = new URLSearchParams();

        if (moment) queryParams.append('moment', moment);
        if (localisation) queryParams.append('localisation', localisation);

        fetch(`http://localhost:4000/elders?${queryParams.toString()}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erreur lors du fetch :', err);
                setLoading(false);
            });
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const moment = searchParams.get("moment") || '';
        const localisation = searchParams.get("localisation") || '';
        setFilters({ moment, localisation });
        fetchUsers(moment, localisation);
    }, []);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
        fetchUsers(newFilters.moment, newFilters.localisation);
    };

    const maxPage = Math.ceil(users.length / usersPerPage);
    const pagedUsers = users.slice((page - 1) * usersPerPage, page * usersPerPage);
    const pages = Array.from({ length: maxPage }, (_, i) => i + 1);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        usersRef.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    if (loading) return <div>Chargement...</div>;

    return (
        <main>
            <header className='visite-header'>
                <Suspense>
                    <Searchbar
                        num={users.length}
                        onChange={handleFilterChange}
                    />
                </Suspense>
            </header>
            <Users ref={usersRef} users={pagedUsers} />
            <div className="pagination">
                <button onClick={() => handlePageChange(page - 1)} className={page === 1 ? "hide previous-next" : "previous-next"}>
                    {"<< Précédent"}
                </button>

                {pages.map((p) => (
                    <button
                        key={p}
                        className={p === page ? 'active' : ''}
                        onClick={() => handlePageChange(p)}
                    >
                        {p}
                    </button>
                ))}

                <button onClick={() => handlePageChange(page + 1)} className={page === maxPage ? "hide previous-next" : "previous-next"}>
                    {"Suivant >>"}
                </button>
            </div>
        </main>
    );
}
