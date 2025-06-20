import React from 'react';

const Story = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '0 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.7,
    color: '#333',
    background: 'transparent',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#fff',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1db954',
    marginBottom: '8px',
  };

  const paragraphStyle = {
    color: '#858585',
    fontSize: '1.05rem',
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Our Story</h2>
      <p style={paragraphStyle}>
        Nexso is a premier brand offering exceptional products across diverse categories. Driven by a passion for quality and innovation, we strive to redefine modern living by delivering products that not only meet but exceed expectations.
      </p>

      <div style={gridStyle}>
        <div>
          <h3 style={subheadingStyle}>Mission</h3>
          <p style={paragraphStyle}>
            To deliver exceptional, high-quality products that enhance everyday living, driven by innovation, design excellence, and a commitment to customer satisfaction.
          </p>
        </div>

        <div>
          <h3 style={subheadingStyle}>Vision</h3>
          <p style={paragraphStyle}>
            To become a globally recognized brand that sets the standard for quality, innovation, and trust across every product category we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
