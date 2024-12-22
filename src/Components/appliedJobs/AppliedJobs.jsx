import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from '../utility/localstorage';
import SingleAppliedJob from '../SingleAppliedJob/SingleAppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        const storedJobs = getStoredApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))
            setAppliedJobs(jobsApplied)
            
        }
    })
    return (
        <div className=''>
            {
                appliedJobs.map(job => <SingleAppliedJob
                    key={job.id}
                    job={job}
                ></SingleAppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;