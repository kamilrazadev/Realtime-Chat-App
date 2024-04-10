import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { loading, login } = useLogin();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formData);
  };

  return (
    <div className="py-5 w-full min-h-screen flex justify-center items-center">
      <div className="w-[400px] max-w-[95%] h-fit p-5 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-white text-4xl font-bold text-center">Login</h1>

        <form className="my-4" onSubmit={handleLogin}>
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

          <div className="mt-4">
            <Link to={"/signup"} className="hover:underline text-primary">
              Don't have an account?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-outline btn-block btn-md mt-4 text-[17px]"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
