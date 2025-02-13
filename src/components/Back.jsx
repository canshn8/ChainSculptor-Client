import React, { useEffect } from 'react';

const ChainSculptor = () => {

  useEffect(() => {
    // Partikülleri rastgele yarat
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      document.body.appendChild(particle);

      // Randomize boyut
      const size = Math.random() * 10 + 5; // 5px - 15px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Beyaz tonunda

      // Particle hareketi
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animation = `particleAnimation ${Math.random() * 5 + 3}s linear infinite`;

      // Remove after animation ends
      setTimeout(() => {
        particle.remove();
      }, 4000);
    };

    setInterval(createParticle, 150);

  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex justify-center items-center animate-fadeIn"
         style={{ backgroundImage: "url('https://i.ibb.co/mmBQKb3/DALL-E-2025-02-13-22-07-41-A-sophisticated-elegant-and-eye-catching-background-for-a-freelancer-plat.webp')" }}>  {/* Burada URL'yi değiştirin */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="relative text-center text-white z-10 animate-fadeUp">
        <h1 className="text-6xl font-bold animate-titleUp">Chain Sculptor</h1>
        <p className="mt-4 text-xl">Zarif bir deneyim, modern bir yaklaşım.</p>
      </div>
    </div>
  );
}

export default ChainSculptor;
