import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className="px-5 md:px-10 bg-white">
            <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 my-10 mt-20 text-sm">

                {/* Left Section */}
                <div className="text-center sm:text-left">
                    <img className="mb-5 w-32 mx-auto sm:mx-0" src={assets.logo} alt="Logo" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6 mx-auto sm:mx-0">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Center Section - Company */}
                <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold mb-4">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li className="cursor-pointer hover:text-black">Home</li>
                        <li className="cursor-pointer hover:text-black">About us</li>
                        <li className="cursor-pointer hover:text-black">Contact us</li>
                        <li className="cursor-pointer hover:text-black">Privacy policy</li>
                    </ul>
                </div>

                {/* Right Section - Get in Touch */}
                <div className="text-center sm:text-left">
                    <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>greatstackdev@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div>
                <hr />
                <p className="py-5 text-sm text-center text-gray-500">
                    Copyright 2024 © Prescripto - All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
