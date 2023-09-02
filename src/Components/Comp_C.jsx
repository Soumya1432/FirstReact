import React from 'react';

const ComponentC = ({ inputA, inputB }) => {
  const sum = inputA * inputB;

  return (
    <div>
      <p>Sum of Inputs from Component A and Component B: {sum}</p>
    </div>
  );
};

export default ComponentC;