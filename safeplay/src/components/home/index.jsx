import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../hero/Hero';
import './index.css'
import NaviagtionCard from '../navigationCard';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <NaviagtionCard />
    </div>
  );
};

export default Home;
