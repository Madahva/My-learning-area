import React from "react";

function Square(props) {

  const isX = (value)=> {
    if(value === 'X'){

      return true
    }
  } 

  return (
    <button 
    
    className = {`square ${isX(props.value) ? 'X' : 'O'}`}

    onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;