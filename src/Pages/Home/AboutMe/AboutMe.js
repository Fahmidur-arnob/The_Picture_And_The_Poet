import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import pic from '../../../assets/images/about.jpg';

const AboutMe = () => {
    return (
        <>
            <h1 className='text-5xl text-center mb-10'>About Me</h1>
            <div className='mainAboutMeDiv'>
                <Link href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-xl lg:max-w-5xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pic} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi, I am Md Fahmidur Rahman Arnob</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I am a full-stack web developer from Dhaka, Bangladesh. My focus was always been to transform pictures into poetry.My ideology is to capture special moments and make them alive when the time passes, and photography is the only way to do that.</p>
                    </div>
                </Link>

            </div>
        </>
    );
};

export default AboutMe;