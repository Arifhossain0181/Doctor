import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { APPContext } from "../Context/APPContext";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const { userData, setuseData, token, loaduserPRofiledata, backendURL } =
    useContext(APPContext);

  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);

  if (!userData) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  /* ================= UPDATE PROFILE ================= */
  const updateProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("dob", userData.dob);
      formData.append("gender", userData.gender);
      formData.append(
        "address",
        JSON.stringify({
          line1: userData.address.line1,
          line2: userData.address.line2,
        })
      );

      if (image) formData.append("image", image);

      const { data } = await axios.put(
        `${backendURL}/api/user/update-profile`,
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        toast.success("Profile updated successfully");
        setIsEditing(false);
        setImage(null);
        loaduserPRofiledata();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Profile update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* ================= PROFILE CARD ================= */}
      <motion.div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
        {isEditing ? (
          <label htmlFor="image" className="cursor-pointer relative">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : userData.image || assets.userProfile
              }
              className="w-32 h-32 rounded-full object-cover opacity-80"
            />
            <img
              src={assets.upload_icon}
              className="w-8 absolute bottom-2 right-2 bg-white rounded-full p-1"
            />
            <input
              type="file"
              hidden
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        ) : (
          <img
            src={userData.image || assets.userProfile}
            className="w-32 h-32 rounded-full object-cover border"
          />
        )}

        {/* NAME */}
        <div className="mt-4 w-full text-center">
          {isEditing ? (
            <input
              className="border rounded px-3 py-2 w-full text-center"
              value={userData.name}
              onChange={(e) =>
                setuseData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-2xl font-bold">{userData.name}</h2>
          )}
        </div>
      </motion.div>

      {/* ================= CONTACT ================= */}
      <div className="bg-white p-6 mt-6 rounded-2xl shadow-lg">
        <h3 className="font-bold mb-4">Contact Information</h3>

        <p className="text-gray-500">Email</p>
        <p>{userData.email}</p>

        <p className="mt-3 font-semibold">Phone</p>
        {isEditing ? (
          <input
            className="border rounded px-3 py-2 w-full"
            value={userData.phone}
            onChange={(e) =>
              setuseData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        ) : (
          <p>{userData.phone}</p>
        )}

        <p className="mt-3 font-semibold">Address</p>
        {isEditing ? (
          <>
            <input
              className="border rounded px-3 py-2 w-full mb-2"
              value={userData.address.line1}
              onChange={(e) =>
                setuseData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
            />
            <input
              className="border rounded px-3 py-2 w-full"
              value={userData.address.line2}
              onChange={(e) =>
                setuseData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
            />
          </>
        ) : (
          <p>
            {userData.address.line1}, {userData.address.line2}
          </p>
        )}
      </div>

      {/* ================= BASIC INFO ================= */}
      <div className="bg-white p-6 mt-6 rounded-2xl shadow-lg">
        <h3 className="font-bold mb-4">Basic Information</h3>

        <p className="font-semibold">Gender</p>
        {isEditing ? (
          <select
            className="border rounded px-3 py-2 w-full"
            value={userData.gender}
            onChange={(e) =>
              setuseData((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}

        <p className="font-semibold mt-3">Date of Birth</p>
        {isEditing ? (
          <input
            type="date"
            className="border rounded px-3 py-2 w-full"
            value={userData.dob}
            onChange={(e) =>
              setuseData((prev) => ({ ...prev, dob: e.target.value }))
            }
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      {/* ================= BUTTON ================= */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => (isEditing ? updateProfile() : setIsEditing(true))}
          className={`px-6 py-3 rounded-xl text-white font-semibold ${
            isEditing ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
