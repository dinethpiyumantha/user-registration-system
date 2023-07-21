import React, { useState } from "react";
import ChevronIcon from "../../common/icons/ChevronIcon";
import { useFormik } from "formik";
import EditProfileValidationSchema from "./validationSchema";
import GenderSelector from "../../common/gender-selector/GenderSelector";
import TopNavigation from "../../common/top-navigation/TopNavigation";
import Footer from "../../common/footer/Footer";

export default function EditProfile() {
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
    validationSchema: EditProfileValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <div className="bg-white w-full min-h-screen pb-5">
      <TopNavigation />
      <div className="m-auto w-1/3">
        <div className="py-9 px-6 rounded-lg mt-3">
          <h1 className="text-2xl font-bold text-center text-black mb-5">
            Edit Profile
          </h1>
          <form onSubmit={formik.handleSubmit} className="block">
            <div className="mb-4">
              <div className="inline-flex gap-4">
                <div>
                  <label htmlFor="username" className="block font-bold text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
                    placeholder="Jone"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block font-bold text-black">
                    Second Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
                    placeholder=""
                  />
                </div>
              </div>
              {formik.errors.first_name ? (
                <span className="text-red-700 text-xs block">{formik.errors.first_name}</span>
              ) : null}
              {formik.errors.last_name ? (
                <span className="text-red-700 text-xs block">{formik.errors.last_name}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
              {formik.errors.email ? (
                <span className="text-red-700 text-xs block">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Date of Birth
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
              {formik.errors.email ? (
                <span className="text-red-700 text-xs block">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Gender
              </label>
              <GenderSelector />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary hover:bg-slate-900 text-white font-bold rounded-[.3rem]"
            >
              Update Profile Details
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
