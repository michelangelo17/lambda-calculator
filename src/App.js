import React, { useState } from 'react';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Logo from './components/DisplayComponents/Logo';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

function App() {
  const [equation, setEquation] = useState('');
  return (
    <div className='container'>
      <Logo />
      <div className='App'>
        <Display equation={equation} />
        <Specials setEquation={setEquation} equation={equation} />
        <Numbers setEquation={setEquation} equation={equation} />
        <Operators setEquation={setEquation} equation={equation} />
      </div>
    </div>
  );
}

export default App;
