import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-500 text-white rounded-xl flex flex-col md:flex-row justify-between items-center p-6 md:p-10 mt-10 gap-6"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-3 md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold leading-snug"
        >
          Book Appointment <br /> With 100+ Trusted Doctors
        </motion.h1>

        <motion.button
          
          onClick={()=>{navigate('/login'); scrollTo(0,0);}}
           
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 bg-white text-blue-500 font-medium px-6 py-2 rounded-full w-max shadow"
        >
          Create Account
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.img
        src={assets.appointment_img}
        alt="Doctor"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full md:w-1/2 max-w-sm object-contain"
      />
    </motion.div>
  );
};

export default Banner;
