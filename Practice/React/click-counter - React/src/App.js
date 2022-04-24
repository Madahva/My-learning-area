import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter';

import { useState } from 'react';

function App() {

  const [clicksNumber, setClicksNumber] = useState(0);

  const handleClick = () => {
    setClicksNumber(clicksNumber + 1);
  }

  const resetCounter = () => {
    setClicksNumber(0);
  }

  return (
    <div className='App'>

      <div className='container'>
        <Counter clicksNumber={clicksNumber} />
        <Button 
          text='Click'
          isClickButton={true}
          handleClick={handleClick} />
        <Button 
          text='Reset'
          isClickButton={false}
          handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;