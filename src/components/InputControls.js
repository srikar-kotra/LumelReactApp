import React from 'react';

const InputControls = ({ inputValue, handleInputChange, handleAllocationPercentage, handleAllocationValue }) => (
  <div>
    <input type="number" value={inputValue} onChange={handleInputChange} />
    <button onClick={handleAllocationPercentage}>Apply %</button>
    <button onClick={handleAllocationValue}>Apply Val</button>
  </div>
);

export default InputControls;