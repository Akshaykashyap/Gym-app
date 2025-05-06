import React, { useState } from 'react';

const dietData = {
  veg: {
    type: 'veg',
    plan: 'Breakfast: Oats & banana\nLunch: Rice, dal, salad\nDinner: Roti & vegetables',
  },
  'non-veg': {
    type: 'non-veg',
    plan: 'Breakfast: Eggs & toast\nLunch: Chicken & rice\nDinner: Fish & salad',
  },
};

export default function Diets() {
  const [dietType, setDietType] = useState('veg');

  const handleClick = (type) => setDietType(type);

  const selectedDiet = dietData[dietType];

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => handleClick('veg')}
          className={`px-4 py-2 rounded ${dietType === 'veg' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          Veg
        </button>
        <button
          onClick={() => handleClick('non-veg')}
          className={`px-4 py-2 rounded ${dietType === 'non-veg' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
        >
          Non-Veg
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md max-w-xl mx-auto">
        <h3 className="text-xl font-semibold capitalize">{selectedDiet.type} Diet Plan</h3>
        <pre className="mt-2 text-gray-700 whitespace-pre-wrap">{selectedDiet.plan}</pre>
      </div>
    </div>
  );
}
