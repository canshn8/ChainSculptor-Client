// FreelancerProfile.js
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaLinkedin } from "react-icons/fa";

const FreelancerProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const user = {
    name: "Hasan Can Şahin",
    email: "cannshn.0@gmail.com",
    phone: "+90 539 831 82 02",
    skills: "React, Node.js, JavaScript, Web Development",
    linkedin: "https://linkedin.com/in/hasancansahin",
    about: "Yazılım geliştirme konusunda tutkulu, sürekli öğrenmeye ve kendimi geliştirmeye çalışıyorum. Teknoloji ile ilgili yeni gelişmeleri takip etmekten keyif alıyorum.",
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <Helmet>
        <title>Freelancer Profili | Freelance Platform</title>
        <meta name="description" content="Freelancer olarak profilinizi oluşturun ve projelerde yer almak için iş teklifleri alın." />
        <meta name="keywords" content="freelancer, profil, iş, proje, iş bulma" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Freelancer Profili | Freelance Platform" />
        <meta property="og:description" content="Freelancer olarak iş fırsatları ve projelerde yer almak için profil oluşturun." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/freelancer" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Freelancer Profili | Freelance Platform" />
        <meta name="twitter:description" content="Freelancer olarak iş fırsatları ve projelerde yer almak için profil oluşturun." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />
      </Helmet>


    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-bej rounded-xl shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-darkBrown">Freelancer Profili</h2>
      <button
        onClick={toggleEditMode}
        className="bg-dark-brown text-white px-6 py-2 rounded-lg hover:bg-[#4b3f35] transition"
      >
        {editMode ? "Kaydet" : "Düzenle"}
      </button>

      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-6 shadow-lg"></div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <FaUser size={24} />
          <p className="text-xl text-darkBrown">{editMode ? <input type="text" value={user.name} className="border-b-2 border-darkBrown bg-transparent focus:outline-none" /> : user.name}</p>
        </div>

        <div className="flex items-center space-x-4">
          <FaEnvelope size={24} />
          <p className="text-xl text-darkBrown">{editMode ? <input type="email" value={user.email} className="border-b-2 border-darkBrown bg-transparent focus:outline-none" /> : user.email}</p>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhone size={24} />
          <p className="text-xl text-darkBrown">{editMode ? <input type="text" value={user.phone} className="border-b-2 border-darkBrown bg-transparent focus:outline-none" /> : user.phone}</p>
        </div>

        <div className="flex items-center space-x-4">
          <FaBriefcase size={24} />
          <p className="text-xl text-darkBrown">{editMode ? <input type="text" value={user.skills} className="border-b-2 border-darkBrown bg-transparent focus:outline-none" /> : user.skills}</p>
        </div>

        <div className="flex items-center space-x-4">
          <FaLinkedin size={24} />
          <p className="text-xl text-darkBrown">{editMode ? <input type="url" value={user.linkedin} className="border-b-2 border-darkBrown bg-transparent focus:outline-none" /> : user.linkedin}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-darkBrown">Hakkında</h3>
        <p className="text-lg text-darkBrown mt-4">
          {editMode ? (
            <textarea value={user.about} className="w-full h-32 border-2 border-darkBrown bg-transparent p-2 focus:outline-none" />
          ) : (
            user.about
          )}
        </p>
      </div>
    </div>
    </div>
  );
};

export default FreelancerProfile;
