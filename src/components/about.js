import React from 'react';
import { useInView } from 'react-intersection-observer';
import resume from '../assets/Salma EL BAKKOURI.pdf';

const About = () => {
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
            flexDirection: 'column',
            width: '90%',
            maxWidth: '900px',
            zIndex: 1,
            gap: '20px',
            opacity: 0,
            transform: 'translateY(50px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        },
        aboutContentVisible: {
            opacity: 1,
            transform: 'translateY(0)',
            maxWidth:'700px',
        },
        aboutText: {
            textAlign: 'justify',
            padding: '0 20px',
            color: '#FFFFFF',
        },
        aboutTextH3: {
            fontWeight: '500',
            fontSize: 'clamp(14px, 3vw, 30px)',
            marginBottom: '5px',
            marginTop: '0',
            textAlign: 'center',
        },
        aboutTextP: {
            lineHeight: 1.8,
            marginTop: '10px',
            marginBottom: '0',
            fontSize: 'clamp(14px, 2vw, 20px)',
            textAlign: 'justify',
        },
        smallScreenContent: {
            maxWidth: '500px',
        },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const isSmallScreen = window.innerWidth <= 768;

    return (
        <div id="about" style={styles.about} ref={ref}>
            <div style={{ ...styles.aboutContent, ...(inView && styles.aboutContentVisible), ...(isSmallScreen && styles.smallScreenContent) }}>
                <div style={styles.aboutText}>
                    <h3 style={styles.aboutTextH3}>ABOUT ME</h3>
                    <p style={styles.aboutTextP}>
                    I'm a 21-year-old passionate mobile apps developer with a knack for web development, specializing in Android apps using Java, React Native, and Flutter. With a strong foundation in JavaScript, React, CSS, and its famous frameworks like Tailwind CSS and Bootstrap, I'm very creative and love to create aesthetic tech solutions that come to life 
                     </p>
                </div>
            </div>
        </div>
    );
};

export default About;
