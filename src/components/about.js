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
            textAlign: 'center',
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
                        I specialize in front-end web and mobile development, prioritizing a mobile-first approach. Proficient in JavaScript frameworks like React and Next.js, I create dynamic web applications. For mobile, I excel in React Native and Java for Android apps. I also have expertise in CSS frameworks like Tailwind and Bootstrap. My goal is to create tech solutions that enhance user experiences, making them intuitive and engaging.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
