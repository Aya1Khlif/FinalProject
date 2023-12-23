import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import "./InformationForm.css";
import InfoPerson from "./InfoPerson";

const InformationForm = () => {
  const [name, setName] = useState("Kareem Ahmad");
  const [job, setJob] = useState("Backend Developer");
  const [city, setCity] = useState("Lattakia");
  const [size, setSize] = useState("150 Employees");
  const [date, setDate] = useState("2021-02-18");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("+963 964 516 063");
  const [linked, setLinked] = useState("@taplin_33");
  const [facebook, setFacebook] = useState("@taplin_33");
  const [behance, setBehance] = useState("@taplin_33");
  const [isUpdated, setIsUpdated] = useState(true);
  const [edit1, setEdit1] = useState(false);
  const [edit2, setEdit2] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleJobChange = (e) => {
    setJob(e.target.value);
  };
  const handleJCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleJDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleLinkedChange = (e) => {
    setLinked(e.target.value);
  };
  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };
  const handleBehanceChange = (e) => {
    setBehance(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdated(true);
    if (edit1 === true) {
      setEdit1(false);
    }
    if (edit2 === true) {
      setEdit2(false);
    }
  };

  return (
    <form className="rn-form">
      <div className="rn-form-1">
        <div className="rn-title-form">
          <h3>Basic informaion</h3>
          <button
            className="rn-edit"
            type="button"
            onClick={() => setEdit1((prev) => !prev)}
          >
            <BiEdit />
          </button>
        </div>

        <div className="rn-informtion ">
          <InfoPerson
            name={name}
            edit={edit1}
            isUpdated={isUpdated}
            fun={handleNameChange}
            title="Full Name"
            type="text"
          />
          <InfoPerson
            name={job}
            edit={edit1}
            isUpdated={isUpdated}
            fun={handleJobChange}
            title="Job Title"
            type="text"
          />
        </div>
        <div className="rn-informtion ">
          <InfoPerson
            name={city}
            edit={edit1}
            isUpdated={isUpdated}
            fun={handleJCityChange}
            title="City"
            type="text"
          />
          <InfoPerson
            name={size}
            edit={edit1}
            isUpdated={isUpdated}
            fun={handleSizeChange}
            title="Company Size"
            type="text"
          />
        </div>
        <div className="rn-informtion ">
          <InfoPerson
            name={date}
            edit={edit1}
            isUpdated={isUpdated}
            fun={handleJDateChange}
            title="Date of Birth"
            type="date"
          />

          <InfoPerson
            name={gender}
            edit={edit1}
            isUpdated={isUpdated}
            fun={handleGenderChange}
            title="Gender"
            type="text"
          />
        </div>
      </div>

      <div className="rn-form-2">
        <div className="rn-title-form">
          <h3>Contact Information</h3>
          <button
            className="rn-edit"
            type="button"
            onClick={() => setEdit2((prev) => !prev)}
          >
            <BiEdit />
          </button>
        </div>

        <div className="rn-informtion ">
          <InfoPerson
            name={phone}
            edit={edit2}
            isUpdated={isUpdated}
            fun={handlePhoneChange}
            title="Phone"
            type="text"
          />
          <InfoPerson
            name={linked}
            edit={edit2}
            isUpdated={isUpdated}
            fun={handleLinkedChange}
            title="Linked in"
            type="email"
          />
        </div>
        <div className="rn-informtion ">
          <InfoPerson
            name={facebook}
            edit={edit2}
            isUpdated={isUpdated}
            fun={handleFacebookChange}
            title="Facebook"
            type="email"
          />
          <InfoPerson
            name={behance}
            edit={edit2}
            isUpdated={isUpdated}
            fun={handleBehanceChange}
            title="Behance"
            type="email"
          />
        </div>
      </div>
      <div className="rn-div-btn">
        <button className="rn-save-data" onClick={handleSubmit}>
          Save Information
        </button>
      </div>
    </form>
  );
};

export default InformationForm;
