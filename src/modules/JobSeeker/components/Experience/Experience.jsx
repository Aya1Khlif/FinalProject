import React from 'react';
import AddExp from '../AddExp/AddExp';
import Exp from '../Exp/Exp';
import "../Experience/Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Experience = () => {
  const [Experience, setExperience] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState();
  const [showAddExp, setShowAddExp] = useState(false);
  const [editedExperience, setEditedExperience] = useState();
  const [text,setText]=useState("Add More Experience to increase your chance of getting a job");
  function changtext(){
setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")
  }
  const handleEdit = (id) => {
    setSelectedExperience(id);
    const skill = Experience.find((Experience) => Experience.id === id);
    setEditedExperience({ ...skill });
  };

  const handleDelete = (id) => {
    const updatedSkills = Experience.filter((Experience) => Experience.id !== id);
    setExperience(updatedSkills);
  };

  const handleSave = () => {
    const updatedExperience = Experience.map((Experience) => {
      if (Experience.id === editedExperience.id) {
        return editedExperience;
      }
      return Experience;
    });
    setExperience(updatedExperience);
    setSelectedExperience(null);
    setEditedExperience(null);
  };
    const handleAddInfoSubmit = (name1, name2,endDate,startDate) => {
    const newExperience = {
      id: Experience.length + 1,
      name1,
      name2,
      endDate,
      startDate
    };
    setExperience([...Experience, newExperience]);
    setShowAddExp(false);
    changtext()
  };
 
  return (
    <div className='KO-main-contener'>
      <div className='KO-skills-list'>
              <h2 className='KO-main-head'>Experience</h2>
      {showAddExp && <AddExp onSubmit={handleAddInfoSubmit} />}
      {!showAddExp && (
        <button onClick={() => setShowAddExp(true)} className='KO-main-button2'>+</button>
      )}
      </div>
      {Experience.map((Experience) => (
        <Exp
          key={Experience.id}
          id={Experience.id}
          name1={Experience.name1}
          name2={Experience.name2}
          onEdit={handleEdit}
          onDelete={handleDelete}
          endDate={Experience.endDate}
          startDate={Experience.startDate}
        />
      ))}
      <p className='KO-main-pargrth'>{text}</p>
      {selectedExperience && editedExperience && (
        <div>
          <h4>Edit Date</h4>
          <input
          className='KO-value1'
            type="text"
            value={editedExperience.name1}
            onChange={(e) => setEditedExperience({ ...editedExperience, name1: e.target.value })}
          />
          <input
          className='KO-value2'
            type="text"
            value={editedExperience.name2}
            onChange={(e) => setEditedExperience({ ...editedExperience, name2: e.target.value })}
          />
            <input
          className='br-value1'
            type="date"
            value={editedExperience.startDate}
            onChange={(e) => setEditedExperience({ ...editedExperience,  startDate: e.target.value })}
          />
          <input
          className='br-value2'
            type="date"
            value={editedExperience.endDate}
            onChange={(e) => setEditedExperience({ ...editedExperience, endDate: e.target.value })}
          />
          <FontAwesomeIcon icon={faFloppyDisk} onClick={handleSave} className='KO-main-button2'/>
        </div>
      )}
    </div>
  );
};
export default Experience;


