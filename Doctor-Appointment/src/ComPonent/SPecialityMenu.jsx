import React from 'react';
import {specialityData} from '../assets/assets.js';
import { Link } from 'react-router-dom';
const SPecialityMenu = () => {
    return (
        <div id="sPeciality" className="my-16 flex flex-col items-center gap-6 py-16 text-gray-800">
            <h1 className='text-3xl'>Find by Speciality</h1>
            <h6 className='sm:w-1/3 text-center text-sm'>Choose a medical specialty to find the right doctor for your needs.</h6>
            <div className='flex items-center sm:justify-center flex-wrap gap-8 mt-8 overflow-scroll sm:overflow-visible'>
                {/* Speciality menu items can be added here */}
            {specialityData.map((item,index) =>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-center flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctor/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <h5>{item.speciality}</h5>
                </Link>
            )

            )}
            </div>
        </div>
    );
};

export default SPecialityMenu;