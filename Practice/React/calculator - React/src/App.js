import React from 'react';
import './App.css';
import Button from './componentes/Button'
import Screen from './componentes/Screen';
import ClearBtn from './componentes/ClearBtn';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const computeResult = () => {
    if(input){
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className='calculator__container'>

        <Screen input={input}></Screen>

        <div className='calculator__row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>

        <div className='calculator__row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>

        <div className='calculator__row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>

        <div className='calculator__row'>
          <Button clickHandler={computeResult}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>

        <div className='calculator__row'>

          <ClearBtn clearHandler = {() => setInput('')}>Clear</ClearBtn>

        </div>
      </div>
    </div>
  );
}

export default App;
