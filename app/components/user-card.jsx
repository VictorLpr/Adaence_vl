'use client'

export default function UserCard (props) {
    return (
        <div className="user-card">
            <img src={props.imageUrl}></img>
            <p>{props.type}</p>
            <h3>{props.firstname}</h3>
            <p>{props.job} · {props.age} ans</p>
            <p>{props.city}</p>
            <p>{props.description}</p>
            <div className="moment">Programmer un moment</div>
        </div>
    );
}