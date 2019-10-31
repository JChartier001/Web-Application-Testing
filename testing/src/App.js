import React, { useState } from 'react';
import Display from "./components/Display";
import './App.css';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall]= useState(0);
  const [out, setOut] = useState(0);
  return (
    <div className="App">
      <Display strike={strike} setStrike={setStrike} ball={ball} setBall={setBall} out={out} setOut={setOut}/>
    </div>
  );
}

export default App;
