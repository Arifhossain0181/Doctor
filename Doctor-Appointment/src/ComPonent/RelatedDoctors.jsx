import React from 'react';
import { useContext } from 'react';
import { APPContext } from '../Context/APPContext.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const RelatedDoctors = ({ docId, speciality }) => {
     const {doctors} = useContext(APPContext);
     const [relateddoc ,setrelateddoc] = useState([]);
     const navigate = useNavigate();

     useEffect(()=>{
        if(doctors.length >0 && speciality){
            const doctrsdata = doctors.filter(doc => doc.speciality === speciality && doc._id !== docId);
            setrelateddoc(doctrsdata);
        }

    },[docId, speciality,doctors])
    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 md:px-10">
      
      {/* Heading Section */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-semibold text-center"
      >
        Top Doctors to Book
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
        className="sm:w-1/3 text-center text-sm text-gray-600"
      >
        Simply browse through our extensive list of trusted doctors.
      </motion.p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {relateddoc.slice(0, 5).map((doctor, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer shadow hover:shadow-lg"
            onClick={() => navigate(`/aPPointment/${doctor._id}`)}
          >
            {/* Image */}
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-48 object-cover bg-blue-50"
            />

            {/* Info */}
            <div className="p-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <p className="text-sm text-green-600 font-medium">Available</p>
              </div>

              <h2 className="text-lg font-medium">{doctor.name}</h2>
              <h6 className="text-gray-600">{doctor.speciality}</h6>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
        className="bg-blue-50 text-gray-700 px-12 py-3 rounded-full mt-10 border border-blue-300"
      >
        More
      </motion.button>
    </div>
    );
};

export default RelatedDoctors;