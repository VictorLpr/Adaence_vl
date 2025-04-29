'use client'
import '../styles/comment.css'

export default function Comment({ name, duration, quote, imageUrl }) {
    return (
      <div className="comment-card">
        <div className="comment-avatar">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="comment-content">
          <p className="comment-name">{name}</p>
          <p className="comment-role">Bénévole depuis {duration}</p>
          <blockquote className="comment-quote">
            ❝{quote}❞
          </blockquote>
        </div>
      </div>
    );
  }