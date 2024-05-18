import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer flex-col text-white text-lg sm:text-2xl justify-center items-center p-4 sm:p-20 relative mt-20">
            <div className="footer__icons flex gap-4 sm:gap-6 mb-2 sm:mb-4 justify-center">
                <a href="https://github.com/salma-elbakkouri" target='_blank'><FaGithub size="1.5em" /></a>
                <a href="https://www.linkedin.com/in/salma-el-bakkouri-b6a848283/" target='_blank'><FaLinkedin size="1.5em" /></a>
                <a href="mailto:elbakkourisalmaa@gmail.com" target='_blank'><FaEnvelope size="1.5em" /></a>
            </div>
            <div className="footer__contact text-sm sm:text-lg opacity-50 flex justify-center mb-10">
                <h4>@2024 Copyrights Salma Elbakkouri</h4>
            </div>
            <button className="back-to-top" onClick={scrollToTop}>
                <FaArrowUp size="1.2em" />
            </button>
        </footer>
    );
};

export default Footer;
