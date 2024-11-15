import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBer from '../components/NavBer';
import LeftNavBer from '../components/layout-components/LeftNavBer';
import RightNavBer from '../components/layout-components/RightNavBer';
import CategoryPage from '../pages/CategoryPage';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
                </section>
                
            </header>
            <nav  className='py-3 w-11/12 mx-auto'>
                <NavBer></NavBer>
            </nav>
            <main className='py-5 w-11/12 mx-auto grid md:grid-cols-12' >
            <aside className='left col-span-3'>
                <LeftNavBer></LeftNavBer>
            </aside>
            <section className='col-span-6'><Outlet></Outlet></section>
            <aside className='right col-span-3'>
                <RightNavBer></RightNavBer>
            </aside>
            </main>
        </div>
    );
};

export default Home;