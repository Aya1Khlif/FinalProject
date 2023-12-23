
import React, { useState } from 'react'
import "../Training/Training.css"
const AddTraining = ({ onSubmit }) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();


  const handleSubmit = () => {
    onSubmit(name1, name2, startDate , endDate);
    setName1('');
    setName2('');
    setStartDate('')
    setEndDate('')
  };





  return (
    <div className='KO-Add-Items'>
      <input
        className='br-value1'
        type="text"
        placeholder="Enter Data"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        className='br-value2'
        type="text"
        placeholder="Enter Data"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <input
        className='br-value3'
        type="date"
        placeholder="Enter DataTime"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        className='br-value3'
        type="date"
        placeholder="Enter DataTime"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleSubmit} className='br-main-button2'>+</button>
    </div>
  );
};
export default AddTraining