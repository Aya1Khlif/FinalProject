import React from "react";

import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Training/Training.css"

const TrainDelete = ({ id, name1, name2, onEdit, onDelete,  startDate ,endDate}) => {
    const handleEditClick = () => {
      onEdit(id);
    };

    const handleDeleteClick = () => {
      onDelete(id);
    };

   
    return (
    //   <div className="br-skills-main">
    //     <h1>{name1}</h1>
    //     <p>{name2}</p>
    //           <div className="br-main-icon">
    //             <FontAwesomeIcon icon={faPenToSquare} className="br-Update" onClick={handleEditClick} />
    //             <FontAwesomeIcon icon={faTrash} className="br-Delete" onClick={handleDeleteClick}/>
    //           </div>
    //   </div>

     
    <div className="br-card-item">
    <div className="br-main-text">
    <h1 className="br-heding">{name1}</h1>
    <p className="br-pargrath">{name2}</p>
    </div>
    {/* -------------------edit------------------------ */}
    <div className="br-edit">
        <div className="br-main-icon">
      <FontAwesomeIcon icon={faPenToSquare} className="br-Update" onClick={handleEditClick}/>
      <FontAwesomeIcon icon={faTrash} className="br-Delete" onClick={handleDeleteClick}/>
        </div>
        {/* -------------------data------------------------ */}
        <p className="br-date"> {startDate} To {endDate} </p>
        
    </div>
  </div>
    );
  };

export default TrainDelete