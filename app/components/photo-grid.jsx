'use client'
import '../styles/photo-grid.css';

export default function PhotoGrid({ images }) {
    return (
      <div className="photo-grid">
        {images.map((image, index) => (
          <div className="photo-item" key={index}>
            <img src={image} alt={`person-${index}`} />
          </div>
        ))}
      </div>
    );
  }