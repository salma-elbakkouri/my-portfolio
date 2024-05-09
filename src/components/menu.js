import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMouseEnterLink = (link) => setHoveredLink(link);
  const handleMouseLeaveLink = () => setHoveredLink(null);
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
        html.classList.remove('dark');
        html.classList.add('light');
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
    }
    setDarkMode(!darkMode);
    const event = new Event('themeChange');
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const html = document.documentElement;
    const initialDarkMode = html.classList.contains('dark');
    setDarkMode(initialDarkMode);
  }, []);

  return (
    <div className="menu flex justify-between items-center px-10 py-10 relative z-10 w-full">
      {/* Center Logo + Theme Switch */}
      <div className="flex items-center gap-3">
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="cursor-pointer text-2xl mb-2 ml-4"
          onClick={toggleDarkMode}
          color={darkMode ? '#F3F3F3' : 'black'}
        />
        <div
          className="text-2xl font-semibold"
          style={{ color: darkMode ? '#F3F3F3' : '#262a36' }}
        >
          Portfolio
        </div>
      </div>

      {/* Menu Links */}
      <div className={`menu-links flex items-center space-x-8 ${isMenuVisible ? 'active' : ''}`}>
        <a
          href="#home"
          className={`menu-link ${hoveredLink === 'home' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('home')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
        >
          Home
        </a>
        <a
          href="#about"
          className={`menu-link ${hoveredLink === 'about' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('about')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
        >
          About
        </a>
        <a
          href="#projects"
          className={`menu-link ${hoveredLink === 'projects' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('projects')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
        >
          Projects
        </a>
        <a
          href="#experience"
          className={`menu-link ${hoveredLink === 'experience' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('experience')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
        >
          Experience
        </a>
        <a
          href="#education"
          className={`menu-link ${hoveredLink === 'education' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('education')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
        >
          Education
        </a>
      </div>

      {/* Hamburger Icon */}
      <FontAwesomeIcon
        icon={faBars}
        className={`menu-icon cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}
        onClick={toggleMenu}
      />
    </div>
  );
};

const styles = `
  .link-hovered {
    color: black;
  }

  .menu-icon {
    display: none;
  }

  .menu-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px 0;
    visibility: visible;
    justify-content: center;
    align-items: center;
    z-index: 9;
  }

  .menu-link {
    font-size: 24px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 840px) {
    .menu {
      position: relative;
      height: 100px;
    }

    .menu-links {
      visibility: hidden;
      display: none;
    }

    .menu-links.active {
      background-color: var(--bg-menu-links);
    }

    .menu-icon {
      display: block !important;
      position: absolute;
      right: 5%;
      font-size: 25px;
    }

    .menu-links.active .menu-link {
      padding: 15px 0;
      width: 100%;
      text-align: center;
    }
  }

  .menu {
    --bg-menu-links-light: #f0f0f0;
    --bg-menu-links-dark: #262a36;
    --bg-menu-links: var(--bg-menu-links-light);
  }

  .dark .menu {
    --bg-menu-links: var(--bg-menu-links-dark);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Menu;
