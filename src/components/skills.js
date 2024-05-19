import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact, faAngular, faJsSquare, faNodeJs, faHtml5, faCss3Alt,
    faBootstrap, faSass, faWordpress, faAndroid,
    faNpm, faUbuntu
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as FigmaSvg } from '../assets/figma.svg';
import { ReactComponent as JavaSvg } from '../assets/java.svg';
import { ReactComponent as PythonSvg } from '../assets/python.svg';
import { ReactComponent as PsSvg } from '../assets/ps.svg';
import { ReactComponent as TailwindSvg } from '../assets/tailwind.svg';
import { ReactComponent as CsharpSvg } from '../assets/csharp.svg';

const Skills = () => {
    const skills = [
        { id: 'react', name: 'React', icon: faReact, color: '#61DAFB' , },
        { id: 'angular', name: 'Angular', icon: faAngular, color: '#DD0031' },
        { id: 'javascript', name: 'JavaScript', icon: faJsSquare, color: '#F7DF1E' },
        { id: 'nodejs', name: 'Node.js', icon: faNodeJs, color: '#339933' },
        { id: 'npm', name: 'Npm', icon: faNpm, color: '#CB3837' },
        { id: 'java', name: 'Java', svgIcon: JavaSvg },
        { id: 'android', name: 'Android', icon: faAndroid, color: '#3DDC84' },
        { id: 'csharp', name: 'C#', svgIcon : CsharpSvg },
        { id: 'python', name: 'Python', svgIcon: PythonSvg }, 
        { id: 'html', name: 'HTML', icon: faHtml5, color: '#E34F26' },
        { id: 'css', name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
        { id: 'bootstrap', name: 'Bootstrap', icon: faBootstrap, color: '#7952B3' },
        { id: 'sass', name: 'Sass', icon: faSass, color: '#CC6699' },
        { id: 'tailwind', name: 'Tailwind', svgIcon : TailwindSvg },
        { id: 'ubuntu', name: 'Ubuntu', icon: faUbuntu, color: '#d1822e' },
        { id: 'figma', name: 'Figma', svgIcon: FigmaSvg },
        { id: 'photoshop', name: 'Photoshop', svgIcon: PsSvg },
        { id: 'wordpress', name: 'WordPress', icon: faWordpress, color: '#21759B' },
    ];

    return (
        <div style={{ minHeight: '100vh' }} id='skills' className='flex flex-col items-center justify-center'>
            <h2 style={{ color: 'white', fontSize: '25px', fontWeight: '500', paddingTop: '80px' }}>My Skills</h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-10">
                {skills.map(skill => (
                    <div key={skill.id} className="flex flex-col items-center justify-center w-40 h-40 ">
                        {skill.icon ? (
                            <FontAwesomeIcon icon={skill.icon} size="3x" style={{ marginBottom: '10px', color: skill.color }} />
                        ) : (
                            <skill.svgIcon style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                        )}
                        <span className="text-white text-sm mt-2">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
