import React from 'react';

const Gallery = () => {
  const images = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764717/A4_jyp2x8.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/9_dya0vb.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760530/4_h0m3px.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764717/A4_jyp2x8.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/9_dya0vb.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760530/4_h0m3px.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764717/A4_jyp2x8.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/9_dya0vb.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760530/4_h0m3px.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764717/A4_jyp2x8.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/9_dya0vb.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760530/4_h0m3px.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764717/A4_jyp2x8.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/9_dya0vb.webp',
  ];

  // Calculate number of rows based on maxHeight and base row size
  const maxHeight = 600; // px max height of gallery
  const baseRowHeight = 75; // px height of each grid-auto-row unit
  const totalRows = Math.floor(maxHeight / baseRowHeight);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">y</h2>
      <div
        className="grid-container"
        style={{ maxHeight: `${maxHeight}px`, gridAutoRows: `${baseRowHeight}px` }}
      >
        {images.map((image, index) => (
          <div className={`grid-item size-${(index % 4) + 1}`} key={index}>
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      <style>{`
        .gallery-section {
          padding: 30px 20px;
          background-color:!1e1e1e;
        }

        .gallery-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          color: #111;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 10px;
          grid-auto-flow: dense;
          max-width: 1200px;
          margin: 0 auto;
          background: #1e1e1e;
          border-radius: 12px;
          padding: 10px;
          overflow: hidden;
        }

        .grid-item {
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease;
          display: flex;
        }

        .grid-item:hover {
          transform: scale(1.03);
        }

        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 12px;
        }

        /* Different item sizes */
        .size-1 {
          grid-column: span 2;
          grid-row: span 4; /* 4 rows * 75px = 300px tall */
        }

        .size-2 {
          grid-column: span 1;
          grid-row: span 2; /* 150px tall */
        }

        .size-3 {
          grid-column: span 1;
          grid-row: span 3; /* 225px tall */
        }

        .size-4 {
          grid-column: span 2;
          grid-row: span 2; /* 150px tall */
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
