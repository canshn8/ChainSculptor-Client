import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt'; 
import { FaBuilding, FaRegClock } from 'react-icons/fa'; 

const Card = ({ job, onCardClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );

    const element = document.querySelector(`#card-${job?.id}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [job?.id]);

  if (!job) return null;

  return (
    <div 
      id={`card-${job?.id}`} 
      className={`p-6 w-auto max-w-2xl mx-auto mb-6 cursor-pointer ${isVisible ? "animate-slide-in" : ""}`}
      onClick={() => onCardClick(job)} 
    >
  <Tilt className="tilt-card" tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={300}>
    <div className="bg-white dark:bg-bej rounded-lg shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105 transform duration-300">
      
      <div className="p-6 border-b border-cardBorder dark:border-soft-caramel flex items-center">
        <FaBuilding className="text-cardHd mr-2" />
        <div>
          <h3 className="text-2xl font-bold text-cardHd">{job.title}</h3>
          <p className="mt-2 text-sm text-cardInfo">{job.categories}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-cardInfo mb-4">{job.description}</p>
        <button className="bg-cardBtnNtr text-cardHd py-2 px-4 rounded-full transition-all hover:bg-cardBtnHvr">
          Başvur
        </button>
      </div>

      <div className="p-6 border-t border-cardBorder dark:border-soft-caramel flex items-center justify-between gap-2 text-cardInfo">
        
      
        <div className="flex items-center space-x-2">
          <FaRegClock className="mr-2" />
          <span className="text-cardInfo truncate">{job.jobType}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Salary:</span>
          <span className="text-cardInfo truncate">Budget: {`$${job.budget.min} - $${job.budget.max}`}</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="font-semibold">Değerlendirme:</span>
          <span className="text-cardInfo truncate">{job.rating ? `${job.rating} / 5` : 'Henüz değerlendirme yok'}</span>
        </div>

      </div>

    </div>
  </Tilt>
</div>

  );
};

export default Card;
