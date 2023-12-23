
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';

const AddInfo = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const handleSubmit = () => {
      onSubmit(name, rating);
      setName('');
      setRating(0);
    };
    return (
      <div className='KO-Add-Items'>
        <input
        className='KO-value3'
          type="text"
          placeholder="Enter Data"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StarRatings
          rating={rating}
          starRatedColor="#ff8500"
          changeRating={(newRating) => setRating(newRating)}
          numberOfStars={5}
          name="rating"
        />
        <button onClick={handleSubmit} className='KO-main-button2'>+</button>
      </div>
    );
  };
export default AddInfo