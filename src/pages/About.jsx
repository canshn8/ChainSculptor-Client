import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
       <Helmet>
          <title>Hakkımızda | Freelance Platform</title>
          <meta name="description" content="Freelance platformumuzun sunduğu hizmetler ve neden bizi tercih etmeniz gerektiği hakkında bilgi." />
          <meta name="keywords" content="freelance platform, hizmetler, müşteri odaklı, işbirliği" />
        </Helmet>
    
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      {/* Başlık */}
      <h1 className="text-4xl font-bold text-center text-darkBrown mb-10">Hakkımızda</h1>

      {/* Hakkımızda metni */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Freelance platformumuz, işinizi büyütmek için doğru yetenekleri bulmanızı sağlar. 
          Hem küçük hem büyük işletmelere hizmet veriyor, projelerinizde yüksek kaliteyi zamanında teslim almanızı sağlıyoruz. 
          Tek yapmanız gereken, ihtiyaçlarınızı bizimle paylaşmak, geri kalanını biz hallediyoruz.
        </p>
      </div>

      {/* Neden Biz? */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white dark:bg-bej p-8 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-darkBrown mb-6">Neden Biz?</h2>
          <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
            <li><span className="font-semibold">Yetenekli Freelance Uzmanlar:</span> Farklı sektörlerden en iyi profesyoneller.</li>
            <li><span className="font-semibold">Zamanında Teslim:</span> Her proje, söz verdiğimiz tarihte tamamlanır.</li>
            <li><span className="font-semibold">Global Erişim:</span> Dünyanın her yerinden çalışanlarla işbirliği yapın.</li>
            <li><span className="font-semibold">Özelleştirilmiş Çözümler:</span> Sizin için en uygun stratejiler ve hizmetler.</li>
            <li><span className="font-semibold">Müşteri Odaklılık:</span> İşinizi anlıyor, hedeflerinize uygun çözümler sunuyoruz.</li>
          </ul>
        </div>

        {/* Hizmetlerimiz */}
        <div className="bg-white dark:bg-bej p-8 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-darkBrown mb-6">Hizmetlerimiz</h2>
          <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
            <li><span className="font-semibold">Web Tasarım & Geliştirme:</span> Modern, kullanıcı dostu ve performans odaklı web siteleri.</li>
            <li><span className="font-semibold">Mobil Uygulama Geliştirme:</span> Android ve iOS platformlarında verimli mobil çözümler.</li>
            <li><span className="font-semibold">Dijital Pazarlama & SEO:</span> Online görünürlüğünüzü arttıran stratejiler.</li>
            <li><span className="font-semibold">Yazılım Geliştirme:</span> İhtiyaca özel yazılım çözümleri ve otomasyon.</li>
            <li><span className="font-semibold">Grafik Tasarım & Video:</span> Görsel anlamda fark yaratan tasarımlar ve etkileyici videolar.</li>
          </ul>
        </div>
      </div>

      {/* Başarı Hikayelerimiz */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-darkBrown text-center mb-8">Başarı Hikayelerimiz</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white dark:bg-bej p-6 rounded-xl shadow-md w-full md:w-1/3 hover:shadow-xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1581305140009-1db506f2e1cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Zm9vZHN8ZW58MHx8fHwxNjc5NzQzMTk5&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Project"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-darkBrown">E-Ticaret Sitesi Tasarımı</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Küçük işletmeler için özel olarak tasarlanmış e-ticaret platformu geliştirdik. Kullanıcı dostu arayüz ve yüksek
              performans sunduk.
            </p>
          </div>

          <div className="bg-white dark:bg-bej p-6 rounded-xl shadow-md w-full md:w-1/3 hover:shadow-xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1602775313178-05b13f56c678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8ZnJvbSByZWZlcmVuY2V8ZW58MHx8fHwxNjc5NzQzMTk5&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Project"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-darkBrown">SEO Stratejisi & Dijital Pazarlama</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dijital pazarlama stratejisiyle küçük işletmelerin organik trafiğini %45 artırdık. SEO odaklı içeriklerle
              görünürlük sağladık.
            </p>
          </div>

          <div className="bg-white dark:bg-bej p-6 rounded-xl shadow-md w-full md:w-1/3 hover:shadow-xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1571171637578-6b5c8f57f7ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8b3JkZXJ8ZW58MHx8fHwxNjc5NzQzMTk5&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Project"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-darkBrown">Mobil Uygulama Tasarımı</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Modern mobil uygulamalar için kullanıcı deneyimi (UX) tasarımı yaptık. Hem iOS hem Android platformlarında
              performans sağladık.
            </p>
          </div>
        </div>
      </div>

      {/* İletişim ve Call-to-Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-darkBrown mb-6">Projeleriniz İçin Bizimle Çalışın!</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          İhtiyaçlarınıza özel çözümler sunmak için buradayız. Bizimle iletişime geçin ve projelerinizi
          bir adım öteye taşıyın.
        </p>
        <button className="bg-cardHd text-white py-2 px-8 rounded-full hover:bg-cardTitle transition duration-300">
          Bizimle İletişime Geçin
        </button>
      </div>
    </div>
    </div>
  );
}
