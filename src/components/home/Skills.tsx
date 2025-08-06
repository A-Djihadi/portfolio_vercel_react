import React from 'react';

const skills = [
    { name: 'Spring', level: 'Advanced' },
    { name: 'Java', level: 'Advanced' },
    { name: 'React.JS', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Next.Js', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'DevOps', level: 'Advanced' },
    { name: 'AWS', level: 'Advanced' },
    { name: 'API Design', level: 'Advanced' },
    { name: 'Kubernetes', level: 'Intermediate' },
];

const Skills: React.FC = () => (
    <section  id="skills">
        <h2>Skills</h2>
        <div className='skills-list'>
            {skills.map((skill, index) => (
                <div className='skill-item' key={index}>
                    <span>{skill.name}</span>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;