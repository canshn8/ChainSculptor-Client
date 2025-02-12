import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menüyü açıp kapatmak için state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="bg-white dark:bg-bej rounded-lg shadow-lg m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 md:mt-5 flex justify-between font-semibold items-center relative">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Logo */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-navLink">
              ChainSculptor
            </span>
          </a>

          {/* Burger menüsünü tetiklemek için buton */}
          <button
            onClick={toggleMenu}
            className={`md:hidden text-navLink transition-all duration-300 absolute right-4 top-4`} // Sağ üstte sabit
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Burger ikonu */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                className={`${isMenuOpen ? "hidden" : ""}`}
              />
              {/* Çarpı ikonu */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className={`${!isMenuOpen ? "hidden" : ""}`}
              />
            </svg>
          </button>

          {/* Menüyü açıp kapatmayı kontrol eden div */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } transition-all ease-in-out duration-300 w-full md:flex md:w-auto md:order-1 bg-transparent`} // Arka plan rengi sayfa arka planına uyacak
            id="navbar-user"
          >
            <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 border-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent items-end text-right">
              {/* Menü öğeleri */}
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-navLink rounded hover:text-cardBtnNtr hover:border-b-2 hover:border-cardBtnNtr transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-navLink rounded hover:text-cardBtnNtr hover:border-b-2 hover:border-cardBtnNtr transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="block py-2 px-3 text-navLink rounded hover:text-cardBtnNtr hover:border-b-2 hover:border-cardBtnNtr transition-all"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
