import React from 'react';
import "../Training/Training.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../AddTraining/AddTraining'
import '../TrainDelete/TrainDelete'
import TrainDelete from '../TrainDelete/TrainDelete';
import AddTraining from '../AddTraining/AddTraining';

const Training = () => {
  const [Experience, setExperience] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState();
  const [showAddExp, setShowAddExp] = useState(false);
  const [editedExperience, setEditedExperience] = useState();
  const [text,setText]=useState("Add More Experience to increase your chance of getting a job");
  function changtext(){
  setText(" ")
  }

  /* the function edit  */
  const handleEdit = (id) => {
    setSelectedExperience(id);
    const skill = Experience.find((Experience) => Experience.id === id);
    setEditedExperience({ ...skill });
  };
  /* the function delete  */
  const handleDelete = (id) => {
    const updatedSkills = Experience.filter((Experience) => Experience.id !== id);
    setExperience(updatedSkills);
  };

  /* the function save  */
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
    const handleAddInfoSubmit = (name1, name2, startDate,endDate) => {
    const newExperience = {
      id: Experience.length + 1,
      name1,
      name2,
      startDate,
      endDate,
    };
    setExperience([...Experience, newExperience]);
    setShowAddExp(false);
    changtext()
  };

  /* ---------------------------------- */
  return (
    <div className='br-main-contener'>
      <div className='br-skills'>
              <h2 className='br-main-head'>Certificates/Training Courses</h2>
            {showAddExp && <AddTraining onSubmit={handleAddInfoSubmit} />}
              {!showAddExp && (
         <button onClick={() => setShowAddExp(true)} className='br-main-button2'>+</button>
      )}
      </div>
      {Experience.map((Experience) => (
        <TrainDelete
          key={Experience.id}
          id={Experience.id}
          name1={Experience.name1}
          name2={Experience.name2}
          onEdit={handleEdit}
          onDelete={handleDelete}
          startDate={Experience.startDate}
          endDate={Experience.endDate}
        />
      ))}
      <p className='br-main-pargrth'>{text}
        </p>
      {selectedExperience && editedExperience && (
        <div>
          <h4 className='br-Editt'>Edit Date</h4>
          <input
          className='br-value1'
            type="text"
            value={editedExperience.name1}
            onChange={(e) => setEditedExperience({ ...editedExperience, name1: e.target.value })}
          />
          <input
          className='br-value2'
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
          <FontAwesomeIcon icon={faFloppyDisk} onClick={handleSave} className='br-main-button2'/>
        </div>
      )}
    </div>
  );
};
export default Training;