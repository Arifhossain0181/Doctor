import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";
const Header = () => {
    const headerStyle={
        backgroundImage: 'radial-gradient(circle at center, #F4F7FF 0%, #DDE8FA 100%)'
    }
  return (
    <section className="w-full bg-[#5666FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-4xl md:text-4xl font-bold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <div className="flex items-center gap-4 mt-6">
            {/* Small sample avatars */}
            <div className="flex">
             <img src={assets.group_profiles} alt="" />
            </div>

            <p className="text-white/90 text-sm max-w-xs">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>

          <a href="#sPeciality" className="mt-8 bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 duration-200 flex items-center gap-2">
            Book appointment →
          </a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end items-end"
        >
          <img
            src={assets.header_img}
            alt="Doctors"
            className="w-full max-w-lg object-contain object-bottom bottom-0 h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
