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
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50 p-4"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-[1000px] h-[85vh] overflow-y-auto relative"
      >
        <button className="absolute top-6 right-6 text-gray-800 text-4xl" onClick={onClose}>✕</button>
        <button onClick={toggleBookmark} className="absolute top-6 right-16 text-4xl text-gray-800">
          <FaBookmark color={isBookmarked ? "#ffcc00" : "#ccc"} />
        </button>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="md:w-2/3">
            <div className="grid grid-cols-3 gap-2 mb-6 mt-6">
              {job.images && job.images.length > 0 ? (
                job.images.map((img, index) => (
                  <img key={index} src={img} alt={`Job Image ${index}`} className="w-full h-32 object-cover rounded-lg" />
                ))
              ) : (
                <img src="https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg" alt="Default" className="w-full h-32 object-cover rounded-lg col-span-3" />
              )}{job.images && job.images.length > 0 ? (
                job.images.map((img, index) => (
                  <img key={index} src={img} alt={`Job Image ${index}`} className="w-full h-32 object-cover rounded-lg" />
                ))
              ) : (
                <img src="https://www.sgstechnologies.net/sites/default/files/2021-08/future-webdesign.jpg" alt="Default" className="w-full h-32 object-cover rounded-lg col-span-3" />
              )}
            </div>

            <h3 className="text-xl font-semibold text-darkBrown mb-2">Details</h3>
            <div className="mb-6">
              <ul className="list-disc pl-5">
                {job.details && job.details.length > 0 ? (
                  job.details.map((detail, index) => (
                    <li key={index} className="text-gray-700">{detail}</li>
                  ))
                ) : (
                  <li className="text-gray-500">No details available.</li>
                )}
              </ul>
            </div>

            
          </div>

          <div className="md:w-1/3 mt-4">
            <h3 className="text-xl font-semibold text-darkBrown mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {job.tags && job.tags.length > 0 ? (
                job.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-gray-500">No tags available.</span>
              )}
            </div>

            <h3 className="text-xl font-semibold text-darkBrown mb-2">Categories</h3>
            <ul className="list-disc ml-8 mt-4 text-darkBrown">
              {job.categories && job.categories.length > 0 ? (
                job.categories.map((category, index) => <li key={index}>{category}</li>)
              ) : (
                <li>No categories added yet.</li>
              )}
            </ul>

            <h3 className="text-xl font-semibold text-darkBrown mb-2 mt-6">Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong>Budget:</strong> ${job.budget?.min || "-"} - ${job.budget?.max || "-"}</li>
              <li><strong>Delivery Time:</strong> {job.deliveryTime || "Not specified"}</li>
              <li><strong>Employer:</strong>İşverenin Profili {job.employer || "Anonymous"}</li>
              <li><strong>Job Type:</strong> {job.jobType || "N/A"}</li>
              <li><strong>Status:</strong> {job.status || "Open"}</li>
              <li><strong>Escrow Status:</strong> {job.escrowStatus || "Pending"}</li>
              <li><strong>Payment Status:</strong> {job.paymentStatus || "Pending"}</li>
              <li><strong>Portfolio Required:</strong> {job.portfolio ? "Yes" : "No"}</li>
              <li><strong>Evaluation:</strong> {job.evaluation || "No evaluation provided"}</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => (window.location.href = `mailto:${job.employer?.email}?subject=Application: ${job.title}`)}
            className="bg-cardBtnNtr text-white px-6 py-3 rounded-lg text-xl transition-all duration-300 transform hover:bg-[#4b3f35] hover:scale-105 hover:shadow-lg"
          >
            Easy Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
