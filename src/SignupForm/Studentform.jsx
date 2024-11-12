import React from "react";
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const StudentForm = () => {
  return (
    <div>
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
            <h1 className="banner-heading">Student Registration Form</h1>
            <div className="breadcrumbs">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i>{" "}
              <span>Student Registration Form</span>
            </div>
          </div>
        </div>
      </div>

      <section className="gradient-custom">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Student Registration Form
                  </h3>
                  <form>
                    {/* First Name and Last Name */}
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>

                    {/* Email and Phone Number */}
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                        />
                      </div>
                    </div>

                    {/* Current Education and Subject */}
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label" htmlFor="currentEducation">
                          Current Education
                        </label>
                        <input
                          type="text"
                          id="currentEducation"
                          className="form-control form-control-lg"
                          placeholder="FSC(Pre-Eng, Pre Medical), ICS"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <label className="form-label" htmlFor="subject">
                          Subject
                        </label>
                        <select
                          className="form-control form-control-lg"
                          id="subject"
                        >
                          <option value="" disabled>
                            Choose option
                          </option>
                          <option value="Accounting">Accounting</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Physics">Physics</option>
                          <option value="Biology">Biology</option>
                          <option value="Computer">Computer</option>
                          <option value="Statistics">Statistics</option>
                        </select>
                      </div>
                    </div>

                    {/* Consent Check */}
                    <div className="form-check mt-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="consentCheck"
                      />
                      <label className="form-check-label" htmlFor="consentCheck">
                        I agree to the terms and conditions
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 pt-2 text-center">
                      <input
                        className="btn btn-success btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentForm;
