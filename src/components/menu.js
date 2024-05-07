import React from 'react';

const Menu = () => {
  return (
    <div style={styles.menu}>
      <div style={styles.portfolio}>Portfolio</div>
      <div style={styles.menuLinks}>
        <a href="#home" style={styles.link} className="active">Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <button style={styles.button}>Hire me</button>
      </div>
    </div>
  );
};

const styles = {
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f7f8f9',
    position: 'relative',
    zIndex: 1,
  },
  portfolio: {
    color: '#0d152c',
    fontSize: '24px',
    fontWeight: '600',
    marginLeft: '20px',
  },
  menuLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#676e7a',
  },
  button: {
    padding: '8px 15px',
    color: '#ff413d',
    backgroundColor: 'transparent',
    border: '2px solid #ff413d',
    borderRadius: '55px',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 2,
  },
};

export default Menu;
