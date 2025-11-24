import React from "react";
import { useContext } from "react";
import { APPContext } from "../Context/APPContext.jsx";

const MyAPPointment = () => {
  const { doctors } = useContext(APPContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-primary pb-4">
          My Appointments
        </h1>

        {/* Appointments List */}
        <div className="space-y-4">
          {doctors.slice(0, 3).map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-lg object-cover bg-primary"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {doctor.name}
                </h2>
                <p className="text-gray-600 mb-2">{doctor.speciality}</p>
                
                {/* Address */}
                <div className="mb-3">
                  <p className="text-sm text-gray-700 font-medium">Address:</p>
                  <p className="text-sm text-gray-600">{doctor.address?.line1}</p>
                  <p className="text-sm text-gray-600">{doctor.address?.line2}</p>
                </div>

                {/* Date & Time */}
                <div className="mb-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Date & Time:</span> 25, July, 2024 | 8:30 PM
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
                    Pay Online
                  </button>
                  <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Appointments Message */}
        {doctors.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAPPointment;
