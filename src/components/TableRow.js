import React, { useState } from 'react';
import InputControls from './InputControls';

const TableRow = ({ row, updateValue }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAllocationPercentage = () => {
    updateValue(row.id, parseFloat(inputValue), true);
    setInputValue('');
  };

  const handleAllocationValue = () => {
    updateValue(row.id, parseFloat(inputValue));
    setInputValue('');
  };

  return (
    <>
      <tr>
        <td>{row.label}</td>
        <td>{row.value}</td>
        <td><input type="number" value={inputValue} onChange={handleInputChange} /></td>
        <td><button onClick={handleAllocationPercentage}>Apply %</button></td>
        <td><button onClick={handleAllocationValue}>Apply Val</button></td>
        <td>{row.variance || 0}%</td>
      </tr>
      {row.children && row.children.map(child => (
        <TableRow key={child.id} row={child} updateValue={updateValue} />
      ))}
    </>
  );
};

export default TableRow;
