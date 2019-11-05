import React, { useState } from 'react';
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = (props) => {
  const [operatorsArray] = useState(operators);
  return (
    <div className='operators'>
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
