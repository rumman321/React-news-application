import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"

const NavBer = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='space-x-5'>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="career">career</Link>
            </div>
            <div className='flex gap-4 items-center'> 
                <img src={userIcon} alt="" />
            <Link to="/auth/login" className=' bg-neutral rounded-none text-white btn'>Login</Link>
            </div>
        </div>
    );
};

export default NavBer;