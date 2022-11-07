import React from 'react';
import './BannerItem.css';


const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img src={image} alt="" className="carou-img rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                <h1 className='font-bold text-gray-50 lg:text-6xl'>
                    I freeze <br />
                    <span className='font-bold text-rose-400'>MOMENTS</span><br />
                    and make them <br />
                    <span className='font-bold text-rose-400'>ALIVE</span>
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;