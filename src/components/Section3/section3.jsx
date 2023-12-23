import React from "react";
import "./section3.css";
import ContactForm from '../ContactForm/ContactForm';
function Section3() {
  return (
    <>
      <div className="section3">
        <div className="AK3">
          <h1>Lat’s Talk</h1>
          <p
            className="para"
            style={{
              // width: 777,
              height: 24,
              top: 1635,
              left: 184,
            }}
          >
            {" "}
            Do not hesitate to contact us when you encounter any problem
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Section3;
