import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import ChainSculptor from '../components/Back'; 

const Home = () => {
  const [scrolled, setScrolled] = useState(false); 
  const [transitioning, setTransitioning] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
        goToJobs()
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToJobs = () => {
    setTransitioning(true); 
    setTimeout(() => {
      navigate('/jobs'); 
    }, 1000); 
  };

  return (
    <div>
      <div 
        className={`absolute top-0 left-0 w-full h-screen transition-opacity duration-1000 ${scrolled || transitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <ChainSculptor />
      </div>

      <div 
        className={`relative z-10 min-h-screen text-black transition-opacity duration-1000 ${scrolled || transitioning ? 'opacity-100' : 'opacity-0'}`}
      >
      </div>
    </div>
  );
};

export default Home;
