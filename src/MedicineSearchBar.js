import React, { useState } from 'react';

const MedicineSearchBar = ({ onAddMedicine }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    if (searchTerm.trim() !== '') {
      onAddMedicine(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter medicine name"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default MedicineSearchBar;
