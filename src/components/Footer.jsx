import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-bej rounded-lg shadow-lg m-4">
      <div className="max-w-screen-xl mx-auto md:px-0 px-1">
        <div className="sm:flex sm:items-center sm:justify-between justify-center items-center flex-col">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {/* Buraya logoyu veya ismi ekleyebilirsin */}
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="/" className="hover:underline">
            Can™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
