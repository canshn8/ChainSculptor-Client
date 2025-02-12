import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    try {
      console.log(isLogin ? "Logging in with:" : "Registering with:", formData);
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Hesabım | Freelance Platform</title>
      </Helmet>
      <div className="min-h-screen flex items-center bg-white dark:bg-bej justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-input p-8 rounded-lg shadow-lg shadow-[#A89F91]/30 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-darkBrown mb-6">
            {isLogin ? "Login" : "Register"}
          </h2>
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "register"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
            >
              {isLogin ? (
                <div className="mb-4">
                  <label className="block text-darkBrown mb-2">Email or Username</label>
                  <input
                    type="text"
                    name="emailOrUsername"
                    className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none"
                    placeholder="Enter your email or username"
                    value={formData.emailOrUsername}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-darkBrown mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-darkBrown mb-2">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </div>
                </>
              )}
              <div className="mb-4 relative">
                <label className="block text-darkBrown mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              {!isLogin && (
                <div className="mb-6 relative">
                  <label className="block text-darkBrown mb-2">Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>
              )}
              {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#8E806A] hover:bg-[#6B5B4B] text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                {isLogin ? "Login" : "Register"}
              </motion.button>
            </motion.form>
          </AnimatePresence>
          <p className="text-darkBrown mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#6B5B4B] hover:underline ml-2"
            >
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
