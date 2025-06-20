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

  return (
    <div style={style}>
      &copy; {new Date().getFullYear()} Developed by Al Thakeel
    </div>
  );
};

export default BottomBar;
