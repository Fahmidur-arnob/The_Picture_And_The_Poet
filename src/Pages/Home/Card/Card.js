import React from 'react';
import { Link } from 'react-router-dom';
import imgOne from '../../../assets/images/p-1.jpg';
import imgTwo from '../../../assets/images/p-2.jpg';
import imgThree from '../../../assets/images/p-3.jpg';
import imgFour from '../../../assets/images/p-4.jpg';
import imgFive from '../../../assets/images/p-5.jpg';
import imgSix from '../../../assets/images/p-6.jpg';
import './Card.css';

const Card = () => {
    return (

        <>
            <h1 className='text-5xl text-center mt-24 mb-16'>Some of My Work</h1>
            <div className='mainPicGrid'> 
                <div className="max-w-6xl mb-24 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 picGrid">
                    <Link >
                        <img className="rounded-lg" src={imgOne} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgTwo} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgThree} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgFour} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgFive} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgSix} alt="" />
                    </Link>
                </div>
            </div>
        </>

    );
};

export default Card;