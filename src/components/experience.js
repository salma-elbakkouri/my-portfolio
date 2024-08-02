import React from 'react';
import taptap from '../assets/taptap-final.png'; // Import the image
import alten from '../assets/alten.jpg'; // Import the image
import aymd from '../assets/aymd.png'; // Import the image
import mercure from '../assets/mercure.png'; // Import the image

const experiences = [
    {
        id: 1,
        date: 'May 2024 - August 2024',
        title: 'Support IT Consultant',
        company: 'Alten Fes · Internship',
        description: 'A 3-month summer internship at Alten Delivery Center Maroc, where I had the chance to visualize and analyze how IT support works, addressing user issues and delivering effective solutions to ensure smooth operations, and then I started practicing these skills',
        image: alten,
        url: 'https://www.alten.com',
    },
    {
        id: 2,
        date: 'Apr 2024 - June 2024',
        title: 'Fullstack Developer',
        company: 'Aymd Agency · Internship',
        description: 'A 2-month hybrid internship at Aymd, a digital marketing agency, where I multitasked on creating visual designs, developed a patient management web application, a simple contact website with QR codes, and a health assistant app featuring a health chatbot and medication reminders',
        image: aymd,
        url: 'https://aymdagency.com',
    },
    {
        id: 3,
        date: 'May 2022 · Jun 2022',
        title: 'Mobile Developer',
        company: 'Mercure I&S · Internship',
        description: 'A 2-month internship where I developed an Android app to locate on-duty pharmacies based on user location, with an admin side to verify and add pharmacies, utilizing Android, Java, XML, and Firebase.',
        image: mercure,
        url: 'https://www.charika.ma/societe-mercure-ingenierie-et-services-462861',
    },
    {
        id: 4,
        date: 'Jun 2021 - July 2021',
        title: 'Wordpress Developer',
        company: 'Mercure I&S · Internship',
        description: 'A 1-month initialization and observation internship where I had small tasks using WordPress and had the chance to create a web portal for an agricultural site using WordPress, Elementor, Bootstrap, and CSS',
        image: mercure,
        url: 'https://www.charika.ma/societe-mercure-ingenierie-et-services-462861',
    },
];

const Experience = () => {
    const handleImageClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={{ minHeight: '100vh' }} id='experience' className='flex flex-col items-center justify-center relative'>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: '500', paddingTop: '120px' , marginBottom:'60px'}}></h2>
            <div className="flex flex-col justify-center items-center gap-40 p-10 w-full max-w-6xl">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full gap-16`}>
                        <div className="relative flex flex-col items-start w-1/2">
                            <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/3 w-60 h-56 rounded-full z-0" style={{ boxShadow: '0 0 30px 30px rgba(67, 107, 168, 0.2), inset 0 0 30px 30px rgba(67, 107, 168, 0.2)' }} />
                            <img 
                                src={exp.image} 
                                alt={exp.company} 
                                className="w-full h-auto rounded-sm z-10 cursor-pointer transition-opacity duration-300 hover:opacity-80"
                                onClick={() => handleImageClick(exp.url)} 
                            />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <h4 className="text-lg text-blue-400">{exp.date}</h4>
                            <h4 className="text-lg text-white">{exp.company}</h4>
                            <div className="bg-gray-500 bg-opacity-30 rounded-lg p-6 shadow-lg w-full mt-4 transition-shadow duration-300">
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
