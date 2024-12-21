import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(jobs => setJobs(jobs))
    })

    return (
        <div>
            <div>
                {
                    jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;