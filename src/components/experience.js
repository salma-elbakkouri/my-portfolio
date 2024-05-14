import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        id: 1,
        date: '-- Apr 2024 - Present --',
        title: 'Fullstack Developer',
        company: 'Aymd Agency · Internship',
        description: 'Serving as both Web Developer and Designer, I create designs and illustrations for ads and delve into web development',
    },
    {
        id: 2,
        date: '-- May 2022 · Jun 2022 --',
        title: 'Mobile Developer',
        company: 'Mercure I&S · Internship',
        description: 'Developed an Android app to locate on-duty pharmacies based on user location, utilizing Android, Java, XML, and Firebase',
    },
    {
        id: 3,
        date: '-- Jun 2021 - July 2021 --',
        title: 'Wordpress Developer',
        company: 'Mercure I&S · Internship',
        description: 'During a one-month internship, I developed a web portal for an agricultural site using WordPress, CSS, and Bootstrap',
    },
];

const Experience = () => {
    return (
        <div style={{ minHeight: '100vh' }} id='experience' className='flex flex-col items-center justify-center relative'>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: '500', paddingTop: '80px' }}>My Experience</h2>
            <div className="flex flex-col justify-center items-center gap-10 p-10 w-full max-w-3xl">
                {experiences.map((exp) => (
                    <div key={exp.id} className="bg-gray-500 bg-opacity-50 rounded-lg p-4 shadow-lg w-full cursor-pointer hover:shadow-gray hover:-translate-y-2 transition-shadow duration-300">
                        <h3 className="text-center text-darkBlue font-bold mb-4 text-2xl">{exp.date}</h3>
                        <div className="flex items-center gap-4 justify-center">
                            <div className='pl-3'>
                                <h4 className="text-xl text-darkBlue font-bold">{exp.title} | {exp.company}</h4>
                                <p className="text-gray-200 text-md">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
