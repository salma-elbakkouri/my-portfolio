import React from 'react';

const experiences = [
    {
        id: 1,
        date: 'Apr 2024 - Present',
        title: 'Fullstack Developer',
        company: 'Aymd Agency · Internship',
        description: 'Serving as both Web Developer and Designer, I create designs and illustrations for ads and delve into web development'
    },
    {
        id: 2,
        date: 'May 2022 - Jun 2022',
        title: 'Mobile Developer',
        company: 'Mercure I&S · Internship',
        description: 'Developed an Android app to locate on-duty pharmacies based on user location, utilizing Android, Java, XML, and Firebase'
    },
    {
        id: 3,
        date: 'Jun 2021 - Jun 2021',
        title: 'Wordpress Developer',
        company: 'Mercure I&S · Internship',
        description: 'During a one-month internship, I developed a web portal for an agricultural site using WordPress, CSS, and Bootstrap'
    },

];

const Experience = () => {
    return (
        <div style={{ minHeight: '100vh' }} id='experience' className='flex flex-col items-center justify-center'>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: '500', paddingTop: '80px' }}>My Experience</h2>
            <div className="flex flex-col justify-center items-start gap-10 p-10 w-full max-w-2xl">
                {experiences.map(exp => (
                    <div key={exp.id} className="bg-gray-700 rounded-lg p-4 shadow-lg w-full cursor-pointer hover:-translate-y-2 ">
                        <h3 className="text-lg text-white font-bold">{exp.date}</h3>
                        <h4 className="text-md text-white">{exp.title} | {exp.company}</h4>
                        <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
