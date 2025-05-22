'use client'

export default function UserCard (props) {
    const handleClick = () => {
        console.log(`name : ${props.firstname} | Moment Favori : ${props.type}`)
    }
    return (
        <div className="user-card">
            <div className="image-holder">

            <img src={props.url_image}></img>
            </div>
            <p>{props.type}</p>
            <h3>{props.firstname}</h3>
            <p>{props.job} · {props.age} ans</p>
            <p>{props.city}</p>
            <p>{props.description}</p>
            <div className="moment" onClick={handleClick}>Programmer un moment</div>
        </div>
    );
}