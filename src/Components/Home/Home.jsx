import React from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;