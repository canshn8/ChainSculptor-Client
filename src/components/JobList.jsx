import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, setJobs, setLoading, setPage } from '../redux/jobSlice';
import Card from '../components/Card';
import CardDetails from './CardDetails';
import SearchFilter from './SearchFilter';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, allJobs, page, loading } = useSelector((state) => state.job);
  const [selectedJob, setSelectedJob] = useState(null);
  const loader = useRef(null);

  useEffect(() => {
    if (allJobs.length === 0) {
      dispatch(fetchJobs());
    }
  }, [dispatch, allJobs.length]);  

  if (jobs.length < allJobs.length) {
    const newJobs = allJobs.slice(page * 6, (page + 1) * 6);
    if (newJobs.length > 0) {
      dispatch(setJobs({ jobs: [...jobs, ...newJobs], allJobs }));
      dispatch(setPage(page + 1));
    }
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && jobs.length < allJobs.length) {
          loadMoreJobs();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [allJobs, jobs, loading]); 

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  const handleSearch = (filters) => {
    const filteredJobs = allJobs.filter((job) => {
      return (
        (filters.searchTerm === "" || job.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
        (filters.jobType === "" || job.jobType === filters.jobType) &&
        (filters.budget === "" || job.budget >= parseInt(filters.budget)) &&
        (filters.experienceLevel === "" || job.experienceLevel === filters.experienceLevel) &&
        (filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.language === "" || job.language.toLowerCase().includes(filters.language.toLowerCase()))
      );
    });

    dispatch(setJobs({ jobs: filteredJobs, allJobs }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SearchFilter onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
        {jobs.map((job, index) => (
          <Card key={index} job={job} onCardClick={handleCardClick} />
        ))}

        <div ref={loader} className="h-10 bg-transparent"></div>

        {loading && jobs.length < allJobs.length && (
          <p className="text-center text-gray-500">Yükleniyor...</p>
        )}

        {selectedJob && <CardDetails job={selectedJob} onClose={handleClose} />}
      </div>
    </div>
  );
};

export default JobList;
