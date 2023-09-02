import React, { useState } from 'react';

const ComponentB = ({ onInputB }) => {
  const [inputB, setInputB] = useState(0);

  const handleInputChange = (event) => {
    setInputB(event.target.value);
    onInputB(event.target.value);
  };

  return (
    <div>
      <label>Input for Component B:</label>
      <input type="number" value={inputB} onChange={handleInputChange} />
    </div>
  );
};

export default ComponentB;
