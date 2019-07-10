import React from 'react';
import './App.css';

function Button(props) {
  const handleClick = () => props.incrementCounter(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

export default Button;
