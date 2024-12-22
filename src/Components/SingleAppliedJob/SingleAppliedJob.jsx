import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ job }) => {
    const { id } = job
    return (
        <div>
            <div className='flex justify-between border mb-4 p-5 rounded items-center'>
                <img src={job.logo} alt="" />
                <div>
                    <h1 className='text-2xl font-bold font-sans text-gray-600'>{job.job_title}</h1>
                    <h4>{job.company_name}</h4>
                    <div className='flex mb-4'>
                        <h4 className='p-2 border-2 rounded border-sky-500 bg-transparent me-4'>{job.remote_or_onsite}</h4>
                        <h4 className='p-2 border-2 rounded border-sky-500 bg-transparent'>{job.job_type}</h4>
                    </div>

                    <p className='flex gap-3'>
                        <p className='flex gap-2 items-center'><IoLocationOutline className='text-sky-500' /> {job.location}</p>
                        <p className='flex gap-2 items-center'><BsCoin className='text-sky-500' /> {job.salary}</p>
                    </p>
                </div>
                <div className='w-32 '>
                    <Link to={`/job/${id}`}><button className='btn mt-3 bg-sky-500 text-white hover:text-black'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleAppliedJob;