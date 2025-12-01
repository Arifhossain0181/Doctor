import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Doctor from "./Pages/Doctor.jsx";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import MyProfile from "./Pages/MyProfile.jsx";
import MyAAppointment from "./Pages/MyAPPointment.jsx";
import Appointment from "./Pages/Appointment.jsx";
import Navbar from "./ComPonent/Navbar.jsx";
import Footer from './ComPonent/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%] ">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/doctor/:speciality" element={<Doctor />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/myprofile" element={<MyProfile />}></Route>
        <Route path="/myappointments" element={<MyAAppointment />}></Route>
        <Route path="/aPPointment/:docId" element={<Appointment />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
