import React from 'react';
import './three.css';

const ThreePics = () => {
  return (
    <div className="threepics-container">
      <h1 className="threepics-background-text">PRODUCTS</h1>
      <p className="threepics-question">Which type of gear are you looking for?</p>
      <a href="#" className="threepics-viewmore">View more →</a>

      <div className="threepics-cards">
        <div className="threepics-card">
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750329626/15_djwwrs.webp" alt="Gaming" />
          </div>
          <h3>Gaming</h3>
        </div>

        <div className="threepics-card">
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750329625/16_rpb7j4.webp" alt="Graphic Design" />
          </div>
          <h3>Graphic Design</h3>
        </div>

        <div className="threepics-card">
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/drkfb976p/image/upload/v1750329625/17_qpqj7r.webp" alt="Office & Others" />
          </div>
          <h3>Office & Others</h3>
        </div>
      </div>
    </div>
  );
}

export default ThreePics;
