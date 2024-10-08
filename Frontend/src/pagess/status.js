import React, { useState } from 'react';

const Status = ({ animalName, isAdopted }) => {
  return (
    <div>
      <h2>{animalName}</h2>
      <p>Status: {isAdopted ? 'มีคนรับไปแล้ว' : 'ยังไม่มีคนรับ'}</p>
    </div>
  );
};

const AnimalStatus = () => {
  const [animals, setAnimals] = useState([
    { id: 1, name: 'Dog A', isAdopted: false },
    { id: 2, name: 'Cat B', isAdopted: true },
    { id: 3, name: 'Bird C', isAdopted: false },
  ]);

  return (
    <div>
      {animals.map((animal) => (
        <AnimalStatus 
          key={animal.id} 
          animalName={animal.name} 
          isAdopted={animal.isAdopted} 
        />
      ))}
    </div>
  );
};

export default Status;
