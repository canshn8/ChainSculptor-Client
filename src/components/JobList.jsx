import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import CardDetails from './CardDetails';

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]); // Ekranda görünen ilanlar
  const [allJobs, setAllJobs] = useState([]); // JSON'dan çekilen tüm ilanlar
  const [page, setPage] = useState(1); // Kaçıncı sayfadayız
  const [loading, setLoading] = useState(false); // Yükleniyor mu?
  const loader = useRef(null); // Scroll takip için ref

  // Sayfa açıldığında tüm ilanları çek
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.json');
        if (!response.ok) {
          throw new Error('Veriler alınırken hata oluştu');
        }
        const data = await response.json();
        setAllJobs(data); // Bellekte tut
        setJobs(data.slice(0, 6)); // Sayfa açıldığında ekranı dolduracak kadar ilan koy
      } catch (err) {
        console.error(err);
      }
    };

    fetchJobs();
  }, []);

  // Scroll ile yeni ilanları yükleme
  const loadMoreJobs = () => {
    if (loading) return; // Zaten yükleniyorsa tekrar yükleme

    setLoading(true);

    setTimeout(() => {
      const newJobs = allJobs.slice(page * 6, (page + 1) * 6); // Yeni 6 ilan al
      if (newJobs.length > 0) {
        setJobs((prevJobs) => [...prevJobs, ...newJobs]); // Öncekilerin üstüne ekle
        setPage((prevPage) => prevPage + 1); // Sayfa numarasını artır
      }
      setLoading(false);
    }, 600); // 1 saniye gecikme (gerçekçi bir efekt için)
  };

  // Scroll takip etme
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
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {jobs.map((job, index) => (
        <Card key={index} job={job} onCardClick={handleCardClick} />
      ))}

      {/* Scroll tetikleme alanı */}
      <div ref={loader} className="h-10 bg-transparent"></div>

      {/* Yükleniyor animasyonu */}
      {/* {loading && <p className="text-center text-gray-500">Yükleniyor...</p>} */}

      {/* Kart Detayı */}
      {selectedJob && <CardDetails job={selectedJob} onClose={handleClose} />}
    </div>
  );
};

export default JobList;
