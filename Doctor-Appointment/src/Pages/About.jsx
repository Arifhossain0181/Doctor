import React from "react";
import { assets } from "../assets/assets";
const AboutUs = () => {
  return (
    <div className="w-full px-5 md:px-16 py-10 text-gray-700">

      {/* ABOUT US Title */}
      <h2 className="text-center text-3xl font-bold mb-10">
        ABOUT <span className="text-black">US</span>
      </h2>

      {/* Main Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Image */}
        <img
          src={assets.about_image}
          alt="Doctors"
          className="w-full rounded-lg object-cover"
        />

        {/* Text */}
        <div>
          <p className="leading-relaxed mb-4">
            Welcome to Prescripto, your trusted partner in managing your 
            healthcare needs conveniently and efficiently. At Prescripto, 
            we understand the challenges individuals face when it comes to 
            scheduling doctor appointments and managing their health records.
          </p>

          <p className="leading-relaxed mb-4">
            Prescripto is committed to excellence in healthcare technology. 
            We continuously strive to enhance our platform, integrating the 
            latest advancements to improve user experience and deliver 
            superior service. Whether you're booking your first appointment 
            or managing ongoing care, Prescripto is here to support you 
            every step of the way.
          </p>

          <h3 className="font-bold mt-4 mb-2 text-gray-900">Our Vision</h3>
          <p className="leading-relaxed">
            Our vision at Prescripto is to create a seamless healthcare 
            experience for every user. We aim to bridge the gap between 
            patients and healthcare providers, making it easier for you to 
            access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <h2 className="mt-16 mb-8 text-xl font-bold">
        WHY <span className="text-black">CHOOSE US</span>
      </h2>

      {/* Boxes */}
      <div className="grid md:grid-cols-3 gap-4 ">

        {/* Box 1 */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow text-black hover:text-blue-500 transition-all duration-300 cursor-pointer">
          <h4 className="font-bold mb-2 ">EFFICIENCY:</h4>
          <p className="text-sm leading-relaxed ">
            Streamlined appointment scheduling that fits your busy lifestyle.
          </p>
        </div>

        {/* Box 2 */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow text-black hover:text-blue-500 transition-all duration-300 cursor-pointer">
          <h4 className="font-bold mb-2">CONVENIENCE:</h4>
          <p className="text-sm leading-relaxed">
            Access to a network of trusted healthcare professionals in your area.
          </p>
        </div>

        {/* Box 3 */}
        <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow text-black hover:text-blue-500 transition-all duration-300 cursor-pointer">
          <h4 className="font-bold mb-1 border-b-2 border-transparent md:text-sm">PERSONALIZATION:</h4>
          <p className="text-sm leading-relaxed">
            Tailored recommendations and reminders to help you stay on top 
            of your health.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
