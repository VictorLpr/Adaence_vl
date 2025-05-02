'use client'

import { forwardRef } from "react"
import UserCard from "./user-card"

const Users = forwardRef(({ users }, ref) => {

    return (
        <section ref={ref} className='users'>
            {users.map((user, index) => (
                <UserCard key={index} {...user} />

            ))}
        </section>
    )
});

export default Users;
