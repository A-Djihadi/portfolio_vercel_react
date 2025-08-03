import React from 'react';

const skills = [
    { name: 'Service-Oriented Architecture (SOA)', level: 'Expert' },
    { name: 'Microservices', level: 'Advanced' },
    { name: 'API Design', level: 'Advanced' },
    { name: 'SOAP & REST', level: 'Advanced' },
    { name: 'Enterprise Integration', level: 'Intermediate' },
];

const Skills: React.FC = () => (
    <section  id="skills">
        <h2>Skills</h2>
        <div className='skills-list'>
            {skills.map((skill, index) => (
                <div className='skill-item' key={index}>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;