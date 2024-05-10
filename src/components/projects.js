import React from 'react';
import imagetouse from '../assets/bg1.png';
import locart from '../assets/locart.png';
import internspot from '../assets/internspot.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Internspot application',
            description: 'Description of Project 1',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: internspot, 
        },
        {
            id: 2,
            title: 'LocArt application 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: locart, 
        },
        {
            id: 3,
            title: 'Project 1',
            description: 'Description of Project 1',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: imagetouse, // Updated image path
        },
        {
            id: 4,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: imagetouse, // Updated image path
        },
        {
            id: 5,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: imagetouse, // Updated image path
        },
        {
            id: 6,
            title: 'Project 2',
            description: 'Description of Project 2',
            technologies: ['React', 'Node.js', 'Express'],
            image: imagetouse, // Updated image path
        },

        // Add more projects as needed
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-28">
            {projects.map(project => (
                <div key={project.id} className="relative overflow-hidden rounded-md shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 bg-gray-500 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 cursor-pointer">
                    <img src={project.image} alt={project.title} className="w-full h-100 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white dark:text-gray-300">{project.title}</h3>
                        <p className="text-gray-800 dark:text-white mb-4">{project.description}</p>
                        <div className="flex flex-wrap">
                            {project.technologies.map(tech => (
                                <span key={tech} className="text-gray-200 dark:text-gray-900 bg-gray-800 dark:bg-gray-200 rounded-full px-2 py-1 text-sm mr-2 mb-2">{tech}</span>
                            ))}
                        </div>
                        {/* Icons for technologies can be added here */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
