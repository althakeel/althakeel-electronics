import React from 'react';

const bannerStyles = {
  container: {
    width: '100%',
    height: '400px',
    backgroundImage: 'url("https://res.cloudinary.com/drkfb976p/image/upload/v1750524587/30_rti2hg.webp")', // example image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '0 2px 6px rgba(0,0,0,0.7)',
    marginTop:"40px"
  },
};

const Banner02 = () => {
  return (
    <div style={bannerStyles.container}>

    </div>
  );
};

export default Banner02;
