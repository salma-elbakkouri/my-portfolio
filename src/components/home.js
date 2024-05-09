import React, { useState, useEffect } from 'react';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Function to update dark mode state
    const updateDarkModeState = () => {
        const html = document.documentElement;
        setDarkMode(html.classList.contains('dark'));
    };

    // Initial setup and event listener for theme changes
    useEffect(() => {
        updateDarkModeState();
        window.addEventListener('themeChange', updateDarkModeState);

        return () => {
            window.removeEventListener('themeChange', updateDarkModeState);
        };
    }, []);

    const styles = {
        home: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            padding: '10% 0',
            width: '100%',
            minHeight: '80vh',
        },
        profileInfoH1: {
            fontSize: 'clamp(30px, 6vw, 70px)',
            fontWeight: 600,
            textAlign: 'center',
            color: darkMode ? '#F3F3F3' : '#404658', // Adjusted colors
        },
        profileInfoP: {
            textAlign: 'center',
            lineHeight: 1.7,
            color: '#676e7a',
            fontSize: 'clamp(16px, 4vw, 24px)',
            marginTop: 0,
            marginBottom: '20px',
            width: '80%',
            maxWidth: '500px',
        },
        profileInfoButton: {
            fontSize: 'clamp(14px, 2vw, 18px)',
            padding: 'clamp(10px, 3vw, 17px) clamp(20px, 8vw, 40px)',
            color: '#fff',
            backgroundColor: '#ff413d',
            border: 'none',
            borderRadius: '35px',
            boxShadow: '0 5px 15px rgba(255, 65, 61, 0.5)',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.home}>
            <h1 style={styles.profileInfoH1}>Hi, I'm Salma</h1>
            <h1 style={styles.profileInfoH1}>Frontend developer</h1>
            <p style={styles.profileInfoP}>I'm a mobile & web developer</p>
            <button style={styles.profileInfoButton}>Download My Resume</button>
        </div>
    );
};

export default Home;
