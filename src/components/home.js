import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


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
            fontSize: 'clamp(30px, 6vw, 70px)',
            fontWeight: 600,
            textAlign: 'center',
            color: '#FFFFFF',
        },
        profileInfoP: {
            textAlign: 'center',
            lineHeight: 1.7,
            color: '#FFFFFF',
            fontSize: 'clamp(16px, 4vw, 24px)',
            marginTop: 0,
            marginBottom: '20px',
            width: '80%',
            maxWidth: '500px',
        },
        profileInfoButton: {
            fontSize: 'clamp(14px, 2vw, 18px)',
            padding: 'clamp(10px, 3vw, 17px) clamp(20px, 8vw, 40px)',
            color: '#FFFFFF',
            backgroundColor: '#011721',
            border: 'none',
            borderRadius: '35px',
            boxShadow: '0 5px 15px rgba(64, 70, 88, 0.5)',
            cursor: 'pointer',
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
            <h1 style={styles.profileInfoH1}>Hi, I'm Salma</h1>
            <h1 style={styles.profileInfoH1}>A Frontend Developer</h1>
            <p style={styles.profileInfoP}>Mobile & Web Applications Development</p>
            {/* <button style={styles.profileInfoButton}>Contact Me</button> */}

            <div className="icon-container flex justify-center items-center gap-4"> {/* Flex container with padding and gap */}
                <FontAwesomeIcon
                    icon={faGithub}
                    className="cursor-pointer text-white" 
                    style={{ fontSize: '30px' }} 
                    href='https://github.com/salma-elbakkouri'
                    onClick={openGithub}
                />
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className="cursor-pointer text-white"
                    style={{ fontSize: '30px' }}
                    onClick={openLinkedin}
                />
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="cursor-pointer text-white"
                    style={{ fontSize: '30px' }}
                    onClick={openGmail}
                />
            </div>

        </div>

        
    );
};

export default Home;
