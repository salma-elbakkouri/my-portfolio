import React, { useState, useEffect } from 'react';
import laptopImagePng from '../assets/laptoppng.png';

const About = () => {
    const [darkMode, setDarkMode] = useState(false);

    const updateDarkModeState = () => {
        const html = document.documentElement;
        setDarkMode(html.classList.contains('dark'));
    };

    useEffect(() => {
        updateDarkModeState();
        window.addEventListener('themeChange', updateDarkModeState);

        return () => {
            window.removeEventListener('themeChange', updateDarkModeState);
        };
    }, []);

    const styles = {
        about: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            padding: '20px',
        },
        aboutContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 1,
            gap: '20px',
        },
        aboutImage: {
            flex: '1 1 300px',
            textAlign: 'center',
            position: 'relative',
        },
        aboutImageImg: {
            borderRadius: '50%',
            width: 'clamp(150px, 30vw, 300px)',
            height: 'clamp(150px, 30vw, 300px)',
            objectFit: 'cover',
            padding: '0',
        },
        aboutText: {
            flex: '1 1 500px',
            textAlign: 'left',
            padding: '0 20px',
        },
        aboutTextSpan: {
            color: '#ff413d',
            fontSize: 'clamp(14px, 2vw, 22px)',
        },
        aboutTextH2: {
            fontSize: 'clamp(16px, 3vw, 22px)',
            marginBottom: '5px',
            marginTop: '0',
            color: '#ff413d',
        },
        aboutTextH3: {
            fontSize: 'clamp(18px, 4vw, 40px)',
            marginBottom: '5px',
            marginTop: '0',
            color: darkMode ? '#ffffff' : '#404658',
        },
        aboutTextP: {
            color: darkMode ? '#ffffff' : '#404658',
            lineHeight: 1.5,
            marginTop: '10px',
            marginBottom: '0',
            fontSize: 'clamp(12px, 2vw, 18px)',
        },
        aboutTextButton: {
            padding: 'clamp(8px, 1.5vw, 13px) clamp(20px, 3vw, 45px)',
            color: '#fff',
            backgroundColor: '#01121a',
            border: 'none',
            borderRadius: '35px',
            boxShadow: '0 5px 15px rgba(64, 70, 88, 0.5)', // Adjusted color and opacity
            cursor: 'pointer',
            fontSize: 'clamp(12px, 2vw, 18px)',
            marginTop: '20px',
            position: 'relative',
            zIndex: 2,
        },
        smallScreenContent: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', // Added to center horizontally
            gap: '20px',
            width: '90%', // To center the content horizontally
            maxWidth: '500px',
        },
        smallScreenImageImg: {
            marginTop: '40px',
            width: 'clamp(100px, 40vw, 250px)',
            height: 'clamp(100px, 40vw, 250px)',
        },
        smallScreenText: {
            textAlign: 'center',
            padding: '0',
        },
    };

    const isSmallScreen = window.innerWidth <= 768;

    return (
        <div id="about" style={styles.about}>
            <div style={{ ...styles.aboutContent, ...(isSmallScreen && styles.smallScreenContent) }} className={isSmallScreen ? "flex flex-col items-center" : ""}>
               
                <div style={{ ...styles.aboutText, ...(isSmallScreen && styles.smallScreenText) }}>
                    
                    <h3 style={styles.aboutTextH3}>WHO I AM?</h3>
                    <p style={styles.aboutTextP}>
                        I'm an Android apps developer proficient in Java, React
                        Native, and Flutter. Additionally, I excel in web
                        development with JavaScript, React, and CSS frameworks
                        like Tailwind, Bootstrap, and Sass. My focus is on
                        creating seamless user experiences across platforms.
                    </p>
                    <button style={styles.aboutTextButton}>Download My Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;
