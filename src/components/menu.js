import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 840);

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

    const handleResize = () => setIsSmallScreen(window.innerWidth <= 840);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="menu flex justify-between items-center px-5 py-4 relative z-10 w-full">
      {/* Left Logo */}
      <div className="flex items-center">
        <div
          className="text-2xl font-semibold"
          style={{ color: darkMode ? '#F3F3F3' : '#262a36' }}
        >
          Portfolio
        </div>
      </div>

      {/* Centered Menu Links */}
      <div
        className={`menu-links flex items-center space-x-8 pt-7 ${isMenuVisible ? 'active' : ''} ${
          isSmallScreen ? 'hidden md:flex' : ''
        }`}
      >
        <a></a>
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
          href="#skills"
          className={`menu-link ${hoveredLink === 'skills' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('skills')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
        >
          Skills
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
        
        {/* Theme Switch Link */}
        {isMenuVisible && (
          <a
            className="menu-link"
            href="#switch-theme"
            onClick={toggleDarkMode}
            style={{ color: darkMode ? '#F3F3F3' : '#404658' }}
          >
            Switch Theme
          </a>
        )}
      </div>

      {/* Right Menu Icon and Theme Icon */}
      {isSmallScreen ? (
        <FontAwesomeIcon
          icon={faBars}
          className={`menu-icon cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}
          onClick={toggleMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          className="cursor-pointer text-2xl theme-icon"
          onClick={toggleDarkMode}
          color={darkMode ? '#F3F3F3' : 'black'}
        />
      )}
    </div>
  );
};

const styles = `
  .menu {
    width: 100%;
  }

  .link-hovered {
    color: black;
  }

  .menu-icon, .theme-icon {
    display: inline-block !important;
    font-size: 25px;
  }

  .menu-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 20px 0;
    visibility: visible;
    justify-content: center;
    align-items: center;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.85);
    height: calc(100vh - 60px);
  }

  .menu-link {
    font-size: 22px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 840px) {
    .menu {
      position: relative;
      height: 60px;
      width: 100% !important;
    }

    .menu-links {
      margin: 0;
      padding: 0 ;
      visibility: hidden;
      display: none;
      font-size: 15px;
    }

    .menu-links.active {
      background-color: rgba(0, 0, 0, 0.7);
      margin-left: 0;
    }

    .menu-links.active .menu-link {
      padding: 15px 0;
      width: 100%;
      text-align: center;
      color : white;
      margin-left : 0;
      padding-left :0;
    }

    .menu-links.active .theme-icon {
      margin-top: 10px;
    }

    .menu-icon {
      position: absolute;
      right: 20px;
    }
  }

  @media (max-width: 585px) {
    .menu-icon, .theme-icon {
      font-size: 20px !important;
    }

    .menu {
      width: 100% !important;
      padding: 5px;
    }

    .text-2xl {
      font-size: 1.25rem !important;
    }
  }

  .menu {
    --bg-menu-links-light: #f0f0f0;
    --bg-menu-links-dark: #262a36;
    --bg-menu-links: var(--bg-menu-links-light);
    width: 100%;
  }

  .dark .menu {
    --bg-menu-links: var(--bg-menu-links-dark);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Menu;
