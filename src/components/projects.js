import React from 'react';
import imagetouse from '../assets/bg1.png';
import locart from '../assets/locartt.png';
import internspot from '../assets/internspot.png';
import taptap from '../assets/taptapv3.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Internspot mobile app',
            description: 'A mobile app optimizing the internship search process for students with a user-centric approach',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: internspot, 
        },
        {
            id: 2,
            title: 'LocArt mobile app',
            description: 'A mobile app for exploring Rabat-Sale cultural heritage offering transportation services, offline mode and personalized recommendations',
            technologies: ['React', 'Node.js', 'Express'],
            image: locart, 
        },
        {
            id: 3,
            title: 'Tap Tap Game',
            description: 'Simple tapping against chronometer mobile game coded in java published on play store',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: taptap, 
        },
        {
            id: 4,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: imagetouse, 
        },
        {
            id: 5,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: imagetouse, 
        },
        {
            id: 6,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: imagetouse, 
        },

        // Add more projects as needed
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-10">
            {projects.map(project => (
                <div key={project.id} className="relative overflow-hidden rounded-md shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 bg-gray-500 bg-opacity-50 cursor-pointer">
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
    );
};

export default Projects;
