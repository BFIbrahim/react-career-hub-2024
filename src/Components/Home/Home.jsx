import React from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Banner from '../Banner/Banner';
import Jobcategory from '../JobCategory/Jobcategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Jobcategory></Jobcategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;