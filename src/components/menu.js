import React, { useState } from 'react';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { color } from 'three/examples/jsm/nodes/Nodes.js';

const Menu = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false); // Start with false for mobile

    const handleMouseEnterLink = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeaveLink = () => {
        setHoveredLink(null);
    };

    const handleMouseEnterButton = () => {
        setIsButtonHovered(true);
    };

    const handleMouseLeaveButton = () => {
        setIsButtonHovered(false);
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className='menu' style={styles.menu}>
            <div className='portfolio' style={styles.portfolio}>Portfolio</div>

            <div className={`menu-links ${isMenuVisible ? 'active' : ''}`} style={styles.menuLinks}>
                <a href="#home"
                    style={styles.menuLink}
                    className={hoveredLink === 'home' ? 'link-hovered' : ''}
                    onMouseEnter={() => handleMouseEnterLink('home')}
                    onMouseLeave={handleMouseLeaveLink}
                >Home</a>
                <a href="#about"
                    style={styles.menuLink}
                    className={hoveredLink === 'about' ? 'link-hovered' : ''}
                    onMouseEnter={() => handleMouseEnterLink('about')}
                    onMouseLeave={handleMouseLeaveLink}
                >About</a>
                <a href="#services"
                    style={styles.menuLink}
                    className={hoveredLink === 'services' ? 'link-hovered' : ''}
                    onMouseEnter={() => handleMouseEnterLink('services')}
                    onMouseLeave={handleMouseLeaveLink}
                >Service</a>
                <button
                    style={{ ...styles.button, ...(isButtonHovered && styles.buttonHovered) }}
                    onMouseEnter={handleMouseEnterButton}
                    onMouseLeave={handleMouseLeaveButton}
                >
                    Hire me
                </button>

            </div>

            {/* Toggle menu icon */}
            <FontAwesomeIcon
                icon={faBars}
                style={{ ...styles.menuIcon, color: 'black' }}
                onClick={toggleMenu}
                className="menu-icon"
            />
        </div>
    );
};

const styles = {
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor : '#f7f8f9',
        position: 'relative',
        zIndex: 1,
        fontSize :'17px',
        width: '100%',
    },
    portfolio: {
        color: '#0d152c',
        fontSize: '25px',
        fontWeight: '600',
        color:'inherit',
        paddingLeft : '10px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: 'transparent',
        color:'#ff413d',
        border: '2px solid #ff413d',
        borderRadius: '55px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 2,
        fontSize :'17px',
    },
    buttonHovered: {
        backgroundColor: '#ff413d',
        color: '#fff',
    },
    menuIcon: {
        cursor: 'pointer',
        display: 'none',
    },
    menuLink: {
        padding: '20px',
        color:'inherit',
    },

};

export default Menu;