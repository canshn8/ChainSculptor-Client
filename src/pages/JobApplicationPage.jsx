import React from 'react';
import JobApplicationForm from '../components/JobApplicationForm';

const JobApplicationPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-cardHd mb-6"></h2>
      <JobApplicationForm />
    </div>
  );
};

export default JobApplicationPage;
