import React from 'react';
import '../../css/detailedabout.css';
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";
import MissionImage from "../../assets/detailedabout/MissionImage.avif"; 
import VisionImage from "../../assets/detailedabout/VisionImage.avif"; 
import ValueImage from "../../assets/detailedabout/ValueImage.jpg"; 

const DetailedAbout = () => {
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
          }}
        >
          <div className="banner-overlay text-center p-3">
            <h1 className="banner-heading">About Us</h1>
            <div className="breadcrumbs">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i> <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className="fs-5 mb-2 text-dark text-uppercase">About</h3>
              <h2 className="display-5 text-dark mb-4">
                Our journey began with a dream of redefining how the world perceives
                design.
              </h2>
              <button
                type="button"
                className="btn btn-lg btn-success mb-3 mb-md-4 mb-xl-5"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0">
            <div className="col-12 col-lg-6">
              <article>
                <div className="card border-0">
                  <img
                    style={{
                      maxHeight: "300px", // Adjust this height as needed
                      width: "100%", // Ensures the image spans the width of its container
                      objectFit: "cover" // Keeps the image aspect ratio intact without stretching
                    }}
                    loading="lazy"
                    src={VisionImage}
                    alt="Our Vision"
                  />
                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">
                          Our Vision
                        </a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary mb-3">
                      From sleek modernism to timeless elegance, we infuse every
                      creation with a touch of our artistic ingenuity. As a design
                      agency, great design can shape perceptions, inspire action,
                      and leave an indelible mark on the world.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <article>
                <div className="card border-0">
                  <img
                    style={{
                      maxHeight: "300px", // Adjust this height as needed
                      width: "100%", // Ensures the image spans the width of its container
                      objectFit: "cover" // Keeps the image aspect ratio intact without stretching
                    }}
                    loading="lazy"
                    src={ValueImage}
                    alt="Our Approach"
                  />
                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">
                          Our Approach
                        </a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary mb-3">
                      Welcome to our design agency, where creativity knows no bounds
                      and innovation takes center stage. We are a team of dedicated
                      designers, strategists, and visionaries with a passion for
                      transforming ideas into captivating visuals.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

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

        
    </div>
  );
};

export default DetailedAbout;
