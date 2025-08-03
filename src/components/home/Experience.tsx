import React, { useState } from 'react';
import caplogo from '../../assets/cap-logo.png';
import cryptoMoonLogo from '../../assets/crypto-moon-logo.png';
import dgeniousLogo from '../../assets/dgenious-logo.png';

const experiences = [
  {
    company: "Capgemini",
    location: "Toulouse, France",
    title: "Software Engineer",
    description: "",
    time: "Jan 2022 - Present",
    img: caplogo,
  },
  {
    company: "Crypto Moon",
    location: "Remote",
    title: "Software Engineer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim molestias maxime aperiam ad iste, quidem minima eaque saepe tenetur soluta evenie",
    time: "Jan 2022 - Present",
    img: cryptoMoonLogo,
  },
  {
    company: "Dgenious",
    location: "Bruxelle ,Belgium",
    title: "Software Engineer",
    description: "",
    time: "Jan 2022 - Present",
    img: dgeniousLogo,
  }
];

const Experience: React.FC = () => {
  const [visibleIdx, setVisibleIdx] = useState<number | null>(null);

  return (
    <section id="experience" style={{ padding: '2rem 0' }}>
      <h2>Work Experience</h2>
      <div className='experience-list'>
        {experiences.map((exp, idx) => (
          <div
            className="experience-item"
            key={exp.company}
            style={{ cursor: 'pointer' }}
            onClick={() => setVisibleIdx(visibleIdx === idx ? null : idx)}
          >
            <img src={exp.img} alt={exp.company} />
            <div className='experience-info'>
              <h3>{exp.title}</h3>
              {exp.description && visibleIdx === idx && (
                <p className='experience-description'>{exp.description}</p>
              )}
              <p className='experience-location'>{exp.company} - {exp.location}</p>
            </div>
            <div className='experience-time'>
              <p>{exp.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;