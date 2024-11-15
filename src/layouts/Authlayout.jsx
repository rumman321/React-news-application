import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../components/NavBer';

const Authlayout = () => {
    return (
        <div className='font-poppins'>
            <header className='py-5 w-11/12 mx-auto'>
                <NavBer></NavBer>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;