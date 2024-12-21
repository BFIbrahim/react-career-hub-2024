import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";



const SingleJob = ({ job }) => {

    return (
        <div className=''>
            <div className='mt-8 mb-8'>
                <img src={job.logo} alt="" />
                <h2 className='font-bold mt-5 text-2xl'>{job.job_title}</h2>
                <h4 className='font-semibold text-gray-500 mb-4'>{job.company_name}</h4>
                <div className='flex mb-4'>
                    <h4 className='p-2 border-2 rounded border-sky-500 bg-transparent me-4'>{job.remote_or_onsite}</h4>
                    <h4  className='p-2 border-2 rounded border-sky-500 bg-transparent'>{job.job_type}</h4>
                </div>
                <p className='flex gap-3'>
                    <p className='flex gap-2 items-center'><IoLocationOutline className='text-sky-500'/> {job.location}</p>
                    <p className='flex gap-2 items-center'><BsCoin className='text-sky-500'/> {job.salary}</p>
                </p>

                <button className='btn mt-3 bg-sky-500 text-white hover:text-black'>View Details</button>
            </div>
        </div>
    );
};

export default SingleJob;