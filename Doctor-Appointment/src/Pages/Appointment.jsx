import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APPContext } from "../Context/APPContext.jsx";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";
import RelatedDoctors from "../ComPonent/RelatedDoctors.jsx";
const Appointment = () => {
  const { docId } = useParams();
  const daysarray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const { doctors } = useContext(APPContext);

  const [docinfo, setDocinfo] = useState(null);
  const [docslots, setDocslots] = useState([]);
  const [slotindex, setSlotindex] = useState(0);
  const [slotime, setSlotime] = useState("");

  useEffect(() => {
    const fetchdoctor = async () => {
      const doctor = doctors.find((doc) => doc._id === docId);
      setDocinfo(doctor || null);
    };
    fetchdoctor();
  }, [docId, doctors]);


   const getavalilableslots = async () => {
    setDocslots([])

    // getting current date
    let today = new Date();
    for(let i =0; i<7; i++){
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end tiem of hte date with index
      let endTIme = new Date()
      endTIme.setDate(today.getDate() + i );
      endTIme.setHours(21,0,0,0)

      // setting hours 

      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10? currentDate.getHours( ) + 1:10);
        currentDate.setMinutes(currentDate.getMinutes()> 30 ? 30:0);
      }
      else{
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timesolots = [];
      while(currentDate <= endTIme){
        let formattedtime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        // sdd slot to array 
        timesolots.push({
          datetime: new Date(currentDate),
          time: formattedtime
        })
        // increment by 30 mins
        currentDate.setMinutes( currentDate.getMinutes() + 30);
      }
      setDocslots((prevSlots) => [...prevSlots,timesolots]);


    }
   }

   useEffect(() => {
    getavalilableslots();
   }, [docinfo]);

   useEffect(() => {
    console.log("",docslots)
   }, [docslots, slotindex]);



  if (!docinfo) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading doctor details...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-8 max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-xl p-6">
        
        {/* Doctor Image */}
        <motion.img
          src={docinfo.image}
          alt={docinfo.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full md:w-60 rounded-lg object-cover shadow"
        />

        {/* Doctor Details */}
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {docinfo.name}
            <img src={assets.verified_icon} alt="" className="w-5" />
          </h1>

          <p className="text-gray-700 text-lg">
            {docinfo.degree} — {docinfo.speciality}
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            {docinfo.experience} Experience
          </motion.button>

          {/* About Section */}
          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              About Doctor
              <img src={assets.info_icon} alt="" className="w-4" />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {docinfo.about}
            </p>
          </div>
          <h5>AAppointment fee: ${docinfo.fees}</h5>
        </div>

      </div>
      {/* {booking slots} */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <h5>Booking Slots</h5>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            docslots.length && docslots.map((dayslot, index) => (
              <div 
                key={index}
                onClick={() => setSlotindex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
              >
                <p>{dayslot[0] && daysarray[dayslot[0].datetime.getDay()]}</p>
                <p>{dayslot[0] && dayslot[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {
              docslots.length && docslots[slotindex].map((item, index) => (
                <p 
                  onClick={() => setSlotime(item.time)}
                  className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} 
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            }
          </div>
          <div>
            <button className="bg-primary text-white text-sm font-light px-3 py-3 rounded-full ">Book Appointment</button>
          </div>
      </div>

{/* Related Doctors Section */
}    <RelatedDoctors docId={docinfo.id} speciality={docinfo.speciality} />
    </motion.div>
  );
};

export default Appointment;
