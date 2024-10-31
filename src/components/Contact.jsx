import React from "react";
import "../css/forms.css";

const Contact = () => {
  return (
    <div
      className="form-container"
      style={{ backgroundColor: "black", padding: "40px",marginTop:'100px' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="top">
              <h1 className="form-title" style={{ color: "white" }}>
               <strong> Join the Team</strong>
              </h1>
              {/* <p className="form-text" style={{ color: "white" }}>
                The House of Mentors is located in the historical „Villa Bonn“,
                in the heart of Frankfurt.
              </p> */}
              {/* <p className="form-text" style={{ color: "white" }}>
                Here the annual award ceremonies of the „World Student
                Challenge“ take place, to which we cordially invite all our
                mentors. Please contact us and become a mentor.
              </p> */}
            </div>
            <div className="form-body">
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h3 className="form-subtitle">Register Today</h3>
                    <p className="form-subtext">Fill in the data below.</p>
                    <form className="requires-validation" noValidate>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mail Address"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <select className="form-select" required>
                          <option selected disabled value="">
                            Position
                          </option>
                          <option value="jweb">Junior Web Developer</option>
                          <option value="sweb">Senior Web Developer</option>
                          <option value="pmanager">Project Manager</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Gender:</label>
                        <div className="d-flex justify-content-start">
                          <input
                            type="radio"
                            className="btn-check"
                            name="gender"
                            id="male"
                            autoComplete="off"
                            required
                          />
                          <label
                            className="btn btn-outline-secondary me-2"
                            htmlFor="male"
                          >
                            Male
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="gender"
                            id="female"
                            autoComplete="off"
                            required
                          />
                          <label
                            className="btn btn-outline-secondary me-2"
                            htmlFor="female"
                          >
                            Female
                          </label>
                        </div>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="invalidCheck"
                          required
                        />
                        <label className="form-check-label">
                          I confirm that all data are correct
                        </label>
                      </div>

                      <div className="form-button mt-3">
                        <button
                          className="btn btn-primary mb-2 me-2"
                          id="submit"
                          type="submit"
                        >
                          Register
                        </button>
                        <button
                          className="btn btn-primary mb-2"
                          id="submit-mentoring"
                          type="submit"
                        >
                          Send Request for Mentoring
                        </button>
                      </div>
                      {/* <p className="form-info">
                        Please complete and sign the form. Return it by mail or
                        e-mail to: m.weiss@haus-der-mentoren.de
                      </p> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
