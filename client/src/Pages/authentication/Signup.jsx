import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [avatar, setAvatar] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const defaultAvatar =
    "https://ui-avatars.com/api/?name=User&background=gradient&color=fff";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.user);

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
    formData.append("gender", "male");

    if (avatar) {
      formData.append("avatar", avatar);
    }
    
    const result = await dispatch(registerUserThunk(formData));

    if(registerUserThunk.fulfilled.match(result)){
      navigate("/");
    }
    
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-8 overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        <div className="p-8 border shadow-2xl glass-effect rounded-3xl border-white/10">
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-neon">
              <span className="text-4xl">💬</span>
            </div>
            <h1 className="mb-2 text-3xl font-bold gradient-text">
              Join ChatFlow
            </h1>
            <p className="text-slate-400">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col items-center">
              <label htmlFor="avatar" className="relative cursor-pointer group">
                <div className="w-24 h-24 overflow-hidden transition-all border-4 rounded-2xl border-cyan-500/50 shadow-neon group-hover:border-cyan-400">
                  <img
                    src={avatar ? URL.createObjectURL(avatar) : defaultAvatar}
                    alt="Avatar Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition opacity-0 rounded-2xl bg-black/60 group-hover:opacity-100">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-1 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-white">
                      Upload
                    </span>
                  </div>
                </div>
              </label>
              <input
                id="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <p className="mt-2 text-xs text-slate-500">
                Click to upload profile photo
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 transition-colors text-slate-500 group-focus-within:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={signUpData.fullName}
                  onChange={handleInputChange}
                  className="w-full py-3.5 pl-12 pr-4 bg-slate-800/40 border border-white/10 rounded-xl outline-none focus:border-cyan-500/50 focus:bg-slate-800/60 text-slate-200 placeholder-slate-500 transition-all focus:shadow-neon"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 transition-colors text-slate-500 group-focus-within:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  name="userName"
                  placeholder="john@example.com"
                  value={signUpData.userName}
                  onChange={handleInputChange}
                  className="w-full py-3.5 pl-12 pr-4 bg-slate-800/40 border border-white/10 rounded-xl outline-none focus:border-cyan-500/50 focus:bg-slate-800/60 text-slate-200 placeholder-slate-500 transition-all focus:shadow-neon"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 transition-colors text-slate-500 group-focus-within:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={signUpData.password}
                  onChange={handleInputChange}
                  className="w-full py-3.5 pl-12 pr-12 bg-slate-800/40 border border-white/10 rounded-xl outline-none focus:border-cyan-500/50 focus:bg-slate-800/60 text-slate-200 placeholder-slate-500 transition-all focus:shadow-neon"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 transition-colors text-slate-500 hover:text-cyan-400"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">
                Confirm Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 transition-colors text-slate-500 group-focus-within:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={signUpData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full py-3.5 pl-12 pr-4 bg-slate-800/40 border border-white/10 rounded-xl outline-none focus:border-cyan-500/50 focus:bg-slate-800/60 text-slate-200 placeholder-slate-500 transition-all focus:shadow-neon"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-lg transition-all shadow-neon hover:shadow-neon-lg transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold transition-colors text-cyan-400 hover:text-cyan-300"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
