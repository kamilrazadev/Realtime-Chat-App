import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const { loading, signup } = useSignUp();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlleGenderChange = (gender) => {
    setFormData({ ...formData, gender: gender });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signup(formData);
  };

  return (
    <div className="py-5 w-full min-h-screen flex justify-center items-center">
      <div className="w-[400px] max-w-[95%] h-fit p-5 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-white text-4xl font-bold text-center">Signup</h1>

        <form className="my-4" onSubmit={handleSignUp}>
          <div className="">
            <label htmlFor="" className="label">
              <span className="text-base label-text">Full Name :</span>
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full input-md"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label">
              <span className="text-base label-text">Username :</span>
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full input-md"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label">
              <span className="text-base label-text">Password :</span>
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full input-md"
            />
          </div>

          <div className="">
            <label htmlFor="" className="label">
              <span className="text-base label-text">Confirm Password :</span>
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full input-md"
            />
          </div>

          <div className="mt-2">
            <GenderCheckbox
              onCheckboxChange={handlleGenderChange}
              selectedGender={formData.gender}
            />
          </div>

          <div className="mt-2">
            <Link to={"/login"} className="hover:underline text-primary">
              Already have an account?
            </Link>
          </div>

          <div>
            <button
              className="btn btn-outline btn-block btn-md mt-4 text-[17px]"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
