import React from "react";
import { assets } from "../assets/assets.js";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [showmenu, setmenu] = useState(false);
  const [token, settoken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 text-blue-600" : ""
          }
        >
          <p>HOME</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink
          to="/doctor"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 text-blue-600" : ""
          }
        >
          <p>ALL DOCTORS</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 text-blue-600" : ""
          }
        >
          <p>ABOUT</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 text-blue-600" : ""
          }
        >
          <p>CONTACT</p>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            {" "}
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                <h5 onClick={() =>navigate('/myprofile')} className="hover:text-black cursor-pointer">My Profile</h5>
                <h5 onClick={() =>navigate('/myappointments')} className="hover:text-black cursor-pointer">
                  My APPointments{" "}
                </h5>
                <h5 onClick={()=>settoken(false)} className="hover:text-black cursor-pointer">login</h5>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-8 py-3 border-rounded rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
