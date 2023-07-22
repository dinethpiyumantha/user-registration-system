import React, { useState } from 'react';

const genders = ['male', 'female', 'other']; // The options for gender selection

const GenderSelector = ({selected=""}) => {
  const [selectedGender, setSelectedGender] = useState(selected);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="inline-flex relative w-full gap-4">
      {genders.map((gender) => (
        <label
          key={gender}
          className={`px-4 py-2 text-center w-full rounded-md cursor-pointer font-semibold capitalize border-2 ${
            selectedGender === gender ? 'border-primary text-primary' : 'border-grayaccent text-grayaccent'
          }`}
          onClick={() => handleGenderChange(gender)}
        >
          {gender}
        </label>
      ))}
    </div>
  );
};

export default GenderSelector;