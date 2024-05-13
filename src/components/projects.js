import React from 'react';
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
        },
        {
            id: 2,
            title: 'LocArt mobile app',
            description: 'A mobile app for exploring Rabat-Sale cultural heritage offering transportation services, offline mode and personalized recommendations',
            technologies: ['react native', 'expo', 'Firebase' , 'Json','GraphHopper API'],
            image: locart, 
        },
        {
            id: 3,
            title: 'TapTap Game',
            description: 'Simple tapping against chronometer mobile game coded in java published on play store',
            technologies: ['Java', 'xml', 'Firebase'],
            image: taptap, 
        },
        {
            id: 4,
            title: 'lifeReminder web app',
            description: 'An ASP.NET web app, crafted in C#, to help users in managing their schedules and events',
            technologies: ['Asp .Net', 'C#', 'html' , 'css' , 'js' , 'sendGrid'],
            image: lifereminder, 
        },
        {
            id: 5,
            title: 'myPharmacy mobile app',
            description: 'An Android application designed to simplify the search for nearby pharmacies open during off-hours, featuring an admin side for pharmacy authenticity validation',
            technologies: ['Java', 'Android', 'xml' , 'firebase' , 'OpenStreetMap API'],
            image: pharmacy, 
        },
        {
            id: 6,
            title: 'CountriesExplorer mobile app',
            description: 'a simple ios application that showcases continents, countries and cities with their description & photos',
            technologies: ['Swift'],
            image: countries, 
        },
       
        
        
    ];

    return (
        <div id='projects' className='flex flex-col items-center justify-center'>
       <h2 style={{ color: 'white', fontSize: '25px'  , fontWeight : '500' , paddingTop:'80px'}}>My Projects</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-20 md:gap-20 p-10 sm:p-20 md:p-20 ">
            {projects.map(project => (
                <div key={project.id} className="relative overflow-hidden rounded-xl shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-3 bg-gray-500 bg-opacity-50 cursor-pointer mb-20">
                    <img src={project.image} alt={project.title} className="w-full h-100 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-white mb-4">{project.description}</p>
                        <div className="flex flex-wrap">
                            {project.technologies.map(tech => (
                                <span key={tech} className="text-gray-900 bg-gray-200 rounded-full px-2 py-1 text-sm mr-2 mb-2">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Projects;