// src/Skills.js

import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      items: ['Python', 'R', 'SQL'],
    },
    {
      category: 'Data Science Tools',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch'],
    },
    {
      category: 'Data Visualization',
      items: ['Tableau','Matplotlib', 'Seaborn'],
    },
    {
      category: 'Databases & Cloud',
      items: ['MySQL', 'AWS (Redshift, Sagemaker, S3)', 'Google Cloud Platform (GCP)'],
    },
    {
      category: 'Other Tools',
      items: ['Git', 'Streamlit'],
    },
  ];

  return (
    <div className="experience-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;