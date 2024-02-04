// import logo from './logo.svg';
// import './App.css';
// import React , {useState} from "react"

// function App() {
//   let [answer,setAnswer]=useState(0)

//   return (
//     <div className="App">
//       <h1>React Calculator</h1>
//       <input value={answer}></input>
//       <div className="operands">
//         <button>7</button>
//         <button>8</button>
//         <button>9</button>
//         <button>+</button>
//         <button>4</button>
//         <button>5</button>
//         <button>6</button>
//         <button>-</button>
//         <button>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>*</button>
//         <button>C</button>
//         <button>0</button>
//         <button>=</button>
//         <button>/</button>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';

function App() {
  let [input, setInput] = useState('');
  let [answer, setAnswer] = useState(0);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setAnswer(0);
    } else if (value === '=') {
      try {
        setAnswer(eval(input));
      } catch (error) {
        console.log('Error: Invalid expression');
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      setInput(prevInput => prevInput + value);
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div style={{ marginTop: 10 }}>{answer}</div>
      <div className="operands">
        <div className="row">
          <button type="button" onClick={() => handleButtonClick(7)}>7</button>
          <button type="button" onClick={() => handleButtonClick(8)}>8</button>
          <button type="button" onClick={() => handleButtonClick(9)}>9</button>
          <button type="button" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleButtonClick(4)}>4</button>
          <button type="button" onClick={() => handleButtonClick(5)}>5</button>
          <button type="button" onClick={() => handleButtonClick(6)}>6</button>
          <button type="button" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleButtonClick(1)}>1</button>
          <button type="button" onClick={() => handleButtonClick(2)}>2</button>
          <button type="button" onClick={() => handleButtonClick(3)}>3</button>
          <button type="button" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button type="button" onClick={() => handleButtonClick('C')}>C</button>
          <button type="button" onClick={() => handleButtonClick(0)}>0</button>
          <button type="button" onClick={() => handleButtonClick('=')}>=</button>
          <button type="button" onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
