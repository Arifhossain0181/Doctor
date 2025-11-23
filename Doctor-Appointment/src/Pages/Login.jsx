import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("sign up");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-100">
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center text-gray-700 mb-2 capitalize"
        >
          {state === "sign up" ? "Create Account" : "Login"}
        </motion.h1>

        <p className="text-center text-gray-500 mb-6 capitalize">
          {state === "sign up" ? "Sign up" : "Login"} to book your appointment
        </p>
        
        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          {state === "sign up" && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label className="text-gray-600 font-semibold">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="text-gray-600 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </motion.div>
        </div>

        

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          type="submit"
        >
          {state === "sign up" ? "Create Account" : "Login"}
        </motion.button>

        {/* Toggle */}
        <p className="text-center mt-4 text-gray-600">
          {state === "sign up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() =>
              setState(state === "sign up" ? "login" : "sign up")
            }
            className="text-blue-600 cursor-pointer font-semibold"
          >
            {state === "sign up" ? "Login" : "Sign up"}
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
