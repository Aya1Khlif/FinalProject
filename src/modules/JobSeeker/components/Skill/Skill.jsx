import React from "react";
import StarRatings from "react-star-ratings";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ id, name, rating, onEdit, onDelete }) => {
    const handleEditClick = () => {
      onEdit(id);
    };
  
    const handleDeleteClick = () => {
      onDelete(id);
    };
  
    return (
      <div className="KO-skills-main">
        <h4 className="KO-skills-h4">{name}</h4>
        <StarRatings rating={rating} starRatedColor="orange" numberOfStars={5} name="rating" />
              <div className="KO-main-icon">
                <FontAwesomeIcon icon={faPenToSquare} className="KO-Update" onClick={handleEditClick} />
                <FontAwesomeIcon icon={faTrash} className="KO-Delete" onClick={handleDeleteClick}/>
              </div>
      </div>
    );
  };

export default Skill