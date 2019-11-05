import React, { useState } from 'react';
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialsArray] = useState(specials);
  return (
    <div>
      {specialsArray.map((special, index) => (
        <SpecialButton
          special={special}
          key={index}
          setEquation={props.setEquation}
          equation={props.equation}
        />
      ))}
    </div>
  );
};

export default Specials;
