import React, { useState } from 'react';

const ComponentA = ({ onInputA }) => {
  const [inputA, setInputA] = useState(0);

  const handleInputChange = (event) => {
    setInputA(event.target.value);
    onInputA(event.target.value);
  };

  return (
    <div>
      <label>Input for Component A:</label>
      <input type="number" value={inputA} onChange={handleInputChange} />
    </div>
  );
};

export default ComponentA;
