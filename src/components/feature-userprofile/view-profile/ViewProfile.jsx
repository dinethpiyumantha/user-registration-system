import React, { useState } from "react";
import ChevronIcon from "../../common/icons/ChevronIcon";
import { useFormik } from "formik";
import GenderSelector from "../../common/gender-selector/GenderSelector";
import TopNavigation from "../../common/top-navigation/TopNavigation";
import Footer from "../../common/footer/Footer";
import ProfileButton from "../../common/profile-button/ProfileButton";
import ProfileImageUpload from "./ProfileImageUpload";

export default function ViewProfile() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      county_code: "",
      local_number: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-white w-full min-h-screen pb-5">
      <TopNavigation profileButton={<ProfileButton />} />
      <div className="m-auto w-1/3">
        <div className="mt-10 w-full">
          <div className="w-full inline-flex gap-5 mb-10">
            <div className="w-1/3">
            <ProfileImageUpload />
            </div>
            <div className="w-2/3 pl-4 self-end">
              <h1 className="text-2xl leading-1 font-bold text-left text-black">Welcome</h1>
              <h1 className="text-3xl leading-1 font-bold text-left text-grayaccent">
                Mr. Jone Boker
              </h1>
            </div>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">E Mail Address</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">
              Jone.Doe@gmail.com
            </p>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">Name</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">Jone Boker</p>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">Gender</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">Male</p>
          </div>
          <div className="inline-flex relative w-full gap-4 mb-4">
            <p className="text-black w-full font-semibold text-lg">Date of Birth</p>
            <p className="text-grayaccent w-full font-semibold text-lg text-right">31-07-1989</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
