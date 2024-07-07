import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faGithub, faGooglePlay } from '@fortawesome/free-solid-svg-icons';
import locart from '../assets/locart-final.png';
import internspot from '../assets/internspot.png';
import taptap from '../assets/taptap-final.png';
import lifereminder from '../assets/lifereminder.png';
import pharmacy from '../assets/pharmacies-final.png';
import countries from '../assets/countriesExplorer-final.png';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Internspot mobile app',
            description: 'A mobile app optimizing the internship search process for students with a user-centric approach',
            technologies: ['react native', 'expo', 'firebase', 'Beautifulsoup', 'python'],
            image: internspot,
            category: 'Mobile apps',
            githubLink: 'https://github.com/salma-elbakkouri/Internspot-app',
        },
        {
            id: 2,
            title: 'lifeReminder web app',
            description: 'An ASP.NET web app, crafted in C#, to help users in managing their schedules and events',
            technologies: ['Asp .Net', 'C#', 'html', 'css', 'js', 'sendGrid'],
            image: lifereminder,
            category: 'Web apps',
            githubLink: 'https://github.com/salma-elbakkouri/calendar-WebApp',
        },
        
        {
            id: 3,
            title: 'TapTap Game',
            description: 'Simple tapping against chronometer mobile game coded in java published on play store',
            technologies: ['Java', 'xml', 'Firebase'],
            image: taptap,
            category: 'Mobile apps',
            githubLink: 'https://github.com/salma-elbakkouri/TapTap-game-',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.gl.taptap',
        },
        {
            id: 4,
            title: 'LocArt mobile app',
            description: 'A mobile app for exploring Rabat-Sale cultural heritage offering transportation services and offline mode',
            technologies: ['react native', 'expo', 'Firebase', 'Json', 'GraphHopper API'],
            image: locart,
            category: 'Mobile apps',
            githubLink: 'https://github.com/salma-elbakkouri/LocArt',
        },
        {
            id: 5,
            title: 'myPharmacy mobile app',
            description: 'An Android application designed to simplify the search for nearby pharmacies open during off-hours, featuring an admin side for pharmacy authenticity validation',
            technologies: ['Java', 'Android', 'xml', 'firebase', 'OpenStreetMap API'],
            image: pharmacy,
            category: 'Mobile apps',
            githubLink: 'https://github.com/salma-elbakkouri/Pharmacy-App-client',
        },
        {
            id: 6,
            title: 'CountriesExplorer mobile app',
            description: 'a simple ios application that showcases continents, countries and cities with their description & photos',
            technologies: ['Swift', 'UIKit'],
            image: countries,
            category: 'Mobile apps',
            githubLink: 'https://github.com/salma-elbakkouri/countries-swift-App',
        },
    ];

    const categories = ['All', 'UI', 'UX', 'Websites', 'Mobile apps', 'Web apps'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const slideLeft = () => {
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : filteredProjects.length - 1);
    };

    const slideRight = () => {
        setCurrentSlide(currentSlide < filteredProjects.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div id="projects" className="flex flex-col items-center justify-center px-10 min-h-screen">
            <h2 style={{ color: '#FFFFFF', fontSize: '35px', fontWeight: '500', paddingTop: '80px' }}>
                My <span style={{ color: '#FFFFFF' }}>Recent Works</span>
            </h2>
            <div className="flex space-x-4 my-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            selectedCategory === category
                                ? 'bg-cardSelectedColor text-white shadow-md'
                                : 'bg-cardColor text-white bg-opacity-70'
                        }`}
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', borderRadius: '55px', minWidth: '120px', height: '40px' }}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="relative w-full flex items-center justify-center">
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={slideLeft}
                    className="text-white text-3xl cursor-pointer absolute left-0"
                />
                <div className="flex overflow-hidden w-full mt-10 justify-center px-10">
                    {filteredProjects.slice(currentSlide, currentSlide + 3).map(project => (
                        <div
                            key={project.id}
                            className="flex-none w-96 h-72 rounded-lg"
                            style={{ margin: '0 30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <img src={project.image} alt={project.title} className="w-full  rounded-[8px] cursor-pointer" />
                        </div>
                    ))}
                </div>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={slideRight}
                    className="text-white text-3xl cursor-pointer absolute right-0"
                />
            </div>
        </div>
    );
};

export default Projects;
