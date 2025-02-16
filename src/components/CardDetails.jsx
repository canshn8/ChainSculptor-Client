import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookmark } from "react-icons/fa";

const CardDetails = ({ job, onClose }) => {
  const modalRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); 
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      {job && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50"
          onClick={handleClickOutside}
        >
          <motion.div
            ref={modalRef}
            className="bg-white dark:bg-bej rounded-2xl shadow-2xl p-10 w-[80%] max-w-[60vw] h-[85vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className="absolute top-6 right-6 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-4xl"
              onClick={onClose}
            >
              ✕
            </button>
      
            <button
              onClick={toggleBookmark}
              className="absolute top-6 right-16 text-4xl text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaBookmark color={isBookmarked ? "#ffcc00" : "#ccc"} />
            </button>

            <h2 className="text-5xl font-bold text-darkBrown text-center mt-10">{"asad "+job.title}</h2>
            <p className="text-xl text-darkBrown mt-6 text-center">{"asdasdasdasdas"+job.description}</p>
        
            <div className="mt-8 grid gap-6">
              <div>
                <h3 className="text-3xl font-semibold text-darkBrown">Şirket Bilgileri</h3>
                <p className="text-xl text-darkBrown mt-2"><strong>Şirket:</strong> {job.employer.email}</p>
                <p className="text-xl text-darkBrown"><strong>İletişim:</strong> {job.employer.email}</p>
              </div>
      
              <div>
                <h3 className="text-3xl font-semibold text-darkBrown">İş Bilgileri</h3>
                <p className="text-xl text-darkBrown mt-2"><strong>Bütçe:</strong> ${job.budget.min} - ${job.budget.max}</p>
                <p className="text-xl text-darkBrown"><strong>Teslim Süresi:</strong> {job.deliveryTime}</p>
                <p className="text-xl text-darkBrown"><strong>İş Tipi:</strong> {job.jobType}</p>
                <p className="text-xl text-darkBrown"><strong>Durum:</strong> {job.status}</p>
              </div>
            </div>
      
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-darkBrown">Kategoriler</h3>
              <ul className="list-disc ml-8 mt-4 text-darkBrown">
                {job.categories?.length > 0 ? (
                  job.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))
                ) : (
                  <li>Henüz kategori eklenmemiş.</li>
                )}
              </ul>
            </div>
      
            <div className="mt-8 text-center">
              <button
                onClick={() => window.location.href = `mailto:${job.employer.email}?subject=Başvuru: ${job.title}`}
                className="bg-dark-brown text-cardTxt px-6 py-3 rounded-lg text-xl transition-all duration-300 transform hover:text-cardBtnHvr hover:bg-[#4b3f35] hover:scale-105 hover:shadow-lg"
              >
                Başvur
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CardDetails;
