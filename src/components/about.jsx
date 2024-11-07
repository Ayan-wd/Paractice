import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import about from '../assets/about/about.avif';
import "../css/About.css";

const About = () => {
  const navigate = useNavigate();

  const [educatorsCount, setEducatorsCount] = useState(0);
  const [graduatesCount, setGraduatesCount] = useState(0);

  const handleClick = () => {
    navigate('/detailedAbout');
  };

  // Function to animate the count
  const animateCount = (target, setter) => {
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(Math.ceil(count));
      }
    }, 20);
  };

  useEffect(() => {
    animateCount(100, setEducatorsCount);
    animateCount(1000, setGraduatesCount);
  }, []);

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center text-dark">About Us</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              We are dedicated to empowering learners through quality education and innovative teaching methods. Our diverse team of educators and specialists work together to create an engaging and inclusive learning environment.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded border" loading="lazy" src={about} alt="About Us"/>
          </div>
          <div className="col-12 col-lg-6 col-xxl-6">
            <div className="row justify-content-lg-end">
              <div className="col-12 col-lg-11">
                <div className="about-wrapper">
                  <p className="lead mb-4 mb-md-5">
                    Our mission is to inspire and equip students with the knowledge and skills they need to succeed in a rapidly changing world. We are committed to fostering a culture of lifelong learning and personal growth through various educational initiatives and community partnerships.
                  </p>
                  <div className="row gy-4 mb-4 mb-md-5">
                    <div className="col-12 col-md-6">
                      <div className="card border border-dark">
                        <div className="card-body p-4">
                          <h3 className="display-5 fw-bold text-success text-center mb-2">{educatorsCount}+</h3>
                          <p className="fw-bold text-center m-0">Qualified Educators</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card border border-dark">
                        <div className="card-body p-4">
                          <h3 className="display-5 fw-bold text-success text-center mb-2">{graduatesCount}+</h3>
                          <p className="fw-bold text-center m-0">Successful Graduates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={handleClick} className="btn btn-success bsb-btn-2xl">
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                  </button>
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
