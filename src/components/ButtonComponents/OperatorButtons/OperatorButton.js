import React from "react";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        value={props.operator.value}
        className='opButton'
        onClick={e => {
          e.target.value === '=' ?
          props.setEquation(
                String(eval(props.equation)).length > 3 &&
                  String(eval(props.equation)).includes(".")
                  ? String(eval(props.equation).toFixed(4))
                  : String(eval(props.equation))
              ):
          props.setEquation(props.equation + e.target.value)}
        }
        key={props.key}
      >
        {props.operator.char}
      </button>
    </>
  );
};

export default OperatorButton;