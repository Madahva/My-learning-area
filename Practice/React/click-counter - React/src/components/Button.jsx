import React from 'react';
import '../styles/Button.css';

function Button({ text, isClickButton, handleClick }) {
  return (
    <button
      className={isClickButton ? 'button__click' : 'button__reset'}
      onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;