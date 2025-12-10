import { createContext } from "react";
import { doctors as localDoctors } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const APPContext = createContext(null);

const APPContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(localDoctors);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setuseData] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const getdoctordata = async () => {
    try {
      const { data } = await axios.get(backendURL + `/api/doctor/list`);
      if (data?.success) {
        setDoctors(data?.doctors);
        return data?.doctors;
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      // Silently use local data as fallback
      setDoctors(localDoctors);
    }
  };
  useEffect(() => {
    // Fetch from backend if URL is configured
    if (backendURL) {
      getdoctordata();
    }
  }, []);
   const loaduserPRofiledata = async () => {
    try {
      const { data } = await axios.get(backendURL + `/api/user/profile`, {
        headers: {
          token,
        },
      });
      if(data.success){
       setuseData(data.data); 
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Silently handle backend connection errors
      if (error.code !== "ERR_NETWORK") {
        toast.error(error?.response?.data?.message || "Failed to load profile");
      }
    }
  };
  useEffect(() =>{
  if(token){
    loaduserPRofiledata();
  }
  else{
    setuseData(false);
  }
  },[token])

  const value = {
    doctors,
    getdoctordata,
    token,
    setToken,
    backendURL,
    userData,
    setuseData,loaduserPRofiledata
  };
 

  return <APPContext.Provider value={value}>{children}</APPContext.Provider>;
};
export default APPContextProvider;
