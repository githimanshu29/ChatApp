import React, { useState } from "react";
import { Link,  } from "react-router-dom";

const LoginPage = () => {
  // const navigate = useNavigate();

  // 1️⃣ State for login credentials
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  // 2️⃣ State for UI feedback
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // 3️⃣ Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4️⃣ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // ❗ VERY IMPORTANT

  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="w-full max-w-md p-8 shadow-2xl rounded-xl bg-base-100">

        <h1 className="mb-6 text-3xl font-bold text-center">
          Sign into your account
        </h1>

        {/* {error && (
          <p className="mb-4 font-semibold text-center text-red-500">
            {error}
          </p>
        )} */}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <div className="form-control">
            <label className="font-semibold label">User Name</label>
            <input
              type="email"
              name="userName"
              value={loginData.userName}
              onChange={handleInputChange}
              className="w-full input input-bordered"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="font-semibold label">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={(e)=>handleInputChange(e)}//simple writing handleInputChange is also correct
              className="w-full input input-bordered"
              placeholder="********"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
           
            className="w-full text-lg btn btn-primary"
          >
          
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
