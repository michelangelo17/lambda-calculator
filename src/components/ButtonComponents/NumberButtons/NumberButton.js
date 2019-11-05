import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button 
      value={props.number}
      className='numButton'
      onClick={e => props.setEquation(props.equation + e.target.value)}
      key={props.key}
    >
      {props.number}
    </button>
    </>
  );
};

export default NumberButton;