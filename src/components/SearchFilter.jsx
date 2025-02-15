import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('');
  const [budget, setBudget] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevel(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
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
    <div className="flex">
      {/* Sol tarafta sabit filtreler */}
      <div className="w-80 p-6 bg-beige rounded-md shadow-lg fixed top-52 left-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search jobs..."
            className="p-3 border border-gray-300 text-black rounded-md"
          />
          
          <select
            value={jobType}
            onChange={handleJobTypeChange}
            className="p-3 border border-gray-300 text-black rounded-md"
          >
            <option value="">Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="freelance">Freelance</option>
          </select>

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
            value={location}
            onChange={handleLocationChange}
            placeholder="Location (e.g., city, country)"
            className="p-3 border border-gray-300 text-black rounded-md"
          />
          
          <input
            type="text"
            value={language}
            onChange={handleLanguageChange}
            placeholder="Language (e.g., English, Spanish)"
            className="p-3 border border-gray-300 text-black rounded-md"
          />

          <button
            type="submit"
            className="p-3 bg-cardBtnNtr text-cardHd rounded-md transition-all hover:bg-cardBtnHvr"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
