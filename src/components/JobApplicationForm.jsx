import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRegAddressCard, FaRegPaperPlane, FaFileUpload } from 'react-icons/fa';

const JobApplicationForm = () => {
  const [cv, setCv] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  // Handle file selection for CV
  const handleCvChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCv(file);
    }
  };

  // Handle text input for cover letter
  const handleCoverLetterChange = (event) => {
    setCoverLetter(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>İş Başvurusu | Freelance Platform</title>
        <meta name="description" content="Freelance projelere başvurun ve yeteneklerinizi sergileyin." />
        <meta name="keywords" content="iş başvurusu, freelance, proje, başvuru, iş fırsatları" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="İş Başvurusu | Freelance Platform" />
        <meta property="og:description" content="Projelerde yer almak için iş başvurusu yapın ve freelance fırsatları değerlendirin." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/jobapplication" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İş Başvurusu | Freelance Platform" />
        <meta name="twitter:description" content="Projelerde yer almak için iş başvurusu yapın ve freelance fırsatları değerlendirin." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />
      </Helmet>


    <div className="bg-beige text-dark-brown p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Job Application</h2>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
        </div>

        {/* CV Upload Section */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="cv">
            Upload Your CV
          </label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleCvChange}
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
          {cv && (
            <p className="mt-2 text-sm text-dark-brown">
              CV Uploaded: <strong>{cv.name}</strong>
            </p>
          )}
        </div>

        {/* Cover Letter Section */}
        <div>
          <label className="block text-sm font-semibold text-dark-brown" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            value={coverLetter}
            onChange={handleCoverLetterChange}
            placeholder="Tell us why you're the perfect candidate"
            className="w-full p-3 rounded-lg border border-light-brown focus:ring-2 focus:ring-primary transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-dark-brown text-white p-3 rounded-lg flex items-center justify-center hover:bg-primary transition"
        >
          <FaRegPaperPlane className="mr-2" /> Submit Application
        </button>
      </form>
    </div>
    </div>
  );
};

export default JobApplicationForm;
