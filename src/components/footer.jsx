import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px 60px',
    backgroundColor: '#121212',
    color: '#eee',
    flexWrap: 'wrap',
    gap: '30px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: '0px solid #1db954',
    minHeight: "15vh",
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '20px',
    flex: '1 1 0',
    minWidth: '150px',
  };

  const logoImageStyle = {
    height: '60px',
    // filter: 'drop-shadow(0 0 5px #1db954)',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  const menuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontSize: '1.2rem',
  };

  const menuItemStyle = {
    cursor: 'pointer',
    color: '#eee',
    textDecoration: 'none',
    position: 'relative',
    paddingBottom: '4px',
    transition: 'color 0.3s ease',
  };

  const menuItemHoverStyle = {
    color: '#1db954',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '25px',
    fontSize: '2rem',
    cursor: 'pointer',
  };

  const socialIconLinkStyle = {
    display: 'inline-block',
    color: '#eee',
    transition: 'color 0.3s ease',
  };

  const socialIcons = [
    {
      name: 'Facebook',
      svg: (
        <svg
          fill="currentColor"
          height="32"
          viewBox="0 0 24 24"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      svg: (
        <svg
          fill="currentColor"
          height="32"
          viewBox="0 0 24 24"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.918 4.918 0 00-8.384 4.482 13.94 13.94 0 01-10.125-5.134 4.822 4.822 0 001.523 6.574 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.63 1.964 2.445 3.393 4.604 3.433a9.868 9.868 0 01-6.102 2.104c-.397 0-.79-.023-1.17-.067a13.933 13.933 0 007.548 2.212c9.058 0 14.01-7.514 14.01-14.02 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      svg: (
        <svg
          fill="currentColor"
          height="32"
          viewBox="0 0 24 24"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.57 1.54a1.14 1.14 0 112.28 0 1.14 1.14 0 01-2.28 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      ),
    },
  ];

  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [policyHoverIndex, setPolicyHoverIndex] = React.useState(null);

  const mainMenuItems = ['Home', 'About', 'Services', 'Contact'];
  const policyItems = ['Privacy Policy', 'Terms of Service', 'Support', 'FAQ'];

  return (
    <footer style={footerStyle}>
      {/* Column 1: Logo */}
      <div style={columnStyle}>
        <img
          src="https://nexso.ae/cdn/shop/files/gempages_570467022396195992-47fa007c-ed4c-493e-9ce5-054822685112.png?v=1749558524&width=185"
          alt="Logo"
          style={logoImageStyle}
        />
      </div>

      {/* Column 2: Main Menu */}
      <nav style={{ ...columnStyle, ...menuStyle }}>
        {mainMenuItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              ...menuItemStyle,
              ...(hoverIndex === index ? menuItemHoverStyle : {}),
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Column 3: Policy/Support Menu */}
      <nav style={{ ...columnStyle, ...menuStyle }}>
        {policyItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
            style={{
              ...menuItemStyle,
              ...(policyHoverIndex === index ? menuItemHoverStyle : {}),
            }}
            onMouseEnter={() => setPolicyHoverIndex(index)}
            onMouseLeave={() => setPolicyHoverIndex(null)}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Column 4: Social Icons */}
      <div style={{ ...columnStyle, justifyContent: 'flex-start' }}>
        <div style={socialIconsStyle}>
          {socialIcons.map(({ name, svg }) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              style={socialIconLinkStyle}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1db954')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#eee')}
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
