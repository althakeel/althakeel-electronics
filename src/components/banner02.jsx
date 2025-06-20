import React from 'react';

const bannerStyles = {
  container: {
    width: '100%',
    height: '400px',
    backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0633/3756/2217/files/gempages_570467022396195992-d5b07e34-a351-4900-ab7c-b712575cb034.webp?v=1749985688")', // example image
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
