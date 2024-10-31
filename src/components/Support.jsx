import React from "react";

const Support = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "40px",marginTop:'100px' }}>
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8 text-start mb-4">
            <h1 style={{ color: "#343a40", fontSize: "36px", fontWeight: 'bold' }}>
              How You Can Support Us
            </h1>
            <p style={{ color: "#6c757d", fontSize: "18px" }}>
              Donations are always appreciated! The “Haus der Mentoren gGmbH” promotes the following charitable causes:
            </p>

            <ul className="list-unstyled mb-4" style={{ color: "#495057", fontSize: "16px", paddingLeft: "20px" }}>
              <li style={{ listStyleType: "disc" }}>Schooling and public education</li>
              <li style={{ listStyleType: "disc" }}>Professional education, including student support</li>
              <li style={{ listStyleType: "disc" }}>International attitude and tolerance in all areas of culture</li>
              <li style={{ listStyleType: "disc" }}>The concept of international understanding</li>
              <li style={{ listStyleType: "disc" }}>Civic participation</li>
            </ul>

            <p style={{ color: "#6c757d", fontSize: "18px" }}>
              Donations that help us in the implementation and long-term realization of our projects are highly welcome. Would you like to financially participate in the projects of the “Haus der Mentoren gGmbH”?
            </p>
            <p style={{ color: "#6c757d", fontSize: "18px" }}>
              Donate and state the project you would like to participate in on the transfer form:
            </p>

            <strong style={{ color: "#9cd7c8", fontSize: "20px" }}>
              Haus der Mentoren gGmbH <br />
              IBAN: DE82 5007 0024 0326 5717 00 <br />
              BIC: DEUTDEDBFRA
            </strong>

            <p style={{ color: "#6c757d", fontSize: "18px" }}>
              Please note that in order for us to be able to send you a donation receipt, you need to state your address on the transfer form.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            <div className="border p-3" style={{ backgroundColor: "#e9ecef", borderRadius: "8px" }}>
              <h5 style={{ color: "#343a40" }}>Get In Touch</h5>
              <p style={{ color: "#6c757d" }}>For more information on how to support us, feel free to reach out!</p>
              <p style={{ color: "#007bff" }}>Email: info@hausdermentoren.org</p>
              <p style={{ color: "#007bff" }}>Phone: +49 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
