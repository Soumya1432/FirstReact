import React, { useState } from 'react';
import ComponentA from './Components/Comp_A';
import ComponentB from './Components/Comp_B';
import ComponentC from './Components/Comp_C';
import './App.css';
const App = () => {
  const [inputFromA, setInputFromA] = useState(0);
  const [inputFromB, setInputFromB] = useState(0);

  return (
    <div>
      <ComponentA onInputA={setInputFromA} />
      <ComponentB onInputB={setInputFromB} />
      <ComponentC inputA={inputFromA} inputB={inputFromB} />
    </div>
  );
};

export default App;