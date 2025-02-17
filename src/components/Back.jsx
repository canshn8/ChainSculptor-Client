import React, { useEffect, useState } from "react";
import backM from "../assets/backM.webp";
import "../index.css";
import { FaMousePointer } from "react-icons/fa";

const ChainSculptor = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      if (scrolled) return;
      const particle = document.createElement("div");
      particle.classList.add("particle");
      document.body.appendChild(particle);

      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = "rgba(255, 255, 255, 0.8)";

      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animation = `particleAnimation ${
        Math.random() * 5 + 3
      }s linear infinite`;

      setTimeout(() => {
        particle.remove();
      }, 4000);
    };

    const interval = setInterval(createParticle, 150);

    return () => clearInterval(interval);
  }, [scrolled]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-700 ${
        scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundImage: `url(${backM})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="relative text-center text-white z-10 animate-fadeUp h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold animate-bounceUp mb-4">
          Chain Sculptor
        </h1>
        <p className="text-3xl mb-4 cursor-pointer">
          <span className="inline-block">
            <i className="fas fa-mouse-pointer"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChainSculptor;
