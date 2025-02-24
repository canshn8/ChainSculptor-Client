import React, { useState, useEffect, useRef } from "react";
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
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-10 w-[80%] max-w-[60vw] h-[85vh] overflow-y-auto relative"
      >
        <button
          className="absolute top-6 right-6 text-gray-800 text-4xl"
          onClick={onClose}
        >
          ✕
        </button>

        <button
          onClick={toggleBookmark}
          className="absolute top-6 right-16 text-4xl text-gray-800"
        >
          <FaBookmark color={isBookmarked ? "#ffcc00" : "#ccc"} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4 relative">
            <img
              src={
                job.imageUrl ||
                "https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg"
              }
              alt={job.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {job.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{job.description}</p>


            <ul className="text-sm text-gray-700 mb-6">
              {job.details.map((detail, index) => (
                <li key={index} className="flex items-center mb-1">
                  {detail}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mb-4">
              <div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() =>
                  (window.location.href = `mailto:${job.employer.email}?subject=Application: ${job.title}`)
                }
                className="bg-dark-brown text-cardTxt px-6 py-3 rounded-lg text-xl transition-all duration-300 transform hover:text-cardBtnHvr hover:bg-[#4b3f35] hover:scale-105 hover:shadow-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-darkBrown">Categories</h3>
          <ul className="list-disc ml-8 mt-4 text-darkBrown">
            {job.categories?.length > 0 ? (
              job.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))
            ) : (
              <li>No categories added yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
