import React from 'react';
import './App.css';

function Button(props) {
  return (
    <button onClick={props.incrementCounter}>
      +1
    </button>
  );
}

export default Button;
