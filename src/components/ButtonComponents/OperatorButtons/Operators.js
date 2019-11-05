import React, { useState } from 'react';
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsArray] = useState(operators);
  return (
    <div className='operators'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorsArray.map((operator, index) => (
        <OperatorButton
          operator={operator}
          key={index}
          setEquation={props.setEquation}
          equation={props.equation}
        />
      ))}
    </div>
  );
};

export default Operators;
