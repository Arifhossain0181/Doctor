import React, { useContext, useEffect, useState } from "react";
import { APPContext } from "../Context/APPContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const MyAPPointment = () => {
  const { backendURL, token,getdoctordata } = useContext(APPContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const month = [
    " ",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotdateformate = (slotdate) => {
    const dateArry = slotdate.split("_");
    return dateArry[0] + " " + month[Number(dateArry[1])] + " " + dateArry[2];
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        `${backendURL}/api/user/my-appointments`,
        {
          headers: { token },
        }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
      } else {
        toast.error(data.message || "Failed to load appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };
  const cancelledAPPointments = async(appointmentId) =>{
    try{
      const{data } = await axios.post(
        `${backendURL}/api/user/cancel-appointment`,
        { appointmentId },
        {
          headers: { token },
        }
      );
      if(data.success){
        toast.success("Appointment cancelled successfully");
        getUserAppointments();
        getdoctordata()
      }
      else{
        toast.error(data.message || "Failed to cancel appointment");
      }
     }
    catch(error){
      console.error("Error cancelling appointment:", error);
      toast.error("Failed to cancel appointment");
    }

  }

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  if (!token) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Please login to view appointments
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Loading appointments...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-primary pb-4">
          My Appointments
        </h1>

        {appointments.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No appointments found
          </div>
        )}

        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex gap-4 hover:shadow-lg transition"
            >
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <img
                  src={appointment.docData?.image}
                  alt={appointment.docData?.name}
                  className="w-32 h-32 rounded-lg object-cover bg-gray-200"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {appointment.docData?.name}
                </h2>

                <p className="text-gray-600">
                  {appointment.docData?.speciality}
                </p>

                {/* Address */}
                <div className="mt-2 text-sm text-gray-600">
                  <p>{appointment.docData?.address?.line1}</p>
                  <p>{appointment.docData?.address?.line2}</p>
                </div>

                {/* Date & Time */}
                <p className="mt-2 text-sm text-gray-700">
                  <span className="font-medium">Date & Time:</span>{" "}
                  {slotdateformate(appointment.slotDate)} ,{" "}
                  {appointment.slotTime}
                </p>

                {/* Amount */}
                <p className="mt-1 text-sm text-gray-700">
                  <span className="font-medium">Fee:</span> $
                  {appointment.amount}
                </p>

                {/* Status */}
                <p className="mt-2 text-sm">
                  Status:{" "}
                  {appointment.isCompleted ? (
                    <span className="text-green-600 font-medium">
                      Completed
                    </span>
                  ) : appointment.cancelled ? (
                    <span className="text-red-500 font-medium">Cancelled</span>
                  ) : (
                    <span className="text-blue-600 font-medium">Scheduled</span>
                  )}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  {!appointment.payment && !appointment.cancelled && (
                    <button className="px-5 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
                      Pay Online
                    </button>
                  )}

                  {!appointment.cancelled && (
                    <button onClick={() => cancelledAPPointments(appointment._id)} className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Cancel Appointment
                    </button>
                  )}
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAPPointment;
