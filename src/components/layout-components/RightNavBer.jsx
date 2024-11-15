import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNavBer = () => {
    return (
        <div>
            
            <SocialLogin></SocialLogin>

            <section className='mt-10'>
            <FindUs ></FindUs>
            </section>
            
        </div>
    );
};

export default RightNavBer;