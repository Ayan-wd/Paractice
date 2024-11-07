import React from 'react';
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const Founder = () => {
  return (
    <div style={{ marginTop: "0px" }}>
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
            textAlign: "center",
            flexDirection: "column",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        >
          <h1 className="banner-heading display-4 fw-bold">Our Founder</h1>
          <div className="breadcrumbs">
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Home
            </a>{" "}
            <i className="bi bi-chevron-right mx-2"></i> <span>Our Founder</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h1 className="fw-bold">Founder Azeem Shahid</h1>
            <h3 className="text-muted mb-3">Visionary Leader</h3>
            <p>
              My mission is to inspire and motivate young people to start thinking about their professional futures early on. I aim to develop sustainable ideas and encourage others to realize their ideas as a team, rewarding the best with financial and professional support.
            </p>
            <p>
              As a former Managing Director of Global Markets Investment Banking at Deutsche Bank AG, Azeem Shahid brings extensive experience in banking and finance with institutional clients across Germany and Eastern Europe. He has built a robust network across business, politics, media, and culture over the years.
            </p>
          </div>

          <div className="col-md-6 d-flex flex-column align-items-center">
            <img
              src="https://placehold.co/600x400"
              alt="Azeem Shahid"
              style={{
                maxWidth: '100%',
                height: '300px',
                borderRadius: '50%',
                marginBottom: '20px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
              }}
            />
            <h2 className="text-center mt-3">Mr. Azeem Shahid</h2>
            <p className="text-center text-muted">Founder of House Of Mathematics</p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-5 text-center">
          <h3 className="mb-4">Achievements</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <i className="bi bi-trophy-fill text-success" style={{ fontSize: '40px' }}></i>
              <p className="mt-2">Awarded Best Innovator in Education by [Organization Name]</p>
            </div>
            <div className="col-md-4 mb-3">
              <i className="bi bi-globe text-success" style={{ fontSize: '40px' }}></i>
              <p className="mt-2">Keynote Speaker at International Mathematics Education Conference</p>
            </div>
            <div className="col-md-4 mb-3">
              <i className="bi bi-person-check-fill text-success" style={{ fontSize: '40px' }}></i>
              <p className="mt-2">Successfully mentored over 500 students in various math disciplines</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-5">
          <h3 className="text-center mb-4">Testimonials</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <p className="text-center">"Azeem's mentorship has transformed my understanding of mathematics!"</p>
                <footer className="text-end text-muted">- Student Name</footer>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <p className="text-center">"Azeem's mentorship has transformed my understanding of mathematics!"</p>
                <footer className="text-end text-muted">- Another Student</footer>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <p className="text-center">"Azeem's mentorship has transformed my understanding of mathematics!"</p>
                <footer className="text-end text-muted">- Education Expert</footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
