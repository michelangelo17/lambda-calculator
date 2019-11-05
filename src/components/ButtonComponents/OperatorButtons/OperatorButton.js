import React from 'react';

const OperatorButton = (props) => {
  return (
    <>
      <button
        value={props.operator.value}
        className='opButton'
        onClick={(e) => {
          if (e.target.value === '=') {
            try {
              props.setEquation(
                // eval is not secure, but input is button input, should be fine.
                String(eval(props.equation)).length > 3 &&
                  String(eval(props.equation)).includes('.')
                  ? String(eval(props.equation).toFixed(4))
                  : String(eval(props.equation)),
              );
            } catch (e) {
              console.log(e);
              props.setEquation('ERROR');
            }
          } else {
            props.setEquation(props.equation + e.target.value);
          }
        }}
        key={props.key}
      >
        {props.operator.char}
      </button>
    </>
  );
};

export default OperatorButton;
