import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt'; 
import { FaBuilding, FaRegClock } from 'react-icons/fa'; 
import CardDetails from "./CardDetails";

const Card = ({ job, onCardClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // %50'si görünür olduğunda
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
      className={`p-6 w-full max-w-xl mx-auto mb-6 cursor-pointer ${isVisible ? "animate-slide-in" : ""}`} // Kart genişliği arttı
      onClick={() => onCardClick(job)} // TIKLANINCA JOB BİLGİLERİNİ GÖNDERİYORUZ

      >
      <Tilt className="tilt-card" tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={300}>
        <div className="bg-white dark:bg-bej rounded-lg shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-105 transform duration-300">
          {/* Başlık ve Şirket Bilgisi */}
          <div className="p-6 border-b border-cardBorder dark:border-soft-caramel flex items-center">
            <FaBuilding className="text-cardHd mr-2" />
            <div>
              <h3 className="text-2xl font-bold text-cardHd">{job.title}</h3>
              <p className="mt-2 text-sm text-cardInfo">{job.company}</p>
            </div>
          </div>

          {/* Kart İçeriği ve Button */}
          <div className="p-6">
            <p className="text-cardInfo mb-4">{job.description}</p>
            <button className="bg-cardBtnNtr text-cardHd py-2 px-4 rounded-full transition-all hover:bg-cardBtnHvr">
              Başvur
            </button>
          </div>

          {/* Alt Bilgiler */}
          <div className="p-6 border-t border-cardBorder dark:border-soft-caramel flex items-center justify-between text-cardInfo">
            <div className="flex items-center">
              <FaRegClock className="mr-2" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">Salary: </span> ${job.salary}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
