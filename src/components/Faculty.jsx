import React from "react";
import "../css/People.css";
import Prof1 from "../assets/detailedfaculty/prof1.avif";
import Prof2 from "../assets/detailedfaculty/prof2.avif";
import Prof3 from "../assets/detailedfaculty/prof3.avif";
import { useNavigate } from "react-router-dom";

const Faculty = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/faculty");
  };
  
  return (
    <>
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
              Meet Our Faculty
            </h2>
            <p className="display-5 mb-4 mb-md-5 text-center">
              Our experienced faculty members bring expertise and passion to their fields, fostering a rich learning experience.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-4">
            <div className="card border-0">
              <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src={Prof1}
                    alt="Dr. Flora Nyra"
                    style={{ width: "415px", height: "415px", objectFit: "cover" }}
                  />
                </a>
              </figure>
              <div className="card-body border bg-white p-4">
                <h2 className="card-title h4 fw-bold mb-3">Dr. Flora Nyra</h2>
                <p className="card-text text-secondary">
                  Specializes in curriculum design and innovative teaching methods to make mathematics engaging and accessible for students at all levels.
                </p>
              </div>
              <div className="card-footer border border-top-0 bg-white p-4">
                <ul className="nav mb-0 bsb-nav-sep">
                  <li className="nav-item text-secondary">
                    <span className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="bi bi-lightbulb text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                      </svg>
                      <span className="ms-2 fs-6">Head of Curriculum Design</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="card border-0">
              <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src={Prof2}
                    alt="Mr. James Levi"
                    style={{ width: "415px", height: "415px", objectFit: "cover" }}
                  />
                </a>
              </figure>
              <div className="card-body border bg-white p-4">
                <h2 className="card-title h4 fw-bold mb-3">Mr. James Levi</h2>
                <p className="card-text text-secondary">
                  Expert in data science and analytics, guiding students in hands-on learning with real-world projects and statistical models.
                </p>
              </div>
              <div className="card-footer border border-top-0 bg-white p-4">
                <ul className="nav mb-0 bsb-nav-sep">
                  <li className="nav-item text-secondary">
                    <span className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="bi bi-layers text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                      </svg>
                      <span className="ms-2 fs-6">Data Science Instructor</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="card border-0">
              <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src={Prof3}
                    alt="Ms. Taytum Elia"
                    style={{ width: "415px", height: "415px", objectFit: "cover" }}
                  />
                </a>
              </figure>
              <div className="card-body border bg-white p-4">
                <h2 className="card-title h4 fw-bold mb-3">Ms. Taytum Elia</h2>
                <p className="card-text text-secondary">
                  Dedicated to digital design and media, she enhances the learning experience through innovative visual storytelling and instructional design.
                </p>
              </div>
              <div className="card-footer border border-top-0 bg-white p-4">
                <ul className="nav mb-0 bsb-nav-sep">
                  <li className="nav-item text-secondary">
                    <span className="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        className="bi bi-brush text-success"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534l-.658 1.354a1.5 1.5 0 0 1-2.511.26l-1.175-1.174a1.5 1.5 0 0 1 .26-2.511l1.354-.658a6.067 6.067 0 0 1 1.534-2.373C7.692 4.786 12.431 1.573 15.86.042a.5.5 0 0 1 .584.079zM4.404 13.731l.724.724a.5.5 0 0 0 .835-.086l.74-1.52-1.694-1.694-1.52.74a.5.5 0 0 0-.086.835l.724.724z" />
                      </svg>
                      <span className="ms-2 fs-6">Digital Design Specialist</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-success mt-5 mx-auto d-block" onClick={handleClick}>
        View All Faculty
      </button>
    </section>
    </>
  );
};

export default Faculty;
