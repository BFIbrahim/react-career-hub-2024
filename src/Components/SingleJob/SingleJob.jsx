import React from 'react';

const SingleJob = ({job}) => {
    
    return (
        <div>
            <p>{job.job_title}</p>
        </div>
    );
};

export default SingleJob;