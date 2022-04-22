import React from 'react';
import '../styles/ClearBtn.css'

const ClearBtn = (props) => (

  <div
    className='button__clear'
    onClick={props.clearHandler}>

      {props.children}
      
  </div>

);

export default ClearBtn;