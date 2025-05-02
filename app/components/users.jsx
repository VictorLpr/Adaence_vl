'use client'

import UserCard from "./user-card"

const Users = ({ users , ref}) => {

    return (
        <section ref={ref} className='users'>
            {users.map((user, index) => (
                <UserCard key={index} {...user} />

            ))}
        </section>
    )
};

export default Users;
