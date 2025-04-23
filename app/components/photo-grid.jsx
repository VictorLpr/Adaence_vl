'use client'
import '../styles/photo-grid.css';

export default function PhotoGrid({ images }) {
    return (
      <div className="photo-grid">
        {images.map((image, index) => (
          <div className={`photo-item item${index < 4 ? index%2: (index%2)-1}`} key={index} style={{gridColumn: `${index % 4 + 1}`}}>
            <img src={image} alt={`person-${index}`} />
          </div>
        ))}
      </div>
    );
  }