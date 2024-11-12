import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../css/footer.css";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="bg-dark py-5 py-xl-8 py-xxl-9 border-top border-light footerr">
          <div className="container-fluid overflow-hidden">
            <div className="row gy-5 gy-md-0 align-items-md-center">
              <div className="col-xs-12 col-md-7 order-1 order-md-0">
                <div className="copyright text-light ">
                  © 2024. All Rights Reserved.
                </div>
                <div className="credits text-secondary text-center text-md-start mt-2 fs-8">
                  <a
                    href="https://bootstrapbrain.com/"
                    className="link-secondary text-decoration-none"
                  >
                    House Of Mathematics
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-5 order-0 order-md-1">
                <div className="social-media-wrapper">
                  <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
                    <li className="me-3">
                      <a href="#!" className="link-light link-opacity-75-hover">
                        <FaFacebook size={24} />
                      </a>
                    </li>
                    <li className="me-3">
                      <a href="#!" className="link-light link-opacity-75-hover">
                        <FaTwitter size={24} />
                      </a>
                    </li>
                    <li className="me-3">
                      <a href="#!" className="link-light link-opacity-75-hover">
                        <FaYoutube size={24} />
                      </a>
                    </li>
                    <li className="">
                      <a href="#!" className="link-light link-opacity-75-hover">
                        <FaInstagram size={24} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
