// src/Education.js

import React from 'react';

const Education = () => {
  const educationHistory = [
    {
      institution: 'University of Pennsylvania',
      degree: 'Master of Engineering in Data Science',
      year: '2027 (Expected)',
      details: 'Currently pursuing advanced studies in data science, focusing on machine learning and big data technologies.',
    },
    {
      institution: 'Baruch College, CUNY',
      degree: 'Bachelor of Business Administration in Computer Information Systems (Data Analytics Concentration)',
      year: '2021',
      details: 'Graduated with a 4.0 GPA and earned Dean’s List honors, the Peter F. Vallone Scholarship, and the Hugh Lamle Scholarship'
    },
  ];

  return (
    <div className="experience-container">
      <h2>My Education</h2>
      {educationHistory.map((edu, index) => (
        <div key={index} className="experience-item">
          <h3>{edu.degree} from {edu.institution}</h3>
          <p className="duration">{edu.year}</p>
          <p className="description">{edu.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;