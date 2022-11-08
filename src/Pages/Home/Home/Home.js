import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;