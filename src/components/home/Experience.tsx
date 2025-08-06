import React, { useState } from 'react';
import caplogo from '../../assets/cap-logo.png';
import cryptoMoonLogo from '../../assets/crypto-moon-logo.png';
import dgeniousLogo from '../../assets/dgenious-logo.png';

const experiences = [
  {
    company: "Capgemini",
    location: "Toulouse, France",
    title: "Ingénieur Logiciel | Consultant spatial",
    description: [
      "Participation à un projet stratégique dans le domaine spatial visant à gérer l’accès et le traitement d’images satellites à grande échelle.",
      "Maintenance applicative, intégration de nouvelles données satellites, amélioration continue de l’interface utilisateur et de l’infrastructure logicielle.",
      "Optimisation des performances et de la scalabilité du système.",
      "Intégration de données issues de nouvelles missions satellites.",
      "Refonte UX/UI pour améliorer l’expérience utilisateur.",
      "Gestion multi-environnements et documentation technique avancée."
    ],
    techStack: [
      "React.js", "Java", "TypeScript", "PostgreSQL", "Kubernetes",
      "Docker", "GitLab", "Jenkins", "Helm", "Hibernate", "API REST"
    ],
    time: "Jan 2022 - Present",
    img: caplogo,
  },
  {
    company: "Dgenious",
    location: "Bruxelles, Belgium",
    title: "Ingénieur Logiciel | Consultant en migration cloud",
    description: [
      "Étude, planification et prototypage d’une migration vers AWS Cognito comme fournisseur d’authentification.",
      "Projet pour une plateforme de gestion d’inventaire utilisée par des clients tels que Jeff de Bruges et Palais des Thés.",
      "Benchmark des solutions d’authentification.",
      "Optimisation des coûts AWS.",
      "Conception d’un prototype fonctionnel et plan de migration complet.",
      "Collaboration étroite avec les équipes frontend/backend."
    ],
    techStack: ["AWS Cognito", "Python", "Oauth 2.0"],
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