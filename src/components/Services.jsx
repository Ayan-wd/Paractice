import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services');
  };

  return (
    <>
      <section className="bsb-service-6 py-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <h3 className="fs-6 mb-2 text-secondary text-center text-uppercase">
                What We Offer
              </h3>
              <h2 className="display-5 mb-4 mb-md-5 text-center text-dark">
                Empowering Students with Comprehensive Mathematics Support
              </h2>
              <hr className="w-50 mx-auto mb-4 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-0 gx-xxl-5">
            <div className="col-12 col-md-4">
              <div className="card bg-transparent border-success rounded-0">
                <div className="card-body">
                  <i className="fas fa-chalkboard-teacher text-success mb-4" style={{ fontSize: '32px' }}></i>
                  <h3 className="h2 mb-4">Online All Subject Classes</h3>
                  <p className="mb-4 text-secondary">
                    Our interactive online math classes are designed to help students build a strong foundation in mathematics, covering topics from basic arithmetic to advanced calculus.
                  </p>
                  <a
                    href="#!"
                    className="fw-bold text-decoration-none link-success"
                    onClick={handleClick}
                  >
                    Learn More
                    <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card bg-transparent border-success rounded-0">
                <div className="card-body">
                  <i className="fas fa-chart-line text-success mb-4" style={{ fontSize: '32px' }}></i>
                  <h3 className="h2 mb-4">Assessment & Progress Tracking</h3>
                  <p className="mb-4 text-secondary">
                    We provide regular assessments to track student progress, identify areas for improvement, and personalize learning strategies for maximum success.
                  </p>
                  <a
                    href="#!"
                    className="fw-bold text-decoration-none link-success"
                    onClick={handleClick}
                  >
                    Learn More
                    <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card bg-transparent border-success rounded-0">
                <div className="card-body">
                  <i className="fas fa-medal text-success mb-4" style={{ fontSize: '32px' }}></i>
                  <h3 className="h2 mb-4">Competitive Exam Preparation</h3>
                  <p className="mb-4 text-secondary">
                    Our specialized tutoring helps students prepare for competitive exams, from standardized tests to math olympiads, with expert guidance and structured practice.
                  </p>
                  <a
                    href="#!"
                    className="fw-bold text-decoration-none link-success"
                    onClick={handleClick}
                  >
                    Learn More
                    <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
