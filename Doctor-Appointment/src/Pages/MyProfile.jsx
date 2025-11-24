import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

const MyProfile = () => {
  const [userdata, setUserdata] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    image: assets.profile_pic,
    phone: "+1-212-456-7890",
    address: { line1: "123 Main St", line2: "Apt 4B" },
    dob: "1990-01-01",
    gender: "Male",
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Profile Image + Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center bg-white shadow-lg p-6 rounded-2xl"
      >
        <img
          src={userdata.image}
          alt={userdata.name}
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />

        <div className="mt-4 w-full text-center">
          {isEditing ? (
            <input
              type="text"
              className="border px-3 py-2 rounded w-full text-center"
              value={userdata.name}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h1 className="text-2xl font-bold">{userdata.name}</h1>
          )}
        </div>
      </motion.div>

      <hr className="my-6" />

      {/* CONTACT INFORMATION */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white shadow-lg p-6 rounded-2xl"
      >
        <h5 className="font-bold text-lg mb-3">CONTACT INFORMATION</h5>

        <div className="grid md:grid-cols-2 gap-5">
          {/* EMAIL */}
          <div>
            <span className="text-gray-500 text-sm">Email:</span>
            <h5 className="text-lg">{userdata.email}</h5>
          </div>

          {/* PHONE */}
          <div>
            <h4 className="font-semibold">Phone</h4>
            {isEditing ? (
              <input
                type="text"
                className="border px-3 py-2 rounded w-full"
                value={userdata.phone}
                onChange={(e) =>
                  setUserdata((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <h5 className="text-lg">{userdata.phone}</h5>
            )}
          </div>

          {/* ADDRESS */}
          <div className="md:col-span-2">
            <h4 className="font-semibold">Address</h4>
            {isEditing ? (
              <div className="grid gap-3">
                <input
                  type="text"
                  className="border px-3 py-2 rounded"
                  value={userdata.address.line1}
                  onChange={(e) =>
                    setUserdata((Prev) => ({
                      ...Prev,
                      address: { ...Prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  type="text"
                  className="border px-3 py-2 rounded"
                  value={userdata.address.line2}
                  onChange={(e) =>
                    setUserdata((Prev) => ({
                      ...Prev,
                      address: { ...Prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p className="text-lg">
                {userdata.address.line1}, {userdata.address.line2}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      <hr className="my-6" />

      {/* BASIC INFORMATION */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white shadow-lg p-6 rounded-2xl"
      >
        <h5 className="font-bold text-lg mb-3">BASIC INFORMATION</h5>

        <div className="grid md:grid-cols-2 gap-5">
          {/* GENDER */}
          <div>
            <h4 className="font-semibold">Gender</h4>
            {isEditing ? (
              <select
                className="border px-3 py-2 rounded w-full"
                value={userdata.gender}
                onChange={(e) =>
                  setUserdata((Prev) => ({ ...Prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <h5 className="text-lg">{userdata.gender}</h5>
            )}
          </div>

          {/* DOB */}
          <div>
            <h4 className="font-semibold">Birthday</h4>
            {isEditing ? (
              <input
                type="date"
                className="border px-3 py-2 rounded w-full"
                value={userdata.dob}
                onChange={(e) =>
                  setUserdata((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <h5 className="text-lg">{userdata.dob}</h5>
            )}
          </div>
        </div>
      </motion.div>

      {/* BUTTON */}
      <div className="flex justify-center mt-8">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className={`px-6 py-3 rounded-xl text-white font-semibold shadow-lg ${
            isEditing ? "bg-green-600" : "bg-blue-600"
          }`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit Profile"}
        </motion.button>
      </div>
    </div>
  );
};

export default MyProfile;
