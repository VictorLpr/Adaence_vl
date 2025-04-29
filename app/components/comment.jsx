'use client'
import '../styles/comment.css'

export default function Comment({ name, duration, quote, imageUrl }) {
    return (
        <div className="comment-card">
            <div className="comment-avatar">
                <img src={imageUrl} alt={name} />
                <div className="comment-content">
                    <p className="comment-name">{name}</p>
                    <p className="comment-role">Bénévole depuis {duration}</p>
                </div>
            </div>
            <blockquote className="comment-quote">
                ❝{quote}❞
            </blockquote>
        </div>
    );
}