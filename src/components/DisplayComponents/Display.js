import React from 'react';

const Display = (props) => {
  return (
    <div className='display'>
      {props.equation}
      {/* Display any props data here */}
    </div>
  );
};

export default Display;
