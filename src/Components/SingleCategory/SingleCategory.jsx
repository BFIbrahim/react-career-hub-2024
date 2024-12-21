import React from 'react';
import { FaFax } from "react-icons/fa";


const SingleCategory = ({category}) => {
    
    return (
        <div className=''>
            <div className='p-10 rounded mb-5 bg-purple-100 bg-opacity-40'>
                <FaFax className='text-3xl font-bold text-sky-500'/>
                <h3 className='text-2xl font-semibold font-sans'>{category.category_name}</h3>
                <p className='text-gray-600'>{category.availability}</p>
            </div>
        </div>
    );
};

export default SingleCategory;