import React from 'react';

const MedicineList = ({ medicines }) => {
  return (
    <ul>
      {medicines.map((medicine, index) => (
        <li key={index}>{medicine}</li>
      ))}
    </ul>
  );
};

export default MedicineList;
