import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Services from '../Services/ServicesHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Services></Services>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;