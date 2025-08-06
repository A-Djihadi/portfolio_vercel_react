import React from "react";

const sections = [
  { id: "info", label: "Info" },
  { id: "experience", label: "Expérience" },
  { id: "education", label: "Éducation" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
];

const NavButtons: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-buttons">
      {sections.map((section) => (
        <button
          key={section.id}
          className="nav-btn"
          onClick={() => handleScroll(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default NavButtons;