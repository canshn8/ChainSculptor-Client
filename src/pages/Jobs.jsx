import React from 'react';
import { Helmet } from 'react-helmet';
import Search from "../components/SearchFilter"
import JobList from "../components/JobList"

const Jobs = () => {
  return (
    <div>
      <Helmet>
        <title>Jobs | Freelance Platform</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center">
        <Search/>
        <JobList/>
      </div>
    </div>
  );
};

export default Jobs;
