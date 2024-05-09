import React from 'react';
import laptopImage from '../assets/laptop.png'; // Adjust the path as needed

const About = () => {
    const styles = {
        about: {
            // backgroundColor: 'white',
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
            boxShadow:
                '0 0 0 1px #ff403d3a, 0 0 0 20px white, 0 0 0 21px #ff403d3a',
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
        },
        aboutTextH3: {
            color: 'white',
            fontSize: 'clamp(18px, 4vw, 40px)',
            marginBottom: '5px',
            marginTop: '0',
        },
        aboutTextP: {
            color: '#676e7a',
            lineHeight: 1.5,
            marginTop: '10px',
            marginBottom: '0',
            fontSize: 'clamp(12px, 2vw, 18px)',
        },
        aboutTextButton: {
            padding: 'clamp(8px, 1.5vw, 13px) clamp(20px, 3vw, 45px)',
            color: '#fff',
            backgroundColor: '#ff413d',
            border: 'none',
            borderRadius: '35px',
            boxShadow: '0 5px 15px rgba(255, 65, 61, 0.5)',
            cursor: 'pointer',
            fontSize: 'clamp(12px, 2vw, 18px)',
            marginTop: '20px',
            position: 'relative',
            zIndex: 2,
        },
        // Responsive styles for small screens
        smallScreenContent: {
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            width: '90%', // To center the content horizontally
            maxWidth: '500px',
        },
        smallScreenImageImg: {
            marginTop : '40px',
            width: 'clamp(100px, 40vw, 250px)',
            height: 'clamp(100px, 40vw, 250px)',
        },
        smallScreenText: {
            textAlign: 'center',
            padding: '0',
        },
    };

    // Determine if the screen is small
    const isSmallScreen = window.innerWidth <= 768;

    return (
        <div id="about" style={styles.about}>
            <div style={styles.aboutBefore}></div>
            <div style={{ ...styles.aboutContent, ...(isSmallScreen && styles.smallScreenContent) }}>
                <div style={{ ...styles.aboutImage }}>
                    <img
                        src={laptopImage}
                        alt="Profile Image"
                        style={{ ...styles.aboutImageImg, ...(isSmallScreen && styles.smallScreenImageImg) }}
                    />
                </div>
                <div style={{ ...styles.aboutText, ...(isSmallScreen && styles.smallScreenText) }}>
                    <h2 style={styles.aboutTextH2}>
                        <span style={styles.aboutTextSpan}>About</span> me
                    </h2>
                    <h3 style={styles.aboutTextH3}>WHO I AM ?</h3>
                    <p style={styles.aboutTextP}>
                        I'm an Android apps developer proficient in Java, React
                        Native, and Flutter. Additionally, I excel in web
                        development with JavaScript, React, and CSS frameworks
                        like Tailwind, Bootstrap, and Sass. My focus is on
                        creating seamless user experiences across platforms.
                    </p>
                    <button style={styles.aboutTextButton}>Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default About;
