import React from 'react';

const Banner = () => {
  const bannerStyles = {
    position: 'relative',
    width: '100%',
    maxWidth: '100vw', // Prevent any overflow beyond viewport
    height: '80vh',
    backgroundImage: 'url("https://res.cloudinary.com/drkfb976p/image/upload/v1750327832/14_ujinpv.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingLeft: '5%',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    color: '#fff',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  };

  const overlayStyles = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
  };

  const headingStyles = {
    fontWeight: 600,
    fontSize: '4rem',
    marginBottom: '0.5rem',
    lineHeight: 1.1,
  };

  const subheadingStyles = {
    fontWeight: 400,
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  };

  const buyNowButtonStyles = {
    padding: '12px 40px',
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(21, 249, 91, 0.2)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const handleBuyNowHover = (e) => {
    e.currentTarget.style.backgroundColor = '#15f95b';
    e.currentTarget.style.color = '#000';
  };

  const handleBuyNowLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#000';
    e.currentTarget.style.color = '#fff';
  };

  return (
    <section style={bannerStyles}>
      <div style={overlayStyles}></div>
      <div style={contentStyles}>
        <h1 style={headingStyles}>Empowering Tomorrow, Today</h1>
        <p style={subheadingStyles}>
          Explore Nexso’s innovative electronics designed to transform your digital lifestyle.
        </p>
        <button
          style={buyNowButtonStyles}
          onMouseEnter={handleBuyNowHover}
          onMouseLeave={handleBuyNowLeave}
          onClick={() => alert('Buy Now clicked!')}
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
