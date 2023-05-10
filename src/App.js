import React, { useState } from 'react';
import MedicineSearchBar from './MedicineSearchBar';
import MedicineList from './MedicineList';

const App = () => {
  const [medicines, setMedicines] = useState([]);

  const handleAddMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  return (
    <div>
      <h1>Medicine Search</h1>
      <MedicineSearchBar onAddMedicine={handleAddMedicine} />
      <MedicineList medicines={medicines} />
    </div>
  );
};

export default App;
