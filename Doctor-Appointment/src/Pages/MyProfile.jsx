import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";
import { useContext } from "react";
import { APPContext } from "../Context/APPContext.jsx";

const MyProfile = () => {
  const {userData, setuseData} = useContext(APPContext);
  

  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);

  if (!userData) {
    return (
      <div className="max-w-3xl mx-auto p-5 text-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Profile Image + Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center bg-white shadow-lg p-6 rounded-2xl"
      >
        <label htmlFor="image" className="cursor-pointer relative">
          <img
            src={image ? URL.createObjectURL(image) : userData.image || assets.profile_pic}
            alt={userData.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          {isEditing && (
            <img
              src={assets.upload_icon}
              alt="Upload"
              className="w-8 absolute bottom-0 right-0 bg-white rounded-full p-1"
            />
          )}
        </label>
        {isEditing && (
          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        )}

        <div className="mt-4 w-full text-center">
          {isEditing ? (
            <input
              type="text"
              className="border px-3 py-2 rounded w-full text-center"
              value={userData.name}
              onChange={(e) =>
                setuseData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h1 className="text-2xl font-bold">{userData.name}</h1>
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
            <h5 className="text-lg">{userData.email}</h5>
          </div>

          {/* PHONE */}
          <div>
            <h4 className="font-semibold">Phone</h4>
            {isEditing ? (
              <input
                type="text"
                className="border px-3 py-2 rounded w-full"
                value={userData.phone}
                onChange={(e) =>
                  setuseData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <h5 className="text-lg">{userData.phone}</h5>
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
                  value={userData.address.line1}
                  onChange={(e) =>
                    setuseData((Prev) => ({
                      ...Prev,
                      address: { ...Prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  type="text"
                  className="border px-3 py-2 rounded"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setuseData((Prev) => ({
                      ...Prev,
                      address: { ...Prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p className="text-lg">
                {userData.address.line1}, {userData.address.line2}
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
                value={userData.gender}
                onChange={(e) =>
                  setuseData((Prev) => ({ ...Prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <h5 className="text-lg">{userData.gender}</h5>
            )}
          </div>

          {/* DOB */}
          <div>
            <h4 className="font-semibold">Birthday</h4>
            {isEditing ? (
              <input
                type="date"
                className="border px-3 py-2 rounded w-full"
                value={userData.dob}
                onChange={(e) =>
                  setuseData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <h5 className="text-lg">{userData.dob}</h5>
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
