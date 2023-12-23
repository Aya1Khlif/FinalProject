import React from "react";
// import StarRatings from "react-star-ratings";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ id, name1, name2, onEdit, onDelete,endDate, startDate }) => {
    const handleEditClick = () => {
      onEdit(id);
    };
  
    const handleDeleteClick = () => {
      onDelete(id);
    };

    return (
    <div className="KO-card-item">
    <div className="KO-main-text">
    <h1 className="KO-heding">{name1}</h1>
    <p className="KO-pargrath">{name2}</p>
    </div>
    <div className="KO-edit">
        <div className="KO-main-icon">
      <FontAwesomeIcon icon={faPenToSquare} className="KO-Update" onClick={handleEditClick}/>
      <FontAwesomeIcon icon={faTrash} className="KO-Delete" onClick={handleDeleteClick}/>
        </div>
        <p className="KO-date">{startDate} To {endDate}</p>
    </div>
  </div>
    );
  };

export default Skill