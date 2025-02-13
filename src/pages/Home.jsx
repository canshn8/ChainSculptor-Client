import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import JobList from "../components/JobList";
import Search from "../components/SearchFilter";
import { Helmet } from 'react-helmet';
import ChainSculptor from '../components/Back';

const Home = () => {


  return (
    <div>
            <ChainSculptor />
      {/* <Helmet>
        <title>Ana Sayfa | Freelance Platform</title>
        <meta name="description" content="Freelance platformumuz, doğru yetenekleri bulmanızı ve projelerinizi zamanında tamamlamanızı sağlar." />
        <meta name="keywords" content="freelance, yazılım, tasarım, dijital pazarlama, iş bulma, proje yönetimi" />
      </Helmet>
      
      <div className="relative">
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="p-4 text-white">
            <Search />
            <JobList />
          </div>
        </div>
      </div> */}
    </div>

  );
};

export default Home;