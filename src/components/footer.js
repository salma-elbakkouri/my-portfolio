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
        <footer className="footer flex-col text-white text-sm sm:text-base justify-center items-center p-4 sm:p-10 relative mt-80">
            <div className="footer__icons flex gap-3 sm:gap-4 mb-2 sm:mb-3 justify-center">
                <a href="https://github.com/salma-elbakkouri" target='_blank' className="text-white hover:text-gray-300"><FaGithub size="1.5em" /></a>
                <a href="https://www.linkedin.com/in/salma-el-bakkouri-b6a848283/" target='_blank' className="text-white hover:text-gray-300"><FaLinkedin size="1.5em" /></a>
                <a href="mailto:elbakkourisalmaa@gmail.com" target='_blank' className="text-white hover:text-gray-300"><FaEnvelope size="1.5em" /></a>
            </div>
            <div className="footer__contact text-xs sm:text-sm opacity-50 flex justify-center ">
                <h4>&copy; 2024 Salma Elbakkouri. All Rights Reserved.</h4>
            </div>
            <button className="back-to-top" onClick={scrollToTop}>
                <FaArrowUp size="1em" />
            </button>
        </footer>
    );
};

export default Footer;
