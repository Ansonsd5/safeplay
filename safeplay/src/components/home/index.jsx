import React from 'react';
import Hero from '../hero/Hero';
import './index.css'
import NavigationCard from '../navigationCard';

// Home component that serves as the landing page of the application
// It includes the Hero section and NavigationCard for navigation
const Home = () => {
    return (
        <div>
            <Hero/>
            <NavigationCard/>
        </div>
    );
};

export default Home;
