import React from 'react';
import imgOne from '../../../assets/images/carouOne.avif';
import imgTwo from '../../../assets/images/carouTwo.avif';
import imgFour from '../../../assets/images/carouFour.avif';
import imgFive from '../../../assets/images/caourFive.avif';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: imgOne,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: imgTwo,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: imgFour,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: imgFive,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className='w-[99%] mx-auto'>
            <div className="carousel py-2 mx-auto">
                {
                    bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                    ></BannerItem>)
                }
            </div>
        </div>
    );
};

export default Banner;