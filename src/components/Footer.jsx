import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import additional icons as needed
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start text-light">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="#" className="me-4 " aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="me-4 " aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="me-4 " aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="me-4 " aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="me-4 " aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </section>
        {/* Section: Links */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                <i class="bi bi-houses-fill"></i>
                  HouseOfMathematics
                </h6>
                <p className='footer-text'>
                  Here you can use rows and columns to organize your footer content.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="">Matric Notes</a>
                </p>
                <p>
                  <a href="#!" className="">Intermediate Notes</a>
                </p>
                <p>
                  <a href="#!" className="">O/A Levels</a>
                </p>
                <p>
                  <a href="#!" className="">News</a>
                </p>
              </div>
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="">Settings</a>
                </p>
                <p>
                  <a href="#!" className="">Orders</a>
                </p>
                <p>
                  <a href="#!" className="">Help</a>
                </p>
              </div>
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className='contact-link'><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                <p  className='contact-link'><i className="fas fa-envelope me-3" /> info@example.com</p>
                <p  className='contact-link'><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                <p  className='contact-link'><i className="fas fa-print me-3" /> + 01 234 567 89</p>
              </div>
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Copyright */}
        <div className="text-center p-4">
          © 2024 Copyright:
          <a className=" fw-bold" href="https://houseofmathematics.com/"> houseofmathematics.com</a>
        </div>
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
