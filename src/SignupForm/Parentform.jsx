import React from "react";
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const Parentform = () => {
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
            <h1 className="banner-heading">Parent Registration Form</h1>
            <div className="breadcrumbs">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i>{" "}
              <span>Parent Registration Form</span>
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
                    Parent Registration Form
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

                    {/* Birthday and Gender */}
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <label htmlFor="birthdayDate" className="form-label">
                          Birthday
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="birthdayDate"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <label className="form-check-label" htmlFor="femaleGender">
                            Female
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            defaultValue="option1"
                          />
                        </div>
                        <div className="form-check form-check-inline">
                          <label className="form-check-label" htmlFor="maleGender">
                            Male
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            defaultValue="option2"
                          />
                        </div>
                        <div className="form-check form-check-inline">
                          <label className="form-check-label" htmlFor="otherGender">
                            Other
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            defaultValue="option3"
                          />
                        </div>
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

                    {/* Submit Button */}
                    <div className="text-center mt-4 pt-2">
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

export default Parentform;
