import React from "react";
import { Link } from "react-router-dom";
import icon2 from "./img/Mask group.svg";
import "./ButtonNotifcation.css";

const ButtonNotifcation = ({ icon , pofile }) => {
  return (
    <div className="rn-grop-icon">
      <Link className="rn-icon-1" to={pofile}>
        <img src={icon} alt="tr" />
      </Link>

      <Link className="rn-icon-2" to="/">
        <img src={icon2} alt="" />
      </Link>
    </div>
  );
};

export default ButtonNotifcation;
