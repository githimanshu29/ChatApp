import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const defaultAvatar =
    "https://ui-avatars.com/api/?name=User&background=random";

  const handleInputChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", signUpData.fullName);
    formData.append("userName", signUpData.userName);
    formData.append("password", signUpData.password);
    formData.append("gender", "male"); // adjust if needed

    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Signup success:", data);
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="w-full max-w-md p-8 shadow-2xl rounded-xl bg-base-100">

        {/* Avatar Upload */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="flex flex-col items-center mb-4">
            <label
              htmlFor="avatar"
              className="relative cursor-pointer group"
            >
              <img
                src={
                  avatar
                    ? URL.createObjectURL(avatar)
                    : defaultAvatar
                }
                alt="Avatar Preview"
                className="object-cover border-4 rounded-full shadow-md w-28 h-28 border-primary"
              />

              <div className="absolute inset-0 flex items-center justify-center transition rounded-full opacity-0 bg-black/40 group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">
                  Change
                </span>
              </div>
            </label>

            <input
              id="avatar"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setAvatar(e.target.files[0])}
            />

            <p className="mt-2 text-xs text-base-content/60">
              Upload profile photo
            </p>
          </div>

          {/* Full Name */}
          <div className="form-control">
            <label className="font-semibold label">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={signUpData.fullName}
              onChange={handleInputChange}
              className="input input-bordered"
              required
            />
          </div>

          {/* Username */}
          <div className="form-control">
            <label className="font-semibold label">Username</label>
            <input
              type="email"
              name="userName"
              placeholder="john@example.com"
              value={signUpData.userName}
              onChange={handleInputChange}
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="font-semibold label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={signUpData.password}
              onChange={handleInputChange}
              className="input input-bordered"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="font-semibold label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={signUpData.confirmPassword}
              onChange={handleInputChange}
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-lg font-bold btn btn-primary"
          >
            {loading ? "Creating Account..." : "SIGN UP"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-base-content/70">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-400 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
