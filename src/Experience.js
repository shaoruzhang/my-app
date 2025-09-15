// src/Experience.js

import React from 'react';

const Experience = () => {
  // Array of your professional experiences
  const experiences = [
    {
      company: 'Google',
      role: 'Software Engineer',
      duration: '2023 - Present',
      description: 'Worked on front-end development for Google Maps, improving user interface and performance. Utilized React, TypeScript, and a micro-frontend architecture.',
    },
    {
      company: 'XYZ Inc.',
      role: 'Front-End Intern',
      duration: 'Summer 2022',
      description: 'Assisted in building a new e-commerce platform. Developed reusable React components and collaborated with the design team to ensure pixel-perfect implementation.',
    },
    {
      company: 'Uplink Digital',
      role: 'Junior Web Developer',
      duration: '2021 - 2022',
      description: 'Contributed to the development of custom websites for small businesses using HTML, CSS, and JavaScript. Managed client communication and project timelines.',
    },
  ];

  return (
    <div className="experience-container">
      <h2>My Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.role} at {exp.company}</h3>
          <p className="duration">{exp.duration}</p>
          <p className="description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;