import React from 'react';

const About = () => {
  const skills = [
    { name: 'Python & ML (Scikit-learn, HuggingFace)', level: 85 },
    { name: 'React.js / Full-Stack Web Dev', level: 80 },
    { name: 'NLP & LLM Integration', level: 80 },
    { name: 'Data Structures & Algorithms', level: 75 },
    { name: 'Flask / Node.js / REST APIs', level: 80 },
    { name: 'MongoDB / MySQL / Databases', level: 80 },
    { name: 'Computer Vision (OpenCV, MediaPipe)', level: 70 },
    { name: 'Git & GitHub', level: 85 },
  ];

  const personalInfo = [
    { label: 'Degree', value: 'B.E. Computer Science Engineering' },
    { label: 'CGPA', value: '8.91 / 10' },
    { label: 'Location', value: 'Una, Himachal Pradesh, India' },
    { label: 'Email', value: 'thakursunikhil@gmail.com', isLink: true, url: 'mailto:thakursunikhil@gmail.com' },
    { label: 'Phone', value: '+91 9882174438' },
    { label: 'LinkedIn', value: 'sunikhil-thakur', isLink: true, url: 'https://www.linkedin.com/in/sunikhil-thakur-022813227/' },
    { label: 'GitHub', value: 'Sunikhilthakur', isLink: true, url: 'https://github.com/Sunikhilthakur' },
  ];

  const certifications = [
    { name: 'Data Science', issuer: 'IBM', date: 'Aug 2024' },
    { name: 'Data Analysis with Python', issuer: 'IBM', date: 'Aug 2024' },
    { name: 'Full Stack Software Developer', issuer: 'IBM', date: 'Apr 2024' },
    { name: 'Data Structures and Algorithms', issuer: 'IBM', date: 'Mar 2024' },
    { name: 'Software Engineering', issuer: 'Coursera', date: '' },
  ];

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const pdfUrl = 'CV/sunikhil_resume_claude.pdf';
    window.open(pdfUrl, '_blank');
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sunikhil_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Sunikhil Thakur — <span>AI, NLP & Software Engineer</span></h3>
                <p>
                  Computer Science graduate with a CGPA of <strong>8.91/10</strong> from Chitkara University (2025), 
                  with industry experience building AI-powered applications, NLP pipelines, and production-grade full-stack systems. 
                  I specialize in cross-lingual NLP, multilingual information retrieval, retrieval-augmented generation (RAG), 
                  and ML for time-series data. I have hands-on internship experience at Stalwart Integrals, 
                  where I contributed to the Wokmat AI Assessment Platform using React.js, Flask, and MongoDB.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <ul className="info-list row">
                  {personalInfo.map((info, idx) => (
                    <li key={idx} className="info-item padd-15">
                      <p>
                        {info.label} :{' '}
                        <span>
                          {info.isLink ? (
                            <a href={info.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-black-700)' }}>
                              {info.value}
                            </a>
                          ) : (
                            info.value
                          )}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="buttons padd-15">
                    <a href="#contact" className="btn hire-me" onClick={handleContactClick}>Contact Me</a>
                    <a href="CV/sunikhil_resume_claude.pdf" className="btn outlined-btn" onClick={handleDownloadCV}>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="padd-15 skills">
                <ul className="skills-list row">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="skill-item padd-15">
                      <h5>{skill.name}</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: `${skill.level}%` }}></div>
                        <div className="skill-percent">{skill.level}%</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="row" style={{ marginTop: '30px' }}>
              <div className="education padd-15" style={{ flex: '0 0 60%', maxWidth: '60%' }}>
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> Aug 2021 – Aug 2025
                        </h3>
                        <h4 className="timeline-title">B.E. Computer Science Engineering</h4>
                        <p className="timeline-text">
                          Chitkara University, Punjab, India
                          <br /> <b>CGPA: 8.91 / 10</b>
                          <br /><span style={{ fontSize: '13px', color: 'var(--text-black-700)' }}>
                            Data Science · Machine Learning · Data Structures & Algorithms · Software Engineering · Full-Stack Development
                          </span>
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> Until 2021
                        </h3>
                        <h4 className="timeline-title">Secondary Education (CBSE)</h4>
                        <p className="timeline-text">
                          Shanti INTERNATIONAL Sr. Sec. Public School,<br />Kailash Nagar, Himachal Pradesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="education padd-15" style={{ flex: '0 0 40%', maxWidth: '40%' }}>
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> Jun 2024 – Aug 2024
                        </h3>
                        <h4 className="timeline-title">Software Engineer Intern</h4>
                        <p className="timeline-text">
                          <b>Stalwart Integrals</b>
                          <br /><span style={{ fontSize: '13px', color: 'var(--text-black-700)' }}>
                            Built full-stack features for the Wokmat AI Assessment Platform using React.js, Flask, and MongoDB. 
                            Implemented JWT & Google OAuth, admin dashboards, and proctoring features.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="row" style={{ marginTop: '30px' }}>
              <div className="padd-15" style={{ flex: '0 0 100%', maxWidth: '100%' }}>
                <h3 className="title">Certifications</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '15px' }}>
                  {certifications.map((cert, idx) => (
                    <div key={idx} style={{
                      background: 'var(--bg-black-100)',
                      border: '1px solid var(--bg-black-50)',
                      borderRadius: '10px',
                      padding: '12px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      transition: 'transform 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <i className="fas fa-certificate" style={{ color: 'var(--skin-color)', fontSize: '20px' }}></i>
                      <div>
                        <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-black-900)' }}>{cert.name}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-black-700)' }}>
                          {cert.issuer}{cert.date ? ` · ${cert.date}` : ''}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
