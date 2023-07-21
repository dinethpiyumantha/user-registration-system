import React from "react";
import ProfileButton from "../profile-button/ProfileButton";

export default function TopNavigation({profileButton}) {
  return (
    <div className="w-full flex justify-between bg-lightgray pt-4 px-6 pb-2">
      <h1 className="uppercase text-[1.7rem] font-bold text-center text-primary">ABC Company</h1>
      <div className="inline-flex gap-3">
        <h1 className="text-2xl font-semibold text-center text-grayaccent">Mr. John Boker</h1>
        {profileButton? profileButton : null}
      </div>
    </div>
  );
}
