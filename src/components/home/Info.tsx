import React, { useState } from 'react';
import siteMetadata from '../../data/siteMetadata';
import pictureOne from '../../assets/profile_picture.jpg'; // Adjust the path as necessary
import pictureTwo from '../../assets/soitsu_picture.png'; // Adjust the path as necessary

// Social links with icons
const socialLinks = [
  {
    href: siteMetadata.linkedin,
    icon: siteMetadata.linkedinIcon,
    label: 'LinkedIn',
  },
  {
    href: siteMetadata.twitter,
    icon: siteMetadata.twitterIcon,
    label: 'Twitter',
  },
  {
    href: siteMetadata.github,
    icon: siteMetadata.githubIcon,
    label: 'GitHub',
  },
  {
    href: 'mailto:' + siteMetadata.email,
    icon: siteMetadata.mailIcon,
    label: 'Email',
  },
];

const images = [
    pictureOne,
    pictureTwo  
];

const pinIcon = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinboard.svg'; // Pin icon URL

const Info: React.FC = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const handleChangeImage = () => {
    setImgIdx(prev => prev === 0 ? 1 : 0);
  };
  return (
    <section id="info">
        <div  className='info-container'>
            <div >
                <img
                className='profile-img'  
                src={images[imgIdx]}
                alt="Profile"
                onClick={handleChangeImage}
                title="Changer la photo"
                />
                    <div>
                        <div className='info-header'>
                            <div  className='info-header-name' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <h2 className='name'>Djihadi Ahamdy</h2>
                                    <button
                                        className='contact-button'
                                        onClick={() => window.location.href = `mailto:${siteMetadata.email}`}
                                    >
                                        Contact
                                    </button>
                            </div>
                            <p className='job-title'>Développeur FullStack Java/Spring & ReactJS/TypeScript</p>
                        </div>
                        <p className='info-description'>
                         Je suis Djihadi Ahamdy, ingénieur logiciel passionné par l’innovation technologique, actuellement en poste chez Capgemini en tant que consultant spatial. Fort de plusieurs années d’expérience, j’interviens dans la conception, le développement et l’évolution de solutions logicielles à haute valeur ajoutée, en m’adaptant à des environnements complexes et critiques. Mon approche repose sur la rigueur, la curiosité technologique et une forte capacité d’adaptation.
                         <br/>💼 Vous avez un projet ambitieux ? Je suis ouvert aux collaborations en freelance pour construire ensemble des solutions robustes, modernes et scalables.
                        </p>
                    <div className='info-location'>
                        <img className='pin-icon' src={pinIcon} alt="Pin Icon" style={{ width: 20, height: 20, marginRight: 8 }} />
                        <p style={{ fontStyle: 'italic' }} className='location'>Toulouse, France</p>
                    </div>
                                    <div className='social-links'>
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img className='social-icon'
                src={link.icon}
                alt={link.label}
                style={{ width: 28, height: 28, display: 'block' }}
              />
            </a>
          ))}
                </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Info;