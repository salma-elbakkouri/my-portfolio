import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import locart from '../assets/locart-final.png';
import internspot from '../assets/internspot.png';
import taptap from '../assets/taptap-final.png';
import lifereminder from '../assets/lifereminder.png';
import pharmacy from '../assets/pharmacies-final.png';
import countries from '../assets/countriesExplorer-final.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Internspot mobile app',
            description: 'A mobile app optimizing the internship search process for students with a user-centric approach',
            technologies: ['react native', 'expo' ,'firebase','Beautifulsoup','python' ],
            image: internspot,
            githubLink: 'https://github.com/salma-elbakkouri/Internspot-app',
        },
        {
            id: 2,
            title: 'LocArt mobile app',
            description: 'A mobile app for exploring Rabat-Sale cultural heritage offering transportation services and offline mode',
            technologies: ['react native', 'expo', 'Firebase' , 'Json','GraphHopper API'],
            image: locart,
            githubLink: 'https://github.com/salma-elbakkouri/LocArt',
        },
        {
            id: 3,
            title: 'TapTap Game',
            description: 'Simple tapping against chronometer mobile game coded in java published on play store',
            technologies: ['Java', 'xml', 'Firebase'],
            image: taptap,
            githubLink: 'https://github.com/salma-elbakkouri/TapTap-game-',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.gl.taptap',
        },
        {
            id: 4,
            title: 'lifeReminder web app',
            description: 'An ASP.NET web app, crafted in C#, to help users in managing their schedules and events',
            technologies: ['Asp .Net', 'C#', 'html' , 'css' , 'js' , 'sendGrid'],
            image: lifereminder,
            githubLink: 'https://github.com/salma-elbakkouri/calendar-WebApp',
        },
        {
            id: 5,
            title: 'myPharmacy mobile app',
            description: 'An Android application designed to simplify the search for nearby pharmacies open during off-hours, featuring an admin side for pharmacy authenticity validation',
            technologies: ['Java', 'Android', 'xml' , 'firebase' , 'OpenStreetMap API'],
            image: pharmacy,
            githubLink: 'https://github.com/salma-elbakkouri/Pharmacy-App-client',
        },
        {
            id: 6,
            title: 'CountriesExplorer mobile app',
            description: 'a simple ios application that showcases continents, countries and cities with their description & photos',
            technologies: ['Swift','UIKit'],
            image: countries,
            githubLink: 'https://github.com/salma-elbakkouri/countries-swift-App',
        },
    ];

    return (
        <div id='projects' className='flex flex-col items-center justify-center'>
       <h2 style={{ color: 'white', fontSize: '25px'  , fontWeight : '500' , paddingTop:'80px'}}>My Projects</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-10 md:gap-20 p-10 sm:p-20 md:p-20 ">
            {projects.map(project => (
                <div key={project.id} className="relative text-md overflow-hidden rounded-xl shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-3 bg-gray-500 bg-opacity-70 cursor-pointer mb-20">
                    <img src={project.image} alt={project.title} className="w-full h-100 object-cover" />
                    <div className="p-4">
                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-white mb-4 text-lg">{project.description}</p>
                        <div className="flex flex-wrap">
                            {project.technologies.map(tech => (
                                <span key={tech} className="text-gray-900 bg-gray-200 rounded-full px-2 py-1 text-md mr-2 mb-2">{tech}</span>
                            ))}
                        </div>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="text-white text-3xl mr-4 ml-2 mt-2"/>
                        </a>
                        {project.playStoreLink && (
                            <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGooglePlay} className="text-white text-2xl"/>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;