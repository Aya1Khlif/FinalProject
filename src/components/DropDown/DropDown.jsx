// import "./DropDown.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./DropDown.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DropDown = ({ name, option1, option2, option3 , option4 , to1 , to2, to3, to4}) => {
  const [display , setDisplay]= useState("none")

  


 
  return (
    <DropdownButton className="rn-button-dropdown" title={name}>
      <ul className="rn-dropdown">
        <Dropdown.Item>
          <Link to={to1}>{option1}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={to2}>{option2}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={to3}>{option3}</Link>
        </Dropdown.Item>
        <Dropdown.Item style={option4?{display:""}:{display:"none"}}>
          <Link  to={to4}>{option4}</Link>
        </Dropdown.Item>
      </ul>
    </DropdownButton>
  );
};

export default DropDown;
