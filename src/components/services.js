import React from 'react';
import {
    IconDeviceLaptop,
    IconDeviceMobile,
    IconPalette,
} from '@tabler/icons-react';
import '../global.css'; // Ensure Tailwind CSS is included

const servicesData = [
    {
        title: 'Web Development',
        description: 'Building interactive and responsive web applications.',
        icon: (
            <IconDeviceLaptop
                className="h-12 w-12"
                style={{ color: 'white' }} // Green color
            />
        ),
    },
    {
        title: 'Mobile Development',
        description: 'Creating mobile apps using React Native and Flutter.',
        icon: (
            <IconDeviceMobile
                className="h-12 w-12"
                style={{ color: 'white' }} // Green color
            />
        ),
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly and visually appealing interfaces.',
        icon: (
            <IconPalette
                className="h-12 w-12"
                style={{ color: 'white' }} // Green color
            />
        ),
    },
];

const Services = () => {
    return (
        <div className="min-h-screen py-16 text-center flex flex-col justify-center">
            <h2 className="text-4xl text-gray-900 mb-12">My Services</h2>
            <div className="max-w-5xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p 
                            style={{color : '#4e5b6d'}}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
