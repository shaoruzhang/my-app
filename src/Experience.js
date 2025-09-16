const Experience = () => {
  const experiences = [
    {
      company: 'New York Life',
      role: 'Data Scientist',
      duration: 'May 2025 to Present',
      description: (
        <p>
          At New York Life, I’ve been diving into the world of large language models,
          engineering evaluation metrics for a Retrieval Augmented Generation (RAG)
          pipeline. It’s been exciting to give the Service team a way to measure and
          improve generative AI outputs for customer-facing use cases. Alongside this,
          I built an interactive model drift dashboard with Streamlit and Python, making
          it easier to spot when cross-sell and underwriting models start to wander off
          course, with the goal of reducing drift incidents by 5%.
        </p>
      ),
    },
    {
      company: 'New York Life',
      role: 'Data Science Rotational Associate',
      duration: 'June 2022 to May 2025',
      description: (
        <p>
          During my rotational program, I wore many hats as a data scientist. One of my
          favorite projects was building XGBoost and Isolation Forest models that boosted
          fraud detection by 12%, ultimately saving $200K across multiple products.
          Another highlight was analyzing an A/B test for the NYL website’s interest form,
          which revealed the winning variant and drove a 6% increase in user engagement.
          I also ventured into NLP, using TF-IDF and LDA to analyze client voice recordings.
          This work helped reduce average call time by 15%. And because I can’t resist
          finding efficiencies, I automated much of our data preparation pipeline in R,
          which improved team productivity by 25%.
        </p>
      ),
    },
    {
      company: 'CUNY Tech Prep',
      role: 'Data Science Fellow',
      duration: 'Aug 2021 to Jan 2022',
      description: (
        <p>
          As a Data Science Fellow, I tackled a COVID-19 project that combined data wrangling
          in Python on Google Colab with storytelling through Tableau. The goal was to
          uncover and visualize patterns in COVID-19 cases across NYC schools, helping to
          make sense of a constantly shifting situation.
        </p>
      ),
    },
    {
      company: 'JPMorgan Chase',
      role: 'Software Engineer Wintern',
      duration: 'Jan 2021',
      description: (
        <p>
          My time as a Wintern at JPMorgan Chase introduced me to the fast-paced world of
          software engineering. I streamlined the data collection phase for a trading widget
          by integrating API calls and web scraping, while also setting up rigorous unit
          tests to ensure everything ran smoothly and reliably.
        </p>
      ),
    },
    {
      company: 'Snap Inc.',
      role: 'Ad Solutions Intern',
      duration: 'June 2021 to Aug 2021',
      description: (
        <p>
          At Snap, I balanced creative research with analytical rigor. I conducted qualitative
          research on about 30 marketing articles, presenting insights to leadership as they
          navigated the shift away from third-party cookies. On the quantitative side, I
          evaluated more than 700 ads and 52 campaigns across 13 metrics, helping teams
          understand what really drove brand lift and ad effectiveness.
        </p>
      ),
    },
  ];

  return (
    <div className="experience-container">
      <h2>My Experiences</h2>
      <p style={{ marginBottom: "20px" }}>
        Every role I’ve taken on has been part data detective, part problem-solver, and
        sometimes even part cat-herder (though that’s mostly at home 🐱). Below is a story
        of my journey so far.
      </p>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.role} at {exp.company}</h3>
          <p className="duration">{exp.duration}</p>
          <div className="description">{exp.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
