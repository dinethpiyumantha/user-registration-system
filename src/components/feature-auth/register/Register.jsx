import React, { useState } from "react";
import VisibilityButton from "../../common/visibility-button/VisibilityButton";
import ChevronIcon from "../../common/icons/ChevronIcon";

export default function Register() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <div className="bg-primary w-full min-h-screen py-5">
      <div className="m-auto w-1/3">
        <div className="text-white flex gap-2">
          <ChevronIcon />
          <h1 className="text-[1.7rem] font-semibold px-2">Create Account</h1>
        </div>
        <div className="py-9 px-6 rounded-lg mt-3 bg-white shadow-lg">
          <h1 className="uppercase text-[1.7rem] font-bold text-center text-primary mb-5">
            ABC Company
          </h1>
          <form>
            <div className="inline-flex gap-4 mb-4">
              <div>
                <label htmlFor="username" className="block font-bold text-black">
                  First Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
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
                  id="username"
                  name="username"
                  className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Email Address
              </label>
              <input
                type="email"
                id="username"
                name="username"
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Mobile Number
              </label>
              <div className="inline-flex gap-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-1/4"
                  placeholder="+94"
                />
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-3/4"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Password
              </label>
              <input
                type="password"
                id="username"
                name="username"
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-black">
                Password
              </label>
              <input
                type="password"
                id="username"
                name="username"
                className="mt-1 p-2 border-2 rounded-[.3rem] border-grayaccent w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary hover:bg-slate-900 text-white font-bold rounded-[.3rem]"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="text-white text-xs px-2 flex justify-between mt-2">
          <span>
            <p>Version 1.0</p>
          </span>
          <span className="font-bold gap-5 flex">
            <a href="#">About Us</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </div>
  );
}
