import React from 'react';

const Home = () => {
    const styles = {
        home: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#f7f8f9',
            position: 'relative',
            padding: '10% 0',
            width: '100%',
            minHeight: '80vh',
        },
        profileInfoH1: {
            color: '#0d152c',
            fontSize: 'clamp(30px, 6vw, 70px)',
            fontWeight: 600,
            textAlign: 'center',
        },
        profileInfoP: {
            textAlign: 'center',
            lineHeight: 1.7,
            color: '#676e7a',
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
            <p style={styles.profileInfoP}>
                I'm a mobile & web developer   </p>
            <button style={styles.profileInfoButton}>Download My Resume</button>
        </div>
    );
};

export default Home;
