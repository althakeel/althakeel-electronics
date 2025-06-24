import React from 'react';

const BottomBar = () => {
  const style = {
    backgroundColor: '#111',
    color: '#aaa',
    fontSize: '0.9rem',
    textAlign: 'center',
    padding: '12px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: '1px solid #333',
    userSelect: 'none',
  };

  const linkStyle = {
    color: '#1db954',
    textDecoration: 'none',
    marginLeft: '5px',
  };

  return (
    <div style={style}>
      &copy; {new Date().getFullYear()} Developed by
      <a
        href="https://www.althakeel.com"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Al Thakeel
      </a>
    </div>
  );
};

export default BottomBar;
