import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const Jobcategory = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategory(data))
    })

    return (
        <div>
            <div className='text-center mt-10 mb-8'>
                <h1 className='text-3xl font-bold'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:grid gridcols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    category.map(sCategory => <SingleCategory 
                        key={sCategory.id}
                        category={sCategory}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Jobcategory;