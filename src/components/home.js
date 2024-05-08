import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Home = () => {
    return (

        <div id='home' className='home' style={styles.home}>
            <div style={styles.profileInfo} className='profile-info'>
                <h1 style={styles.HiText}>Hi, I'm Salma A Full Stack Developer </h1>
                <p style={styles.descriptionText}>I'm a 21-year-old passionate mobile apps developer with a knack for web development, specializing in Android apps using Java, React Native, and Flutter. With a strong foundation in JavaScript, React, CSS, and its famous frameworks like Tailwind CSS and Bootstrap, I'm very creative and love to create aesthetic tech solutions that come to life</p>
                <button style={styles.letstalkButton}>Let's Talk</button>
            </div>
            <div style={styles.profimeImageDiv} className='profile-img'>
            <img src='/assets/img.jpg' style={styles.profileImage}></img>

            </div>

        </div>
    );
};

const styles = {
    home : {
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '100px',
        backgroundColor : '#f7f8f9',
        position : 'relative',
    },
    profileInfo : {
        flex: '1',
        paddingRight : '50px',
    },
    HiText: {
        color: '#0d152c',
        fontSize: '32px',
        marginBottom: '10px',
        fontWeight: '600',
    },
    descriptionText:{
        lineHeight: '1.7',
        color: '#676e7a',
        marginTop: '0',
        width : '60%',
        marginBottom: '20px',
    },
    letstalkButton: {
        fontSize: '18px',
        padding: '13px 45px',
        color: '#fff',
        backgroundColor: '#ff413d',
        border: 'none',
        borderRadius: '35px',
        boxShadow: '0 5px 15px rgba(255, 65, 61, 0.5)',
        cursor: 'pointer',
    },
    profileImageDiv : 
    {
        flex: "1",
        textAlign: "center",
        position: "relative",
    },
    profileImage : 
    {
        borderRadius: '50%',
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        padding: '20px',
        
    },

};

export default Home;