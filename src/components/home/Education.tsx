import React from 'react';
import insaLogo from '../../assets/groupe-insa-logo.png';

const Education: React.FC = () => {
    return (
        <section id="education" style={{ padding: '2rem 0' }}>
            <h2>Education</h2>
            <div className='education-list'>
                <div className='education-item'>
                    <img src={insaLogo} alt="INSA Logo" />
                    <div className='education-info'>
                        <h3>INSA (Institut National des Sciences Appliquées)</h3>
                        <p>
                            Engineering Degree <br />
                            University Name, Graduation Year
                        </p>
                        <ul>
                            <li>Relevant coursework: Design Studio, Urban Planning, Sustainable Architecture</li>
                            <li>Achievements: Dean's List, Architecture Competition Winner</li>
                        </ul>
                    </div>
                    <div className='education-time'>
                        <p>2015 - 2019</p>
                    </div>
                </div>
            </div>       
        </section>
    );
};

export default Education;