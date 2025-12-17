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
      if (data?.success && data?.doctors && data.doctors.length > 0) {
        console.log("Loaded doctors from MongoDB:", data.doctors.length);
        
        // Process doctors data to ensure proper format
        const processedDoctors = data.doctors.map(doctor => {
          // Parse address if it's a string
          if (doctor.address && typeof doctor.address === 'string') {
            try {
              doctor.address = JSON.parse(doctor.address);
            } catch (e) {
              console.warn("Could not parse address for doctor:", doctor._id);
            }
          }
          return doctor;
        });
        
        setDoctors(processedDoctors);
        return processedDoctors;
      } else {
        console.log("Using local doctors data");
        setDoctors(localDoctors);
        toast.error(data?.message || "No doctors found in database");
      }
    } catch (error) {
      console.log("Failed to fetch from backend, using local data:", error.message);
      // Silently use local data as fallback
      setDoctors(localDoctors);
    }
  };
  useEffect(() => {
    // Fetch from backend if URL is configured
    if (backendURL) {
      getdoctordata();
    } else {
      console.log("No backend URL configured, using local data");
      setDoctors(localDoctors);
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
