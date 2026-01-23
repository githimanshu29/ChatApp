import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [SignUpData, setSignUpData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setSignUpData({
      ...SignUpData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Signup Data:", SignUpData);
    // Add your actual login logic here
  };

  return (
    <div className="flex flex-col min-h-screen font-sans md:flex-row bg-base-100">
      

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center flex-1 p-4 sm:p-8 lg:p-16">
        <div className="w-full max-w-md p-6 space-y-8 shadow-2xl bg-base-100 sm:p-10 rounded-xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-base-content">Sign into your account</h1>
            
          </div>

          

        
          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>

          <div className="form-control">
              <label className="label">
                <span className="font-semibold label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full transition-all input input-bordered focus:input-primary"
                name="fullName"
                value={SignUpData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="font-semibold label-text">User Name</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full transition-all input input-bordered focus:input-primary"
                name="userName"
                value={SignUpData.userName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="font-semibold label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full transition-all input input-bordered focus:input-primary"
                name="password"
                value={SignUpData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="font-semibold label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full transition-all input input-bordered focus:input-primary"
                name="confirmPassword"
                value={SignUpData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
               
              </label>
             
            </div> */}

            <button type="submit" className="btn btn-primary w-full text-lg font-bold mt-6 hover:scale-[1.02] transition-transform">
              SIGN IN 
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-sm text-center text-base-content/70">
            Already have an account?{' '}
            <Link to='/login'  className="font-semibold text-blue-400 underline link link-primary link-hover">
            Login
            </Link>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
