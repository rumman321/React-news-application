import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBer from '../components/NavBer';

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
            <main></main>
        </div>
    );
};

export default Home;