import React from 'react';
import {specialityData} from '../assets/assets.js';
import { Link } from 'react-router-dom';
const SPecialityMenu = () => {
    return (
        <div id="sPeciality" className="my-16 flex flex-col items-center gap-6 py-16 text-gray-800">
            <h1 className='text-3xl'>Find by Speciality</h1>
            <h6>Choose a medical specialty to find the right doctor for your needs.</h6>
            <div className='flex items-center '>
                {/* Speciality menu items can be added here */}
            {specialityData.map((item,index) =>(
                <Link key={index} to={`/doctor/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <h5>{item.speciality}</h5>
                </Link>
            )

            )}
            </div>
        </div>
    );
};

export default SPecialityMenu;