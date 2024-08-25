import Navbar from '@/components/shared/Navbar';
import React from 'react';

function NotFound() {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <div className='flex-grow grid place-content-center text-center'>
                <div>
                    <h1 className='text-6xl font-bold text-gray-800'>404</h1>
                    <p className='mt-4 text-lg text-gray-600'>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                    <a href='/' className='mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700'>
                        Go to Homepage
                    </a>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default NotFound;