import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, setJobs, setLoading, setPage } from '../redux/jobSlice';  
import Card from '../components/Card';
import CardDetails from './CardDetails';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, allJobs, page, loading } = useSelector((state) => state.job);
  const [selectedJob, setSelectedJob] = useState(null);
  const loader = useRef(null);

  useEffect(() => {
    dispatch(fetchJobs());  
  }, [dispatch]);

  const loadMoreJobs = () => {
    if (loading) return;

    dispatch(setLoading(true)); 

    setTimeout(() => {
      const newJobs = allJobs.slice(page * 6, (page + 1) * 6);
      if (newJobs.length > 0) {
        dispatch(setJobs({ jobs: [...jobs, ...newJobs], allJobs }));
        dispatch(setPage(page + 1));
      }
      dispatch(setLoading(false));
    }, 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreJobs();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [allJobs, loading]);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
      {jobs.map((job, index) => (
        <Card key={index} job={job} onCardClick={handleCardClick} />
      ))}

      <div ref={loader} className="h-10 bg-transparent"></div>

      {loading && jobs.length < allJobs.length && (
        <p className="text-center text-gray-500">Yükleniyor...</p>
      )}

      {selectedJob && <CardDetails job={selectedJob} onClose={handleClose} />}
    </div>
  );
};

export default JobList;
