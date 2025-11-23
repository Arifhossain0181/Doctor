import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full px-5 md:px-16 py-10 text-gray-700">

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-gray-600 pt-5"
      >
        Contact Page
      </motion.h1>

      {/* Main Content */}
      <div className="flex justify-around items-center gap-10 mt-16 flex-col md:flex-row">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="w-full max-w-sm rounded-lg shadow-md"
            src={assets.contact_image}
            alt="Contact"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 text-center md:text-left"
        >
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p>123 Health St, Wellness City</p>
          <p>Email: contact@prescripto.com</p>
          <p>Phone: +1-212-456-7890</p>

          <h3 className="text-xl font-semibold mt-6">
            CAREERS AT PRESCRIPTO
          </h3>

          <button
            className="border-1 mt-2 px-5 py-2 rounded-lg  text-black font-semibold hover:bg-blue-700 transition"
          >
            Explore Jobs
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
