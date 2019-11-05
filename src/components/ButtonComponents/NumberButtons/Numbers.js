import React, { useState } from 'react';
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = (props) => {
  const [numbersArray] = useState(numbers);
  return (
    <div>
      {numbersArray.map((number, index) => (
        <NumberButton
          number={number}
          key={index}
          setEquation={props.setEquation}
          equation={props.equation}
        />
      ))}
    </div>
  );
};

export default Numbers;
