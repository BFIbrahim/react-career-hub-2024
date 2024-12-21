import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(jobs => setJobs(jobs))
    })

    return (
        <div>
            <div className='text-center mt-8'>
                <h1 className='text-3xl font-sans font-bold mb-2'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:grid grid-cols-2 gap-5'>
                {
                    jobs.slice(0, dataLength).map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
            <div className='text-center'>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className='btn mb-5 bg-sky-500 text-white hover:text-black'>Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;