import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'steer',
      title: 'Steervio — Autonomous Trading Platform',
      subtitle: 'Jan 2026 – Present',
      tags: ['Python', 'Flask', 'React.js', 'MongoDB', 'Alpaca API', 'GROQ/Llama', 'Socket.IO', 'Scikit-learn'],
      description: '7-layer autonomous trading pipeline with market state detection (ADX/ATR), ML predictor, and LLM reasoning via GROQ/Llama-3.3-70b. Real-time WebSocket telemetry and Kelly Criterion risk sizing.',
      image: 'images/steer.png',
      categories: ['AI & ML', 'Full-Stack'],
      github: 'https://github.com/Sunikhilthakur/Steer',
      demo: null
    },
    {
      id: 'meetmind',
      title: 'MeetMind — AI Meeting Intelligence',
      subtitle: 'Mar 2026 – Apr 2026',
      tags: ['Python', 'OpenAI Whisper', 'BART', 'RoBERTa', 'GROQ API', 'LDA', 'Streamlit', 'Plotly'],
      description: 'End-to-end NLP pipeline comparing 3 summarization paradigms (TextRank, BART, LLM). ROUGE metric evaluation, LDA topic modeling, RoBERTa sentiment analysis, and Whisper audio transcription.',
      image: 'images/meetmind.png',
      categories: ['AI & ML', 'NLP'],
      github: 'https://github.com/Sunikhilthakur/Meetmind',
      demo: null
    },
    {
      id: 'hands-free-reading',
      title: 'Hands-Free Reading System',
      subtitle: 'Apr 2026 – Jun 2026',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Dlib', 'NumPy', 'Tkinter'],
      description: 'Real-time gaze-tracking system for hands-free text navigation via eye movements and blink detection. Built for users with physical disabilities using MediaPipe facial landmark detection.',
      image: 'images/hands_free_reading.png',
      categories: ['Computer Vision', 'Accessibility'],
      github: 'https://github.com/Sunikhilthakur/Hands-free-reading-system',
      demo: null
    },
    {
      id: 'dream-nest',
      title: 'Dream Nest — Real Estate Platform',
      subtitle: 'MERN Stack',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Full-stack MERN real estate listing platform with property search, user authentication, and listing management.',
      image: 'images/Dream.png',
      categories: ['Full-Stack'],
      github: 'https://github.com/Sunikhilthakur/Dream_nest',
      demo: 'https://dreamnest-sunikhilthakurs-projects.vercel.app/'
    },
    {
      id: 'ai-meeting-summarizer',
      title: 'AI Meeting Summarizer',
      subtitle: 'MERN + AI',
      tags: ['React.js', 'Node.js', 'MongoDB', 'OpenAI'],
      description: 'MERN stack web app for managing meeting transcripts with AI-powered summarization, editing, and email sharing features.',
      image: 'images/meeting.png',
      categories: ['AI & ML', 'Full-Stack'],
      github: 'https://github.com/Sunikhilthakur/Meeting',
      demo: 'https://meeting-brown.vercel.app/'
    },
    {
      id: 'blog-management-app',
      title: 'Blog Management App',
      subtitle: 'MERN Stack',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Responsive full-stack blog application with rich text editing, CRUD operations, user authentication, and category management.',
      image: 'images/Blog.jpg',
      categories: ['Full-Stack'],
      github: 'https://github.com/Sunikhilthakur/Blogwebsite',
      demo: 'https://blogwebsite-ii3g.onrender.com/'
    }
  ];

  const filterCategories = ['All', 'AI & ML', 'NLP', 'Computer Vision', 'Full-Stack', 'Accessibility'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15" style={{ width: '100%', flex: '0 0 100%', maxWidth: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <h2>Research & AI/ML Projects</h2>
              {/* Filter Tabs */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {filterCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '20px',
                      border: '1px solid var(--bg-black-50)',
                      background: activeFilter === category ? 'var(--skin-color)' : 'var(--bg-black-100)',
                      color: activeFilter === category ? 'white' : 'var(--text-black-900)',
                      fontSize: '13px',
                      cursor: 'pointer',
                      fontWeight: activeFilter === category ? '600' : '400',
                      transition: 'all 0.25s ease',
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ul className="portfolio-list row">
          {filteredProjects.map((project) => (
            <li key={project.id} className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="portfolio-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div style={{ padding: '10px 12px 0' }}>
                  <h2 style={{ fontSize: '16px', marginBottom: '4px', lineHeight: '1.3' }}>{project.title}</h2>
                  <p style={{ fontSize: '12px', color: 'var(--skin-color)', fontWeight: '600', marginBottom: '6px' }}>{project.subtitle}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-black-700)', lineHeight: '1.5', marginBottom: '8px' }}>
                    {project.description}
                  </p>
                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                    {project.tags.slice(0, 5).map((tag, i) => (
                      <span key={i} style={{
                        background: 'var(--bg-black-50)',
                        color: 'var(--text-black-700)',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}>{tag}</span>
                    ))}
                    {project.tags.length > 5 && (
                      <span style={{
                        background: 'var(--bg-black-50)',
                        color: 'var(--skin-color)',
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}>+{project.tags.length - 5} more</span>
                    )}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
