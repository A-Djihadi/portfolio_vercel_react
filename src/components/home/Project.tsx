import React from "react";
import caplogo from '../../assets/cap-logo.png';
import cryptoMoonLogo from '../../assets/crypto-moon-logo.png';
import dgeniousLogo from '../../assets/dgenious-logo.png';


type ProjectItem = {
  date: string;
  title: string;
  location: string;
  description: string;
  logo: string;
  tags: string[];
};
const projects: ProjectItem[] = [
  {
    date: "Août 2022 – Février 2023",
    title: "Cryptos-Moon – Réplication temps réel de portefeuilles crypto",
    location: "Projet personnel",
    description:
      "Conception d’un système permettant aux utilisateurs de suivre et répliquer les actions de trading en temps réel. Le projet a nécessité une UI réactive, une diffusion d’événements synchronisés, et une architecture modulaire.",
    logo: cryptoMoonLogo,
    tags: [
      "JavaFX",
      "Java",
      "API Testing",
      "Journalisation actions",
      "Réplication temps réel",
      "Tableau de bord"
    ],
  },
  {
    date: "2022",
    title: "📈 Prototype AWS Cognito – Projet Dgenious",
    location: "Dgenious",
    description:
      "Conception d’un prototype fonctionnel pour valider la migration vers AWS Cognito dans un environnement de test complet, réduisant les risques techniques.",
    logo: dgeniousLogo,
    tags: [
      "AWS Cognito",
      "Oauth 2.0",
      "Python",
      "Automatisation scripts",
      "Migration cloud",
      "Estimation coûts"
    ],
  },
  {
    date: "2022 – 2025",
    title: "🛰️ Plateforme d’imagerie satellite – Projet Capgemini",
    location: "Capgemini",
    description:
      "Contribution à une plateforme de gestion des stocks et d’images satellites utilisée pour le suivi de missions spatiales. Travail centré sur la disponibilité, la scalabilité et l'intégrité des données.",
    logo: caplogo,
    tags: [
      "React.js",
      "Java",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Scalabilité",
      "Documentation technique",
      "Support utilisateur"
    ],
  }
];



const Project: React.FC = () => (
  <section id="projects" className="project-section">
    <h2 className="project-section-title">Projects</h2>
    <p className="project-section-subtitle">
      Here are some of the projects I have worked on recently.
    </p>
    <div className="project-list">
        <ol className="project-timeline">
    {projects.map((proj, idx) => (
      <li className="project-timeline-item" key={proj.title}>
        <span className="project-timeline-logo">
          <img
            alt={proj.title}
            loading="lazy"
            width={40}
            height={40}
            className="project-logo-img"
            src={proj.logo}
            style={{ color: "transparent" }}
          />
        </span>
        <div className="project-timeline-content">
          <div className="project-date">{proj.date}</div>
          <div className="project-title">{proj.title}</div>
          <div className="project-location">{proj.location}</div>
          <div className="project-description">{proj.description}</div>
          <div className="project-tags">
            {proj.tags.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </li>
    ))}
  </ol>
    </div>
  </section>

);

export default Project;