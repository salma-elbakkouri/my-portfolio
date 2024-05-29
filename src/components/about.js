


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
            flexDirection: 'row',
            flexWrap: 'wrap',
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
            fontWeight: '500',
            fontSize: 'clamp(18px, 4vw, 40px)',
            marginBottom: '5px',
            marginTop: '0',
            color: '#fff',
        },
        aboutTextP: {
            color: '#FFFFFF',
            lineHeight: 1.5,
            marginTop: '10px',
            marginBottom: '0',
            fontSize: 'clamp(14px, 2vw, 22px)',
        },
        aboutTextButton: {
            padding: 'clamp(8px, 1.5vw, 13px) clamp(20px, 3vw, 45px)',
            color: '#fff',
            backgroundColor: '#01121a',
            border: 'none',
            borderRadius: '35px',
            boxShadow: '0 5px 15px rgba(64, 70, 88, 0.5)',
            cursor: 'pointer',
            fontSize: 'clamp(12px, 2vw, 18px)',
            marginTop: '20px',
            position: 'relative',
            zIndex: 2,
        },
        smallScreenContent: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            width: '90%',
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
        smallScreenButton: {
            backgroundColor: '#254253',
        },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const isSmallScreen = window.innerWidth <= 768;


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Salma EL BAKKOURI.pdf';
        link.click();
    };


    return (
        <div id="about" style={styles.about} ref={ref}>
            <div style={{ ...styles.aboutContent, ...(inView && styles.aboutContentVisible), ...(isSmallScreen && styles.smallScreenContent) }}>
                <div style={{ ...styles.aboutText, ...(isSmallScreen && styles.smallScreenText) }}>
                    <h3 style={styles.aboutTextH3}>WHO I AM?</h3>
                    <p style={styles.aboutTextP}>
                        I specialize in front-end web and mobile development, prioritizing a mobile-first approach. Proficient in JavaScript frameworks like React and Next.js, I create dynamic web applications. For mobile, I excel in React Native and Java for Android apps. I also have expertise in CSS frameworks like Tailwind and Bootstrap.
                        My goal is to create tech solutions that enhance user experiences, making them intuitive and engaging.
                    </p>
                    <button
                        style={{
                            ...styles.aboutTextButton,
                            ...(isSmallScreen && styles.smallScreenButton),
                        }}
                        onClick={handleDownload}
                    >
                        Download My Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
