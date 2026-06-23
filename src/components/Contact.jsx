import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const contactInfos = [
    { icon: 'fa-envelope', label: 'Email', value: 'thakursunikhil@gmail.com', href: 'mailto:thakursunikhil@gmail.com' },
    { icon: 'fa-phone', label: 'Phone', value: '+91 9882174438', href: 'tel:+919882174438' },
    { icon: 'fa-brands fa-github', label: 'GitHub', value: 'Sunikhilthakur', href: 'https://github.com/Sunikhilthakur' },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'sunikhil-thakur', href: 'https://www.linkedin.com/in/sunikhil-thakur-022813227/' },
    { icon: 'fa-brands fa-medium', label: 'Medium', value: '@thakursunikhil', href: 'https://medium.com/@thakursunikhil' }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Initialize EmailJS with client's public key
    emailjs.init('cuE1rdG5Vm10kiSMe');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send('service_nux5o4t', 'template_umodood', templateParams)
      .then((response) => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>

        <ul className="contact-info-list row" style={{ justifyContent: 'center' }}>
          {contactInfos.map((info, idx) => (
            <li key={idx} className="contact-info-item padd-15">
              <div className="icon">
                <a href={info.href} target="_blank" rel="noopener noreferrer">
                  <i className={`fa ${info.icon}`}></i>
                </a>
              </div>
              <h4>{info.label}</h4>
              <p style={{ wordBreak: 'break-all', fontSize: '13px' }}>{info.value}</p>
            </li>
          ))}
        </ul>

        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>

        <div className="row">
          <form className="contact-form padd-15" id="contact-form" onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {status.message && (
              <div className="row">
                <div className="padd-15" style={{ width: '100%', marginBottom: '20px' }}>
                  <div
                    style={{
                      padding: '12px 20px',
                      borderRadius: '25px',
                      backgroundColor: status.type === 'success' ? 'rgba(90, 226, 174, 0.15)' : 'rgba(236, 24, 57, 0.15)',
                      color: status.type === 'success' ? '#2e8c65' : '#ec1839',
                      border: `1px solid ${status.type === 'success' ? '#5ae2ae' : '#ec1839'}`,
                      textAlign: 'center',
                      fontWeight: '600'
                    }}
                  >
                    {status.message}
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
