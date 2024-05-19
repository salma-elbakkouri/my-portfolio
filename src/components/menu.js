import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 840);

  const handleMouseEnterLink = (link) => setHoveredLink(link);
  const handleMouseLeaveLink = () => setHoveredLink(null);
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 840);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="menu flex justify-between items-center px-5 py-4 relative z-10 w-full">
      {/* Left Logo */}
      <div className="flex items-center">
        <div className="text-2xl font-semibold pl-2" style={{ color: '#FFFFFF' }}>
          Portfolio
        </div>
      </div>

      {/* Centered Menu Links */}
      <div
        className={`menu-links flex items-center ${!isSmallScreen ? 'space-x-8' : ''} pt-7 ${isMenuVisible ? 'active' : ''} ${isSmallScreen ? 'hidden md:flex' : ''}`}
      >
        <a></a>
        <a
          href="#projects"
          className={`menu-link ${hoveredLink === 'projects' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('projects')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: '#FFFFFF' }}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`menu-link ${hoveredLink === 'skills' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('skills')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: '#FFFFFF' }}
        >
          Skills
        </a>
        <a
          href="#experience"
          className={`menu-link ${hoveredLink === 'experience' ? 'link-hovered' : ''}`}
          onMouseEnter={() => handleMouseEnterLink('experience')}
          onMouseLeave={handleMouseLeaveLink}
          style={{ color: '#FFFFFF' }}
        >
          Experience
        </a>
      </div>

      {/* Right Menu Icon */}
      {isSmallScreen ? (
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon cursor-pointer text-white"
          onClick={toggleMenu}
        />
      ) : null}
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

  .menu-icon {
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
    visibility: visible;
    justify-content: center;
    align-items: center;
    z-index: 9;
    background-color: rgba(0, 0, 0, 1);
    height: calc(100vh - 60px);
    margin: 0;
    padding: 0;
  }

  .menu-links.active .menu-link {
    padding: 15px 0;
    width: 100%;
    text-align: center;
    color: white;
    margin: 0;
  }

  .menu-link {
    font-size: 22px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    color: white;
  }

  @media (max-width: 840px) {
    .menu {
      position: relative;
      height: 60px;
    }

    .menu-links {
      visibility: hidden;
      display: none;
      font-size: 15px;
    }

    .menu-links.active {
      background-color: rgba(0, 0, 0, 1);
    }

    .menu-links.active .menu-link {
      padding: 15px 0;
      width: 100%;
      text-align: center;
      color: white;
    }

    .menu-icon {
      position: absolute;
      right: 20px;
    }
  }

  @media (max-width: 585px) {
    .menu-icon {
      font-size: 20px !important;
    }

    .menu {
      padding: 5px;
    }

    .text-2xl {
      font-size: 1.25rem !important;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Menu;
