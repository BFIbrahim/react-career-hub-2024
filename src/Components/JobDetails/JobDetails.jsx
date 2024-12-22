import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { BsCoin } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from '../utility/localstorage';







const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idIndt = parseInt(id)
    const job = jobs.find(job => job.id === idIndt)
    console.log(job)


    const hundleApplyJobs = () => {
        saveJobApplication(idIndt)
        toast("Apply Successfull")
    }
    return (
        <div className='mb-10'>
            <div className='text-4xl font-bold font-sans text-center mt-24 mb-10'>
                <h1>Job Details</h1>
                <h3>{job.job_title}</h3>
            </div>


            <div className='md:flex items-center gap-10 mt-5 text-gray-600'>
                <div className='md:w-2/3'>
                    <p><b>Job Description:</b>{' ' + job.job_description}</p>
                    <p className='mt-5 text-justify'><b>Job Responsibilities:</b>{' ' + job.job_responsibility}</p>
                    <p className='mt-5 text-justify'><b>Education Requarments: </b></p>
                    <p>{job.educational_requirements}</p>
                    <p className='mt-5 text-justify'><b>Experience:</b></p>
                    <p>{job.experiences}</p>
                </div>
                <div className='md:w-1/3'>
                    <div className=' bg-purple-100 p-10'>
                        <h3 className='text-2xl font-bold font-sans mb-4 border-b-gray-400 border-2 pb-2'>Job Details</h3>
                        <p className='mt-5 flex gap-3 items-center'><BsCoin className='text-sky-500' /> <b>Salary: </b> {job.salary}</p>
                        <p className='mt-2 flex gap-3 items-center mb-4'><SlCalender className='text-sky-500'></SlCalender>  <b>Job Title:</b> {job.job_title}</p>

                        <h3 className='text-2xl font-bold font-sans border-b-gray-400 border-2 pb-2'>Contact Information</h3>
                        <p className='mt-2 flex gap-3 items-center mb-4'><FaPhoneAlt className='text-sky-500'></FaPhoneAlt> {job.contact_information.phone}</p>
                        <p className=' flex gap-3 items-center mb-4'><MdEmail className='text-sky-500'></MdEmail> {job.contact_information.email}</p>
                        <p className=' flex gap-3 items-center mb-4'><IoLocationOutline className='text-sky-500'></IoLocationOutline> {job.contact_information.address}</p>


                    </div>
                    <button onClick={hundleApplyJobs} className='btn w-full bg-sky-500 hover:text-black text-white mt-5'>Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;