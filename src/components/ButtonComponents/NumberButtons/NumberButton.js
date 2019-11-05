import React from 'react';

const NumberButton = (props) => {
  return (
    <>
      <button
        value={props.number}
        className='numButton'
        onClick={(e) => props.setEquation(props.equation + e.target.value)}
        key={props.key}
      >
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;
