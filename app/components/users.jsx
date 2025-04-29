'use client'

import UserCard from "./user-card"

export default function Users({users}) {

    return (
        <section className='users'>
            {users.map((user, index) => (
                <UserCard key={index} {...user} />

            ))}
        </section>
    )
}
