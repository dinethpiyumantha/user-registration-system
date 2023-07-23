import React, { useEffect, useState } from 'react';

const genders = ['male', 'female', 'other']; // The options for gender selection

const GenderSelector = ({onChange=(e)=>{}, selected=""}) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  useEffect(() => {
    if(!(selected===selectedGender))
      setSelectedGender(selected);
  }, [selected])

  useEffect(()=> {
    onChange({value: selectedGender});
  }, [selectedGender, onChange])

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