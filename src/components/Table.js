import React, { useState } from 'react';
import TableRow from './TableRow';
import InputControls from './InputControls';

const initialRows = [
  {
    id: 'electronics',
    label: 'Electronics',
    value: 1500,
    children: [
      { id: 'phones', label: 'Phones', value: 800 },
      { id: 'laptops', label: 'Laptops', value: 700 },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture',
    value: 1000,
    children: [
      { id: 'tables', label: 'Tables', value: 300 },
      { id: 'chairs', label: 'Chairs', value: 700 },
    ],
  },
];

const Table = () => {
  const [rows, setRows] = useState(initialRows);

  const updateValue = (id, newValue, isPercentage = false) => {
    const updateRows = (rows) => {
      return rows.map(row => {
        if (row.id === id) {
          const updatedValue = isPercentage ? row.value * (1 + newValue / 100) : newValue;
          return { ...row, value: updatedValue };
        } else if (row.children) {
          const updatedChildren = updateRows(row.children);
          const childrenTotal = updatedChildren.reduce((acc, child) => acc + child.value, 0);
          return { ...row, children: updatedChildren, value: childrenTotal };
        }
        return row;
      });
    };

    setRows(updateRows(rows));
  };

  const calculateGrandTotal = (rows) => {
    return rows.reduce((acc, row) => acc + row.value, 0);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Input</th>
          <th>Allocation %</th>
          <th>Allocation Val</th>
          <th>Variance %</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <TableRow key={row.id} row={row} updateValue={updateValue} />
        ))}
        <tr>
          <td>Grand Total</td>
          <td>{calculateGrandTotal(rows)}</td>
          <td colSpan="4"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
