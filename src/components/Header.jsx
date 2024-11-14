import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center space-y-4 mt-8'>
            <img className='w-[400px] h-[60px] ' src={logo} alt="" />
            <p className='w-[300px] h-[30px] '>Journalism Without Fear or Favour</p>
            <p className='w-[280px] h-[30px] font-bold text-[20px]'> <span className='text-black'>Sunday,</span> November 27, 2025</p>
            <p className=' h-[30px] font-bold text-[20px]'>{moment().format(`dddd, MMMM Do YYYY`)}</p>
        </div>
    );
};

export default Header;