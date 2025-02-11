import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookmark } from "react-icons/fa"; // İkonu buradan alıyoruz

const CardDetails = ({ job, onClose }) => {
  const modalRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false); // Favoriye eklenip eklenmediğini tutacak durum

  // ESC tuşuna basınca modalı kapat
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(); // ESC tuşuna basıldığında modalı kapat
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Dışarı tıklamayı algıla
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); 
    }
  };

  // Favorilere ekle
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (!job) return null;

  return (
    <AnimatePresence>
      {job && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
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
            {/* Kapatma Butonu */}
            <button
              className="absolute top-6 right-6 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-4xl"
              onClick={onClose}
            >
              ✕
            </button>
      
            {/* Favorilere ekle Butonu */}
            <button
              onClick={toggleBookmark}
              className="absolute top-6 left-6 text-4xl text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <FaBookmark color={isBookmarked ? "#ffcc00" : "#ccc"} />
            </button>

            {/* Başlık ve Açıklama */}
            <h2 className="text-5xl font-bold text-darkBrown text-center">{job.title}</h2>
            <p className="text-xl text-darkBrown mt-6">{job.description}</p>
        
            {/* Şirket Bilgisi */}
            <div className="mt-8 space-y-5">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300 mr-5">
                  {/* Şirketin Profil Resmi (Opsiyonel) */}
                </div>
                <p className="text-2xl font-semibold text-darkBrown">{job.employer.name}</p>
                <p className="text-lg text-darkBrown">{job.employer.email}</p>
              </div>
            </div>
        
            {/* İş Kategorileri */}
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-darkBrown">Kategoriler</h3>
              <ul className="list-disc ml-8 mt-4 text-darkBrown">
                {job.categories && job.categories.length > 0 ? (
                  job.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))
                ) : (
                  <li>Henüz kategori eklenmemiş.</li>
                )}
              </ul>
            </div>
        
            {/* Maaş Bilgisi */}
            <div className="mt-8">
              <p className="text-xl text-darkBrown">
                <strong>Bütçe: </strong> ${job.budget.min} - ${job.budget.max}
              </p>
            </div>

            {/* Teslim Süresi */}
            <div className="mt-8">
              <p className="text-xl text-darkBrown">
                <strong>Teslim Süresi: </strong> {job.deliveryTime}
              </p>
            </div>

            {/* İş Tipi ve Durumu */}
            <div className="mt-8">
              <p className="text-xl text-darkBrown">
                <strong>İş Tipi: </strong> {job.jobType}
              </p>
              <p className="text-xl text-darkBrown">
                <strong>Durum: </strong> {job.status}
              </p>
            </div>
        
            {/* Başvurular */}
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-darkBrown">Başvurular</h3>
              {job.freelancerApplications && job.freelancerApplications.length > 0 ? (
                job.freelancerApplications.map((application, index) => (
                  <div key={index} className="border-t mt-4 pt-4">
                    <p className="font-semibold">Freelancer: {application.freelancer.name}</p>
                    <p><strong>Teklif Fiyatı:</strong> ${application.offerPrice}</p>
                    <p><strong>Tahmini Zaman:</strong> {application.estimatedTime}</p>
                    <p><strong>Portföy:</strong> {application.portfolio || "Portföy belirtilmemiş."}</p>
                    <p><strong>Durum:</strong> {application.status}</p>
                  </div>
                ))
              ) : (
                <p>Henüz başvuru yapılmamış.</p>
              )}
            </div>
        
            {/* Şirket Linkleri */}
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-darkBrown">Bizi Takip Edin</h3>
              <div className="flex space-x-5 mt-4">
                {job.socialLinks?.facebook && <a href={job.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500">Facebook</a>}
                {job.socialLinks?.twitter && <a href={job.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">Twitter</a>}
                {job.socialLinks?.linkedin && <a href={job.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-600">LinkedIn</a>}
              </div>
            </div>
        
            {/* Başvuru Butonu */}
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
