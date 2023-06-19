import React, { useState } from 'react';

const CalculateAge = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (dob) {
      const dobDate = new Date(dob);
      const today = new Date();
      const diff = today - dobDate;
      const ageDate = new Date(diff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    } else {
      setAge('');
    }
  };

  const handleInputChange = (event) => {
    setDob(event.target.value);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <div className='container'>
        <label>Enter your date of birth</label>
        <input className='dob' type="date" value={dob} onChange={handleInputChange} />
        <button onClick={calculateAge} className='button'>Calculate Age</button>
        {age && <p>You are {age} years old</p>}
      </div>
    </div>
  );
};

export default CalculateAge;
