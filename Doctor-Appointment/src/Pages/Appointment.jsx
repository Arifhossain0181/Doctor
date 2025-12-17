import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { APPContext } from "../Context/APPContext.jsx";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";
import RelatedDoctors from "../ComPonent/RelatedDoctors.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, backendURL, token, getdoctordata } = useContext(APPContext);
  const navigate = useNavigate();

  const [docinfo, setDocinfo] = useState(null);
  const [docslots, setDocslots] = useState([]);
  const [slotindex, setSlotindex] = useState(0);
  const [slotime, setSlotime] = useState("");

  const daysarray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const doctor = doctors.find((doc) => doc._id === docId);
    setDocinfo(doctor || null);
  }, [docId, doctors]);

  const getavalilableslots = () => {
    if (!docinfo) return;
    const today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeslots = [];
      while (currentDate <= endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        let day = currentDate.getDay();
        let month = currentDate.getMonth() + 1;
        let date = currentDate.getDate();
        let year = currentDate.getFullYear();
        const slotdate = day + "_" + month + "_" + date + "_" + year;
        const slottime = formattedTime;
        const isSlotavailable = docinfo.slots_booked[slotdate] && docinfo.slots_booked[slotdate].includes(slottime)? false : true ;
        if(isSlotavailable){
           timeslots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
         
        });
        }
        
        // Create the slot date key in the same format used for booking
        const slotDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;
        
        // Check if this slot is already booked
        const isBooked = docinfo.slots_booked && docinfo.slots_booked[slotDate] && 
                        docinfo.slots_booked[slotDate].includes(formattedTime);
        
       
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      allSlots.push(timeslots);
    }
    setDocslots(allSlots);
  };

  const bookingappointment = async () => {
    if (!token) {
      toast.warn("Please login to book appointment");
      return navigate("/login");
    }
    if (!slotime) {
      toast.warn("Please select a slot");
      return;
    }

    // Check if the selected slot is already booked
    const selectedSlot = docslots[slotindex].find(slot => slot.time === slotime);
    if (selectedSlot && selectedSlot.isBooked) {
      toast.error("This slot is already booked. Please select another time.");
      return;
    }

    try {
      const slotDateObj = docslots[slotindex][0].datetime;
      const slotDate = `${slotDateObj.getDate()}_${slotDateObj.getMonth() + 1}_${slotDateObj.getFullYear()}`;

      const { data } = await axios.post(
        `${backendURL}/api/user/book-appointment`,
        { doctorId: docinfo._id, slotTime: slotime, slotDate },
        { headers: { token } }
      );

      if (data.success) {
        toast.success("Appointment booked successfully");
        getdoctordata();
        navigate("/myappointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
       const errormessage = error?.response?.data?.message || "Something went wrong";
       toast.error(errormessage);
    }
  };

  useEffect(() => {
    getavalilableslots();
  }, [docinfo]);

  if (!docinfo) return <div className="text-center mt-20">Loading doctor details...</div>;

  return (
    <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
        <motion.img src={docinfo.image} alt={docinfo.name} className="w-full md:w-60 rounded-lg object-cover shadow" />
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {docinfo.name} <img src={assets.verified_icon} alt="" className="w-5" />
          </h1>
          <p className="text-gray-700">{docinfo.degree} — {docinfo.speciality}</p>
          <motion.button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow">{docinfo.experience} Experience</motion.button>
          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold flex items-center gap-2">About Doctor</h3>
            <p className="text-gray-600">{docinfo.about}</p>
          </div>
          <h5>Appointment fee: ${docinfo.fee}</h5>
        </div>
      </div>

      <div className="mt-4">
        <h5>Booking Slots</h5>
        <div className="flex gap-3 overflow-x-scroll mt-4">
          {docslots.map((dayslot, index) => (
            <div
              key={index}
              onClick={() => setSlotindex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? "bg-primary text-white" : "border border-gray-200"}`}
            >
              <p>{dayslot[0] && daysarray[dayslot[0].datetime.getDay()]}</p>
              <p>{dayslot[0] && dayslot[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 overflow-x-scroll mt-4">
          {docslots.length && docslots[slotindex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => !item.isBooked && setSlotime(item.time)}
              className={`text-sm font-light px-5 py-2 rounded-full ${
                item.isBooked 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed line-through" 
                  : slotime === item.time 
                    ? "bg-primary text-white cursor-pointer" 
                    : "text-gray-400 border border-gray-300 cursor-pointer"
              }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button onClick={bookingappointment} className="bg-primary text-white px-3 py-3 rounded-full mt-4">
          Book Appointment
        </button>
      </div>

      <RelatedDoctors docId={docinfo._id} speciality={docinfo.speciality} />
    </motion.div>
  );
};

export default Appointment;
