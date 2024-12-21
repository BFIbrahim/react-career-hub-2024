import React from 'react';

const Banner = () => {
    return (
        <div className='bg-purple-100 bg-opacity-35'>
            <div className='md:flex gap-10 items-center w-[80%] mx-auto mt-5'>
                <div>
                    <h1 className='text-2xl md:text-6xl font-bold font-sans md:w-[60%]'>One Step Closer To Your <span className='text-sky-500'>Dream Job</span></h1>
                    <p className=' text-justify mt-4 mb-4 text-[20px] text-gray-700'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn bg-sky-500 text-white font-bold hover:text-black'>Get Started</button>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/C5vM83d/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;