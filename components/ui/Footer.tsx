"use client";

import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-4 sm:px-8 lg:px-[20rem] relative">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex space-x-4 lg:-ml-2">
          <a
            href="https://instagram.com/rmdhani_ii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaInstagram size={24} className="text-black" />
          </a>
          <a
            href="https://wa.me/6285158779239"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaWhatsapp size={24} className="text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/al-fitra-nur-ramadhani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaLinkedin size={24} className="text-black" />
          </a>
          <a
            href="https://github.com/alfitranurr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaGithub size={24} className="text-black" />
          </a>
        </div>
        <p
          className="text-sm text-center sm:text-right lg:ml-104 whitespace-nowrap overflow-visible"
          style={{ position: "relative", left: "auto" }}
        >
          © 2025 Fitra Nur Ramadhani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
