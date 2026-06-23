import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-brain',
      title: 'AI & NLP Engineering',
      description: 'Building end-to-end NLP pipelines using HuggingFace Transformers (BART, RoBERTa), LLM APIs (GROQ, OpenAI), and OpenAI Whisper. Experience with ROUGE metric evaluation, LDA topic modeling, sentiment analysis, and retrieval-augmented generation (RAG) systems.',
      delay: '0.1s'
    },
    {
      icon: 'fa-laptop-code',
      title: 'Full-Stack Web Development',
      description: 'Designing and deploying full-stack applications using React.js, Node.js/Express, Flask, and MongoDB. Experienced with REST APIs, Socket.IO real-time systems, JWT/Google OAuth authentication, and responsive Tailwind CSS dashboards.',
      delay: '0.2s'
    },
    {
      icon: 'fa-chart-line',
      title: 'ML & Algorithmic Systems',
      description: 'Engineering production-grade ML pipelines for time-series and financial data, including autonomous trading bots with ADX/ATR market state detection, Kelly Criterion risk sizing, and three-pronged AI consensus combining rule-based signals, custom ML models, and LLM reasoning.',
      delay: '0.3s'
    },
    {
      icon: 'fa-eye',
      title: 'Computer Vision & Accessibility',
      description: 'Building real-time gaze-tracking and eye-detection systems using OpenCV, MediaPipe, and Dlib. Focused on human-computer interaction and accessibility — enabling hands-free interfaces for users with physical disabilities.',
      delay: '0.4s'
    },
    {
      icon: 'fa-code',
      title: 'Software Engineering & DSA',
      description: 'Solid foundation in Data Structures & Algorithms (400+ problems on LeetCode/GFG). Experienced with Agile sprints, code reviews, system design, OOP, and best software engineering practices in collaborative team environments.',
      delay: '0.5s'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Research Interests',
      description: 'Aspiring researcher focused on cross-lingual NLP, multilingual information retrieval, retrieval-augmented generation, and ML for time-series data. Applying for a Master\'s degree to pursue advanced research that is technically rigorous and practically meaningful.',
      delay: '0.6s'
    }
  ];

  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
          <div className="padd-15" style={{ flex: '0 0 100%', maxWidth: '100%', marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--text-black-700)', fontSize: '24px' }}>What I Do</h2>
          </div>
        </div>
        <ul className="services-list row">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="service-item padd-15"
              style={{ animationDelay: service.delay }}
            >
              <div className="service-item-inner">
                <div className="icon">
                  <i className={`fa ${service.icon}`}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
