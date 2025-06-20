import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const menuItems = ['Home', 'About', 'Product', 'Contact'];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      const offset = 60;
      const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      if (isMobile) setMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <img
        src="https://nexso.ae/cdn/shop/files/gempages_570467022396195992-47fa007c-ed4c-493e-9ce5-054822685112.png?v=1749558524&width=185"
        alt="Nexso Logo"
        style={styles.logo}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Hamburger for Mobile */}
      {isMobile && (
        <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
      )}

      {/* Navigation */}
      <nav
        style={{
          ...styles.nav,
          ...(isMobile
            ? {
                position: 'absolute',
                top: '60px',
                left: 0,
                width: '100%',
                background: 'rgba(16,16,16, 0.95)',
                flexDirection: 'column',
                display: menuOpen ? 'flex' : 'none',
                padding: '20px 0',
                zIndex: 9999,
              }
            : {}),
        }}
      >
        <ul
          style={{
            ...styles.navList,
            ...(isMobile
              ? {
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                }
              : {}),
          }}
        >
          {menuItems.map((item, idx) => (
            <li
              key={item}
              style={{
                ...styles.navItem,
                ...(hoveredIndex === idx && styles.navItemHover),
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(item)}
            >
              {item}
              {hoveredIndex === idx && <div style={styles.underline} />}
            </li>
          ))}
        </ul>
      </nav>

      {/* Buy Button */}
      {!isMobile && (
        <a
          href="https://nexso.ae"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Buy Now
        </a>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    background: 'rgba(16,16,16, 0.85)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 10000,
    fontFamily: "'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  logo: {
    height: '24px',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: 'relative',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '14px',
    color: '#15F95B',
    padding: '8px 0',
    userSelect: 'none',
    transition: 'color 0.3s ease',
  },
  navItemHover: {
    color: '#15F95B',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '2px',
    width: '100%',
    backgroundColor: '#15F95B',
    borderRadius: '.5px',
  },
  button: {
    padding: '8px 20px',
    border: '1px solid #0FF8CB',
    backgroundColor: '#15F95B',
    color: '#fff',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    textDecoration: 'none',
  },
  buttonHover: {
    backgroundColor: '#00FF8C',
    color: '#fff',
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    cursor: 'pointer',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#15F95B',
    borderRadius: '2px',
  },
};

export default Header;
