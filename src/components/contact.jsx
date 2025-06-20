import React from 'react';

const contactStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 20px 40px',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minHeight: '70vh',
    // Optional: center the form vertically
  },
  title: {
    fontSize: '32px',
    marginBottom: '25px',
    color: '#e0e0e0',
    textAlign: 'center',
    fontWeight: '600',
    textShadow: '0 1px 3px rgba(0,0,0,0.7)',
  },
  form: {
    width: '100%',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(20, 20, 20, 0.75)', // darker translucent panel
    boxShadow:
      'inset 0 0 10px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)', // inset glow + outer shadow
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#f0f0f0',
    fontWeight: '500',
  },
  input: {
    padding: '16px',
    fontSize: '16px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#eee',
    outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
    transition: 'background-color 0.3s ease',
  },
  inputFocus: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 8px 2px #15F95B',
  },
  textarea: {
    padding: '16px',
    fontSize: '16px',
    borderRadius: '12px',
    border: 'none',
    resize: 'vertical',
    minHeight: '110px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#eee',
    outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
    transition: 'background-color 0.3s ease',
  },
  textareaFocus: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 8px 2px #15F95B',
  },
  button: {
    padding: '16px',
    fontSize: '18px',
    borderRadius: '14px',
    border: 'none',
    backgroundColor: '#15F95B',
    color: '#0a0a0a',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(21, 249, 91, 0.7)',
  },
  buttonHover: {
    backgroundColor: '#0eb93c',
    boxShadow: '0 6px 20px rgba(14, 185, 60, 0.9)',
    color: '#fff',
  },
};

const Contact = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [inputFocus, setInputFocus] = React.useState({
    name: false,
    email: false,
    message: false,
  });

  return (
    <div style={contactStyles.container}>
      <h2 style={contactStyles.title}>Get in Touch</h2>
      <form style={contactStyles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            ...contactStyles.input,
            ...(inputFocus.name ? contactStyles.inputFocus : {}),
          }}
          onFocus={() => setInputFocus((prev) => ({ ...prev, name: true }))}
          onBlur={() => setInputFocus((prev) => ({ ...prev, name: false }))}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            ...contactStyles.input,
            ...(inputFocus.email ? contactStyles.inputFocus : {}),
          }}
          onFocus={() => setInputFocus((prev) => ({ ...prev, email: true }))}
          onBlur={() => setInputFocus((prev) => ({ ...prev, email: false }))}
          required
        />
        <textarea
          placeholder="Your Message"
          style={{
            ...contactStyles.textarea,
            ...(inputFocus.message ? contactStyles.textareaFocus : {}),
          }}
          onFocus={() => setInputFocus((prev) => ({ ...prev, message: true }))}
          onBlur={() => setInputFocus((prev) => ({ ...prev, message: false }))}
          required
        />
        <button
          type="submit"
          style={isHovered ? { ...contactStyles.button, ...contactStyles.buttonHover } : contactStyles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
