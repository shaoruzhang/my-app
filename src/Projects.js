// src/Projects.js

import React from 'react';

const Projects = () => {
  const projects = [
    {
      company: 'NYC 311 Complaints Data',
      duration: 'Sept 2021 – Dec 2021',
      description: (
        <>
          <p>
            This project started with a curiosity about how everyday complaints in New York
            City might reveal deeper stories about living conditions. I built an analytical
            data warehouse on Google BigQuery using NYC Open Data, following the Kimball
            methodology with ETL pipelines, dbt, SQL, and Python. The goal was to wrangle,
            profile, and analyze messy complaint data into something meaningful.
          </p>
          <p>
            To bring the data to life, I created a Tableau dashboard that mapped correlations
            between unsanitary conditions and rat sightings. This helped highlight the
            neighborhoods most impacted — insights that could support the NYC Department of
            Sanitation in prioritizing resources.
          </p>
          <p>
            You can explore the project details in my{' '}
            <a 
              href="https://docs.google.com/document/d/1fojjyDLMA5ZExmqbaBe74MrRjdIjZ7IUIp-TVARuHMQ/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              write-up
            </a>{' '}
            and see the visualization directly on{' '}
            <a 
              href="https://public.tableau.com/app/profile/shao.ru.zhang/viz/UnsanitaryConditionsvsRatsinNYC/UnsanitaryConditionsvs_RatsinNYC" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Tableau
            </a>.
          </p>
        </>
      ),
    },
    {
      company: 'New York Times Best Seller Recommendations',
      duration: 'May 2021',
      description: (
        <>
          <p>
            As someone who loves books, I wanted to make the New York Times Best Seller
            catalog more useful for readers. Using the New York Times API and Python, I
            created a recommendation table with 8 criteria across 10 genres.
          </p>
          <p>
            To go deeper, I developed a web scraping tool to pull in the entire Best Sellers
            archive, then cleaned and structured the data so it became searchable and easy
            to navigate. What started as a technical challenge became a way to help readers
            find their next great read.
          </p>
          <p>
            You can view the full project in this{' '}
            <a 
              href="https://colab.research.google.com/drive/1Fo4GCu_VuZdiCDZl3KA0ZYPBURnXsR-H?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Google Colab notebook
            </a>.
          </p>
        </>
      ),
    },
    {
      company: 'Heart Failure Predictions',
      duration: 'Sept 2020 – Dec 2020',
      description: (
        <>
          <p>
            Healthcare data has always fascinated me because of its real-world impact. For
            this project, I worked with a Kaggle dataset in R to study 12 risk factors that
            influence heart failure outcomes.
          </p>
          <p>
            I built a logistic regression model in RStudio, backed by summary statistics and
            validation tests, to better understand which patients might be most at risk. I
            also created visualizations to communicate these insights clearly — because
            when it comes to healthcare, clarity can save lives.
          </p>
          <p>
            You can see the presentation deck for this project{' '}
            <a 
              href="https://docs.google.com/presentation/d/1RDfTY8h6mhZYBFgaEWTnTRSbEo8_ZH3vVcuKGLuogug/edit" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              here
            </a>.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="experience-container">
      <h2>Academic Projects</h2>
      <p className="introduction-text">
        Each project has been a mix of curiosity, problem-solving, and storytelling with
        data. Whether it’s urban analytics, books, or healthcare, I’ve always tried to make
        data approachable and impactful. Here are a few highlights.
      </p>
      {projects.map((proj, index) => (
        <div key={index} className="experience-item">
          <h3>{proj.company}</h3>
          <p className="duration">{proj.duration}</p>
          <div className="description">{proj.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Projects;