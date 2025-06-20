import React, { useState, useEffect } from 'react';

const gridStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 40px',
    background: 'linear-gradient(to bottom, transparent 0%, #000 50%, transparent 100%)',
    height: '60vh',
    gap: '30px',
  },
  leftColumnBase: {
    flex: '1 1 40%',
    minWidth: '300px',
    color: '#fff',
    opacity: 0,
    transform: 'translateX(-100px)',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  leftColumnVisible: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  rightColumnBase: {
    flex: '1 1 55%',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transform: 'translateX(100px)',
    transition: 'opacity 1s ease, transform 1s ease',
  },
  rightColumnVisible: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  subheading: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#ccc',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '20px',
    padding: '14px 28px',
    fontSize: '16px',
    backgroundColor: '#15F95B',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block',
  },
  image: {
    width: '100%',
    maxWidth: '700px',
    borderRadius: '10px',
    objectFit: 'cover',
  }
};

const Grid = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timeout = setTimeout(() => setAnimate(true), 100); // small delay to trigger transition
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={gridStyles.container}>
      <div
        style={{
          ...gridStyles.leftColumnBase,
          ...(animate ? gridStyles.leftColumnVisible : {}),
        }}
      >
        <h2 style={gridStyles.heading}>Smart Tech Starts with Nexso</h2>
        <p style={gridStyles.subheading}>
          Explore cutting-edge electronics designed for your home, work, and lifestyle. From smart gadgets to high-performance gear — Nexso brings innovation to your fingertips.
        </p>
        <a
          href="https://nexso.ae"
          target="_blank"
          rel="noopener noreferrer"
          style={gridStyles.button}
        >
          Shop Nexso Now
        </a>
      </div>
      <div
        style={{
          ...gridStyles.rightColumnBase,
          ...(animate ? gridStyles.rightColumnVisible : {}),
        }}
      >
        <img
          src="https://res.cloudinary.com/drkfb976p/image/upload/v1750434810/Web_mockup_nhw5bj.webp"
          alt="Nexso Electronics Preview"
          style={gridStyles.image}
        />
      </div>
    </div>
  );
};

export default Grid;
