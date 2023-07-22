import React, { useState } from 'react';
import DefaultImage from "../../../assets/default_profile_icon.png"
import PlusCircleIcon from '../../common/icons/PlusCircleIcon';


const ProfileImageUpload = ({image=DefaultImage}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      <img
        src={selectedImage || image}
        alt="Uploaded"
        className="w-full h-full object-cover rounded-full"
      />
      <label
        htmlFor="fileInput"
        className="absolute right-0 bottom-0 bg-lightgray text-black hover:bg-primary hover:text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
      >
        <input
          type="file"
          id="fileInput"
          className="sr-only"
          onChange={handleImageChange}
        />
        <PlusCircleIcon />
      </label>
    </div>
  );
};

export default ProfileImageUpload;
