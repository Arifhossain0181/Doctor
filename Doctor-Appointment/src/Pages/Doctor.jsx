import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { APPContext } from "../Context/APPContext.jsx";
import { useNavigate } from "react-router-dom";
const Doctor = () => {
  const { doctors } = useContext(APPContext);
  const [activeSpeciality, setActiveSpeciality] = useState(null);
  const [filter, setFilter] = useState([]);
  const navigator = useNavigate();

  const categories = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

  const applyFilter = (specialityName) => {
    setActiveSpeciality(specialityName);

    if (specialityName) {
      setFilter(doctors.filter((doc) => doc.speciality === specialityName));
    } else {
      setFilter(doctors);
    }
  };

  useEffect(() => {
    applyFilter(null);
  }, [doctors]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-5 md:px-16 py-10 flex flex-col md:flex-row gap-8"
    >
      {/* LEFT SIDE CATEGORY LIST */}
      <div className="md:w-1/4 w-full bg-gray-50 border rounded-xl p-4 space-y-4">
        <h2 className="text-lg font-bold mb-3">Specialities</h2>

        <h6
          className={`cursor-pointer p-2 rounded-md transition ${
            activeSpeciality === null
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-100"
          }`}
          onClick={() => applyFilter(null)}
        >
          All Doctors
        </h6>

        {categories.map((cat, index) => (
          <h6
            key={index}
            onClick={() => applyFilter(cat)}
            className={`cursor-pointer p-2 rounded-md transition ${
              activeSpeciality === cat
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
          >
            {cat}
          </h6>
        ))}
      </div>

      {/* RIGHT SIDE – Doctors */}
      <div className="md:w-3/4 w-full">
        <h2 className="text-2xl font-bold mb-6">
          {activeSpeciality ? `Doctors in ${activeSpeciality}` : "All Doctors"}
        </h2>

        <div 
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filter.map((doctor, index) => (
            <motion.div
            onClick={() =>navigator(`/aPPointment/${doctor._id}`)}
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="border border-blue-200 rounded-xl overflow-hidden shadow hover:shadow-lg bg-white"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover bg-blue-50"
              />

              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <p className="text-sm text-green-600 font-medium">
                    Available
                  </p>
                </div>

                <h2 className="text-lg font-semibold">{doctor.name}</h2>
                <h6 className="text-gray-600">{doctor.speciality}</h6>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Doctor;
