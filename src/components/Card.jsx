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
      
      <div className="h-64 min-w-96 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg)` }}></div>

      <div className="p-6">
        {/* Başlık ve Kategori */}
        <div className="border-b border-cardBorder dark:border-soft-caramel mb-4 flex items-center">
          <div>
            <h3 className="text-2xl font-bold text-cardHd">{job.title}</h3>
            <p className="mt-2 text-sm text-cardInfo">{job.categories}</p>
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-cardInfo mb-4">{job.description}</p>

        {/* Fiyat Alanı */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Salary:</span>
            <span className="text-cardInfo truncate">Budget: {`$${job.budget.min} - $${job.budget.max}`}</span>
          </div>
        </div>

        {/* Başvuru Butonu */}
        <button className="bg-cardBtnNtr text-cardHd py-2 px-4 rounded-full transition-all hover:bg-cardBtnHvr mt-4 w-full">
          Başvur
        </button>
      </div>

      {/* İşveren Bilgisi */}
      <div className="p-6 border-t border-cardBorder dark:border-soft-caramel flex items-center">
        <img className="w-10 h-10 rounded-full mr-4 bg-cover" style={{ backgroundImage: `url(https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png)` }} alt={`Avatar of ${job.employerName}`} />
        <div className="text-sm">
          <p className="text-cardHd font-semibold leading-none">{job.employerName}</p>
          <p className="text-gray-600">{job.postDate}</p>
        </div>
      </div>

    </div>
  </Tilt>
</div>
  );
};

export default Card;
