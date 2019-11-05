import React from "react";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        value={props.special}
        className='specialButton'
        onClick={e => {
          e.target.value === 'C' ?
          props.setEquation(''):
          props.setEquation(props.equation + e.target.value)}
          }
        key={props.key}
      >
        {props.special}
      </button>
    </>
  );
};

export default SpecialButton;