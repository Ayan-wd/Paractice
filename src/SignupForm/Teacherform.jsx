import React, { useState } from "react";
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const Teacherform = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([""]);

  const handleSubjectChange = (index, event) => {
    const newSubjects = [...selectedSubjects];
    newSubjects[index] = event.target.value;
    setSelectedSubjects(newSubjects);
  };

  const addSubjectField = () => {
    setSelectedSubjects([...selectedSubjects, ""]);
  };

  return (
    <div id="parentform">
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
            <h1 className="banner-heading">Teacher Registration Form</h1>
            <div className="breadcrumbs">
              <a style={{ color: "white", textDecoration: "none" }} href="/">
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i>{" "}
              <span>Teacher Registration Form</span>
            </div>
          </div>
        </div>
      </div>

      <section className="gradient-custom">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">
              <div className="card shadow-lg" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h3 className="mb-4">Teacher Registration Form</h3>
                  <form>
                    {/* First Name and Last Name */}
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* Email Address and Phone Number */}
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="col-12 mb-4">
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

                    {/* Country */}
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select id="country" className="form-select">
                        <option value="" disabled>
                          Select your country
                        </option>
                        <option value="pakistan">Pakistan</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                      </select>
                    </div>

                    {/* Subject You Can Teach */}
                    <div className="mb-3">
                      <label className="form-label">
                        Subjects You Can Teach
                      </label>
                      {selectedSubjects.map((subject, index) => (
                        <div key={index} className="d-flex align-items-center mb-2">
                          <select
                            value={subject}
                            onChange={(e) => handleSubjectChange(index, e)}
                            className="form-select"
                          >
                            <option value="" disabled>
                              Choose subject
                            </option>
                            <option value="math">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                            <option value="history">History</option>
                          </select>
                          {/* Show "+" button only for the last subject field */}
                          {index === selectedSubjects.length - 1 && (
                            <button
                              type="button"
                              className="btn btn-outline-success ms-2"
                              onClick={addSubjectField}
                            >
                              +
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Profile Picture Upload */}
                    <div className="mb-3">
                      <label htmlFor="profilePicture" className="form-label">
                        Profile Picture
                      </label>
                      <input
                        type="file"
                        id="profilePicture"
                        className="form-control"
                      />
                      <small className="text-muted">Max file size 5 MB</small>
                    </div>

                    {/* Why Should We Consider You */}
                    <div className="mb-3">
                      <label htmlFor="consideration" className="form-label">
                        Why Should We Consider You?
                      </label>
                      <textarea
                        id="consideration"
                        className="form-control"
                        rows="4"
                      ></textarea>
                    </div>

                    {/* PDF of Latest Qualification */}
                    <div className="mb-3">
                      <label htmlFor="qualificationPdf" className="form-label">
                        Latest Qualification (PDF)
                      </label>
                      <input
                        type="file"
                        id="qualificationPdf"
                        className="form-control"
                      />
                      <small className="text-muted">Max file size 10 MB</small>
                    </div>

                    {/* Upload CV */}
                    <div className="mb-3">
                      <label htmlFor="cvFile" className="form-label">
                        Upload CV
                      </label>
                      <input type="file" id="cvFile" className="form-control" />
                      <small className="text-muted">Max file size 50 MB</small>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
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

export default Teacherform; 
