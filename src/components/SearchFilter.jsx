import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [budget, setBudget] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");

  // Verileri güncellerken filtreyi tetikle
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch({
      searchTerm: e.target.value,
      jobType,
      budget,
      experienceLevel,
      location,
      language,
    });
  };
  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
    onSearch({
      searchTerm,
      jobType: e.target.value,
      budget,
      experienceLevel,
      location,
      language,
    });
  };
  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
    onSearch({
      searchTerm,
      jobType,
      budget: e.target.value,
      experienceLevel,
      location,
      language,
    });
  };
  const handleExperienceLevelChange = (e) => {
    setExperienceLevel(e.target.value);
    onSearch({
      searchTerm,
      jobType,
      budget,
      experienceLevel: e.target.value,
      location,
      language,
    });
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onSearch({
      searchTerm,
      jobType,
      budget,
      experienceLevel,
      location: e.target.value,
      language,
    });
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    onSearch({
      searchTerm,
      jobType,
      budget,
      experienceLevel,
      location,
      language: e.target.value,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      searchTerm,
      jobType,
      budget,
      experienceLevel,
      location,
      language,
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-7xl p-6 bg-beige dark:bg-cardHover rounded-md shadow-lg fixed top-24 left-0 right-0 mx-auto"
      >
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <div className="flex flex-col w-full md:w-1/3">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Which job are you looking for?"
              className="p-3 border border-gray-300 text-black rounded-md"
            />
          </div>

          <div className="flex space-x-4 w-full md:w-2/3">
            <select
              value={location}
              onChange={handleLocationChange}
              className="p-3 border border-gray-300 text-black rounded-md w-full md:w-1/2"
            >
              <option value="">Select Location</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Ankara">Ankara</option>
              <option value="Izmir">Izmir</option>
              <option value="Bursa">Bursa</option>
            </select>

            <button
              type="submit"
              className="p-3 bg-cardBtnNtr text-cardHd rounded-md w-full md:w-auto transition-all hover:bg-cardBtnHvr"
            >
              Search
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-80 p-6 bg-beige dark:bg-deep-mocha rounded-md shadow-lg fixed top-96 left-4"
      >
        <form onSubmit={handleSearchSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Budget"
            className="p-3 border border-gray-300 text-black rounded-md"
          />

          <select
            value={experienceLevel}
            onChange={handleExperienceLevelChange}
            className="p-3 border border-gray-300 text-black rounded-md"
          >
            <option value="">Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>

          <input
            type="text"
            value={language}
            onChange={handleLanguageChange}
            placeholder="Language"
            className="p-3 border border-gray-300 text-black rounded-md"
          />
        </form>
      </motion.div>
    </>
  );
};

export default SearchFilter;
