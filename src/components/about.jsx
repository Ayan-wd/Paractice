import React from 'react';
import { useNavigate } from 'react-router-dom';
import about from '../assets/about/about.avif';
import "../css/About.css"

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detailedAbout');
  };

  return (
    <div className="container-fluid about-section" style={{ marginTop: '100px' }}>
      <div className="container text-left">
        <div className="row align-items-center">
          {/* Text Column */}
            <h1 className="heading" style={{ color: 'black', fontSize: '2.5rem',textAlign:'center',alignItems:'center' }}>
              Why Choose Us
            </h1>
          <div className="col-md-6" style={{ padding: '40px' }}>
            <p className="paragraph" style={{ color: 'black', fontSize: '1.1rem' }}>
              Choosing our platform means embracing a future of education that values both tradition and innovation. We believe that every student is unique, so we've crafted a learning environment that caters to diverse needs. Our approach includes:
            </p>
            <ul className="features-list" style={{ color: 'black', fontSize: '1.1rem' }}>
              <li>Structured traditional methods for reliable learning.</li>
              <li> Innovative teaching techniques for engagement.</li>
              <li> Flexible learning platform adaptable to your pace.</li>
              <li> Expert educators committed to your success.</li>
            </ul>
            <button
              type="button"
              id="nav-button"
              className="btn btn-primary appointment-btn mt-3"
              onClick={handleClick}
              style={{
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                transition: 'background-color 0.3s, transform 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <strong>Learn More</strong> <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          {/* Image Column */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={about}
              alt="Logo"
              style={{
                height: '400px',
                width: 'auto',
                margin: '40px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
