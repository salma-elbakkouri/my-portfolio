import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact, faAngular, faJsSquare, faNodeJs, faHtml5, faCss3Alt,
    faBootstrap, faSass, faWordpress, faAndroid,
    faNpm 
    // faUbuntu
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as FigmaSvg } from '../assets/figma.svg';
import { ReactComponent as JavaSvg } from '../assets/java.svg';
// import { ReactComponent as PythonSvg } from '../assets/python.svg';
import { ReactComponent as PsSvg } from '../assets/ps.svg';
import { ReactComponent as TailwindSvg } from '../assets/tailwind.svg';
import { ReactComponent as CsharpSvg } from '../assets/csharp.svg';

const Skills = () => {
    const skills = [
        { id: 'react', name: 'React', icon: faReact, color: '#61DAFB', url: 'https://reactjs.org/' },
        { id: 'angular', name: 'Angular', icon: faAngular, color: '#DD0031', url: 'https://angular.io/' },
        { id: 'javascript', name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { id: 'nodejs', name: 'Node.js', icon: faNodeJs, color: '#339933', url: 'https://nodejs.org/' },
        { id: 'npm', name: 'Npm', icon: faNpm, color: '#CB3837', url: 'https://www.npmjs.com/' },
        { id: 'java', name: 'Java', svgIcon: JavaSvg, url: 'https://www.oracle.com/java/' },
        { id: 'android', name: 'Android', icon: faAndroid, color: '#3DDC84', url: 'https://www.android.com/' },
        { id: 'csharp', name: 'C#', svgIcon: CsharpSvg, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
        // { id: 'python', name: 'Python', svgIcon: PythonSvg, url: 'https://www.python.org/' },
        { id: 'html', name: 'HTML', icon: faHtml5, color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { id: 'css', name: 'CSS', icon: faCss3Alt, color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { id: 'bootstrap', name: 'Bootstrap', icon: faBootstrap, color: '#7952B3', url: 'https://getbootstrap.com/' },
        { id: 'sass', name: 'Sass', icon: faSass, color: '#CC6699', url: 'https://sass-lang.com/' },
        { id: 'tailwind', name: 'Tailwind', svgIcon: TailwindSvg, url: 'https://tailwindcss.com/' },
        // { id: 'ubuntu', name: 'Ubuntu', icon: faUbuntu, color: '#d1822e', url: 'https://ubuntu.com/' },
        { id: 'figma', name: 'Figma', svgIcon: FigmaSvg, url: 'https://www.figma.com/' },
        { id: 'photoshop', name: 'Photoshop', svgIcon: PsSvg, url: 'https://www.adobe.com/products/photoshop.html' },
        { id: 'wordpress', name: 'WordPress', icon: faWordpress, color: '#21759B', url: 'https://wordpress.org/' },
    ];

    const handleSkillClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div style={{ minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }} id='skills' className='flex flex-col items-center justify-center'>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: '500', paddingTop: '150px', marginBottom: '30px', textAlign: 'center' }}>
                - You Can Count On Me If The Project Involves -
            </h2>
            
            <div className="flex flex-row flex-wrap justify-center items-center gap-8 p-5">
                {skills.map(skill => (
                    <div key={skill.id} className="skill-bubble" onClick={() => handleSkillClick(skill.url)} style={{ cursor: 'pointer' }}>
                        <div className="skill-content">
                            {skill.icon ? (
                                <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} className="skill-icon" />
                            ) : (
                                <skill.svgIcon className="skill-svg" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
