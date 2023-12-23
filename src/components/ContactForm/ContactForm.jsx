import React, { Component } from "react";
import "./ContactForm.css";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, subject, message } = this.state;
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  render() {
    return (
      <>
     
      <div className="form2">
          <div className="Ak">
            <div className="inputak row ">
              <div className="lable1 col-lg-6">
                <label htmlFor="email" className="form-label">
                  {" "}
                  <input
                    type="email"
                    className=" AKinput form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Enter Your Email"
                    style={{
                      border: "none",
                      borderBottom: "1px solid #000",
                      borderRadius: 0,
                      width:380,
                      height:65,
                      top:1691,
                      left:287,
                      paddingTop:43,
                      paddingLeft:6
                    }}
                  />
                </label>
              </div>

              <div className="lable2 col-lg-6 ">
                <label htmlFor="subject" className="form-label">
                  <input
                    type="text"
                    className=" AKinput form-control "
                    id="subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleChange}
                    placeholder="Message Subject "
                    style={{
                      border: "none",
                      borderBottom: "1px solid #000",
                      borderRadius: 0,
                      outline: "none",
                      width:380,
                      height:65,
                      top:1691,
                      left:287,
                      paddingTop:43,
                      paddingLeft:6
                      
                    }}
                  />
                </label>
              </div>
            </div>
            <label
              htmlFor="message "
              className="form-label d-flex justify-content-start "
            >
              <div className="AKP5 mt-3  ">
                <p> Your Message </p>
              </div>
            </label>
            <textarea
              className=" AK form-control"
              id="message"
              name="message"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Write Your Message Here"
            ></textarea>
          </div>
        </div>
        <div className=" b container  text-center">
          <button
            type="submit"
            className="btn btn-dark text-white  mb-3 mt-3"
            style={{
              width: 190,
              height: 40,
              top: 2046,
              left: 563,
              borderradius: 4     
            }
            }
          >
            SUBMIT
          </button>
        </div>
       
      </>
    );
  }
}

export default ContactForm;
