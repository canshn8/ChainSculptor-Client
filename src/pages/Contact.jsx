import React, { useState } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesaj gönderildi!");
    // Buraya formu göndermek için API isteği ekleyebilirsiniz.
  };

  return (
    <div>
      <Helmet>
        <title>İletişim | Freelance Platform</title>
        <meta name="description" content="Bizimle iletişime geçin ve projeleriniz için destek alın." />
        <meta name="keywords" content="iletişim, destek, müşteri hizmetleri, freelance, iş görüşmesi" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="İletişim | Freelance Platform" />
        <meta property="og:description" content="Projeleriniz ve destek talepleriniz için bizimle iletişime geçebilirsiniz." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | Freelance Platform" />
        <meta name="twitter:description" content="Projeleriniz ve destek talepleriniz için bizimle iletişime geçebilirsiniz." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />
      </Helmet>


    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-darkBrown mb-10">İletişim</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Sol Kısım - İletişim Detayları */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-darkBrown mb-4">Bize Ulaşın</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            İş projeleriniz, önerileriniz veya sorularınız için bizimle iletişime geçebilirsiniz. Her zaman yardıma hazırız.
          </p>
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            <strong>Adres:</strong> İstanbul, Türkiye
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            <strong>Email:</strong> example@email.com
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400">
            <strong>Telefon:</strong> +90 123 456 7890
          </div>
        </div>

        {/* Sağ Kısım - Form */}
        <div className="bg-white dark:bg-bej p-8 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-darkBrown mb-2">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cardBtnNtr dark:bg-bej dark:text-gray-600 dark:border-gray-300 mb-3"
                placeholder="Adınızı girin"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-darkBrown mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cardBtnNtr dark:bg-bej dark:text-gray-600 dark:border-gray-300 mb-3"
                placeholder="E-posta adresinizi girin"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold text-darkBrown mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cardBtnNtr dark:bg-bej dark:text-gray-600 dark:border-gray-300 mb-3"
                rows="6"
                placeholder="Mesajınızı buraya yazın"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cardHd text-white py-2 px-8 rounded-full hover:bg-cardTitle transition duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}
