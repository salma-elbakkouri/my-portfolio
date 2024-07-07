import React from 'react';
import taptap from '../assets/taptap-final.png'; // Import the image
import alten from '../assets/alten.jpg'; // Import the image
import aymd from '../assets/aymd.png'; // Import the image
import mercure from '../assets/mercure.png'; // Import the image

const experiences = [
    {
        id: 1,
        date: 'May 2024 - Present',
        title: 'Support IT Consultant',
        company: 'Alten Fes · Internship',
        description: 'Actively engaged as a Support IT consultant at ALTEN DELIVERY CENTER MAROC, I handle IT support duties, addressing user issues and delivering effective solutions to ensure smooth operations',
        image: alten,
    },
    {
        id: 2,
        date: 'Apr 2024 - Present',
        title: 'Fullstack Developer',
        company: 'Aymd Agency · Internship',
        description: 'Currently developing a health assistant app utilizing artificial intelligence, built on React Native and Laravel, to streamline patient-doctor interactions and healthcare management',
        image: aymd,
    },
    {
        id: 3,
        date: 'May 2022 · Jun 2022',
        title: 'Mobile Developer',
        company: 'Mercure I&S · Internship',
        description: 'I developed an Android app to locate on-duty pharmacies based on user location, utilizing Android, Java, XML, and Firebase',
        image: mercure,
    },
    {
        id: 4,
        date: 'Jun 2021 - July 2021',
        title: 'Wordpress Developer',
        company: 'Mercure I&S · Internship',
        description: 'I developed a web portal for an agricultural site using WordPress, Elementor, CSS, and Bootstrap',
        image: mercure,
    },
];

const Experience = () => {
    return (
        <div style={{ minHeight: '100vh' }} id='experience' className='flex flex-col items-center justify-center relative'>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: '500', paddingTop: '120px' , marginBottom:'60px'}}>My Experience</h2>
            <div className="flex flex-col justify-center items-center gap-40 p-10 w-full max-w-6xl">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full gap-16`}>
                        <div className="relative flex flex-col items-start w-1/2">
                            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/3 w-60 h-56 rounded-full z-0" style={{ boxShadow: '0 0 30px 30px rgba(67, 107, 168, 0.2), inset 0 0 30px 30px rgba(67, 107, 168, 0.2)' }} />
                            <img src={exp.image} alt={exp.company} className="w-full h-auto rounded-sm z-10" />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <h4 className="text-lg text-blue-400">{exp.date}</h4>
                            <h4 className="text-lg text-white">{exp.company}</h4>
                            <div className="bg-gray-500 bg-opacity-30 rounded-lg p-6 shadow-lg w-full mt-4 cursor-pointer hover:shadow-gray hover:-translate-y-2 transition-shadow duration-300">
                                <p className="text-gray-300 text-lg">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
