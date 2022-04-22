import React from 'react';
import '../styles/Button.css';

function Button(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  return(

    <div
      className = {`button ${isOperator(props.children) ? 'button__operator' : null}`}
      onClick = {() => props.clickHandler(props.children)}>
      {props.children}
    </div>

  );
}

export default Button;