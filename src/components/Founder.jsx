import React from 'react';
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const Founder = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      {/* Banner Section */}
      <div className="container-fluid p-0">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${Bgservices})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            position: "relative",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="banner-overlay">
            <h1 className="banner-heading">Our Founder</h1>
            <div className="breadcrumbs">
              <a style={{ color: "white", textDecoration: "none" }} href="/">
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i> <span>Our Founder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row align-items-center">
          <div className="col-md-6" style={{ padding: '20px' }}>
            <h1 className="font-weight-bold">Founder Azeem Shahid</h1>
            <h3 className="text-muted">Visionary Leader</h3>
            <p className="text-left">
              My mission is to inspire and motivate young people to start thinking about their professional futures early on. I aim to develop sustainable ideas and encourage others to realize their ideas as a team, rewarding the best with financial and professional support.
            </p>
            <p>
              As a former Managing Director of Global Markets Investment Banking at Deutsche Bank AG, Azeem Shahid brings extensive experience in banking and finance with institutional clients across Germany and Eastern Europe. He has built a robust network across business, politics, media, and culture over the years.
            </p>
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://placehold.co/600x400"
              alt="Azeem Shahid"
              style={{
                maxWidth: '100%',
                height: '400px',
                borderRadius: '10px',
                marginBottom: '20px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            />
            <h2 style={{ textAlign: 'center' }}>Mr. Azeem Shahid</h2>
            <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Founder of House Of Mathematics</p>
          </div>
        </div>

        {/* Quote Section */}
  

        {/* Achievements Section */}
        <div className="mt-5">
          <h3 className="text-center">Achievements</h3>
          <ul className="list-unstyled text-center">
            <li>🏆 Awarded Best Innovator in Education by [Organization Name]</li>
            <li>🌍 Keynote Speaker at International Mathematics Education Conference</li>
            <li>📈 Successfully mentored over 500 students in various math disciplines</li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="mt-5">
          <h3 className="text-center">Testimonials</h3>
          <div className="row">
            <div className="col-md-4 text-center">
              <p>"Azeem's mentorship has transformed my understanding of mathematics!"</p>
              <small>- Student Name</small>
            </div>
            <div className="col-md-4 text-center">
              <p>"Azeem's mentorship has transformed my understanding of mathematics!"</p>
              <small>- Another Student</small>
            </div>
            <div className="col-md-4 text-center">
              <p>""Azeem's mentorship has transformed my understanding of mathematics!"</p>
              <small>- Education Expert</small>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Founder;
