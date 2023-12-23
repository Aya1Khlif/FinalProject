import React from 'react';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddLanguages from '../AddLanguages/AddLanguages';
import Language from '../Language/Language';
import "../LanguagesList/LanguagesList.css"



const LanguagesList = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkillId, setSelectedSkillId] = useState();
  const [showAddInfo, setShowAddInfo] = useState(false);
  const [editedSkill, setEditedSkill] = useState();
  const [text,setText]=useState("Add More Languages");
  function changtext(){
  setText(" ")
  }
  const handleEdit = (id) => {
    setSelectedSkillId(id);
    const skill = skills.find((skill) => skill.id === id);
    setEditedSkill({ ...skill });
  };

  const handleDelete = (id) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
  };

  const handleSave = () => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === editedSkill.id) {
        return editedSkill;
      }
      return skill;
    });
    setSkills(updatedSkills);
    setSelectedSkillId(null);
    setEditedSkill(null);
  };
    const handleAddInfoSubmit = (name, rating) => {
    const newSkill = {
      id: skills.length + 1,
      name,
      rating,
    };
    setSkills([...skills, newSkill]);
    setShowAddInfo(false);
    changtext()
  };
  return (
    <div className='KO-skillslist'>
      <div className='KO-skills-list'>
              <h2 className='KO-main-head'>Languages</h2>
      {showAddInfo && <AddLanguages onSubmit={handleAddInfoSubmit} />}
      {!showAddInfo && (
        <button onClick={() => setShowAddInfo(true)} className='KO-main-button2'>+</button>
      )}
      </div>
      <p className='KO-main-pargrth'>{text}</p>
      {skills.map((skill) => (
        <Language
          key={skill.id}
          id={skill.id}
          name={skill.name}
          rating={skill.rating}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      {selectedSkillId && editedSkill && (
        <div>
          <h4>Edit Date</h4>
          <input
          className='KO-value1'
            type="text"
            value={editedSkill.name}
            onChange={(e) => setEditedSkill({ ...editedSkill, name: e.target.value })}
          />
          <StarRatings
            rating={editedSkill.rating}
            starRatedColor="#ff8500"
            changeRating={(newRating) => setEditedSkill({ ...editedSkill, rating: newRating })}
            numberOfStars={5}
            name="rating"
          />
          <FontAwesomeIcon icon={faFloppyDisk} onClick={handleSave} className='KO-main-button2'/>
        </div>
      )}
    </div>
  );
};
export default LanguagesList;