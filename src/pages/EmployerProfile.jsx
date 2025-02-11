// EmployerProfile.js
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaLinkedin } from "react-icons/fa";

const EmployerProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const user = {
    name: "Tech Solutions",
    email: "contact@techsolutions.com",
    phone: "+1 (555) 123-4567",
    companyName: "Tech Solutions",
    linkedin: "https://linkedin.com/company/techsolutions",
    about: "Tech Solutions, teknoloji alanında inovatif çözümler sunan bir yazılım firmasıdır. Genç ve dinamik ekibimize katılacak yetenekli profesyoneller arıyoruz.",
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
       <Helmet>
        <title>İşveren Profili | Freelance Platform</title>
        <meta name="description" content="İşveren olarak platformda profilinizi oluşturun ve en iyi freelance uzmanlarla çalışmaya başlayın." />
        <meta name="keywords" content="işveren, profil, freelance, uzman, proje" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="İşveren Profili | Freelance Platform" />
        <meta property="og:description" content="Freelance uzmanlarla çalışmaya başlamak için işveren profilinizi oluşturun." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/employer" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İşveren Profili | Freelance Platform" />
        <meta name="twitter:description" content="Freelance uzmanlarla çalışmaya başlamak için işveren profilinizi oluşturun." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />
      </Helmet>

    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-bej rounded-xl shadow-md space-y-6">
      <h2 className="text-3xl font-bold text-darkBrown">İşveren Profili</h2>
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
          <p className="text-xl text-darkBrown">{editMode ? <input type="text" value={user.companyName} className="border-b-2 border-darkBrown bg-transparent focus:outline-none" /> : user.companyName}</p>
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

export default EmployerProfile;
