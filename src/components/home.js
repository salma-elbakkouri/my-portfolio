import React from 'react';

const Home = () => {
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
            fontSize: 'clamp(16px, 4vw, 40px)',
            fontWeight: 600,
            textAlign: 'center',
            color: '#FFFFFF',
        },
        profileInfoP: {
            textAlign: 'center',
            lineHeight: 1.7,
            color: '#FFFFFF',
            fontSize: 'clamp(10px, 2.5vw, 16px)',
            marginTop: 0,
            marginBottom: '20px',
            width: '80%',
            maxWidth: '500px',
        },
        profileInfoButton: {
            fontSize: 'clamp(10px, 1.2vw, 14px)',
            padding: 'clamp(6px, 2vw, 12px) clamp(14px, 5vw, 28px)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '35px',
            cursor: 'pointer',
            margin: '10px',
        },
        hireMeButton: {
            backgroundColor: '#436BA8',
        },
        downloadCvButton: {
            backgroundColor: '#343840',
        },
    };

    const openGithub = () => {
        window.open('https://github.com/salma-elbakkouri', '_blank');
    };

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/salma-el-bakkouri-b6a848283/')
    }

    const openGmail = () => {
        window.open('mailto:elbakkourisalmaa@gmail.com')
    }

    return (
        <div style={styles.home}>
            <h1 style={styles.profileInfoH1}>SALMA EL BAKKOURI</h1>
            <p style={styles.profileInfoP}>Specialized in Web & Mobile Development</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <button style={{ ...styles.profileInfoButton, ...styles.hireMeButton }}>Hire Me</button>
                <button style={{ ...styles.profileInfoButton, ...styles.downloadCvButton }}>Download CV</button>
            </div>
        </div>
    );
};

export default Home;
