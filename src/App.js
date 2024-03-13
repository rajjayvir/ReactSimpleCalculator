import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const calculation = new Function(`return (${input})`);
        setResult(calculation());
        setResult(eval(input)); // Use eval() here
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear input and result
      setInput('');
      setResult('');
    } else {
      // Append value to input
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <input className="input" type="text" value={input} readOnly />
      <input className="result" type="text" value={result} readOnly />
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '='].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        {/* Division button */}
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
