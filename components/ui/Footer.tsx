"use client";

import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-4 sm:px-8 md:px-80">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/rmdhani_ii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} className="text-black" />
          </a>
          <a
            href="https://wa.me/6285158779239"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} className="text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/al-fitra-nur-ramadhani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="text-black" />
          </a>
          <a
            href="https://github.com/alfitranurr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="text-black" />
          </a>
        </div>
        <p className="text-sm text-center sm:text-right">
          © 2025 Fitra Nur Ramadhani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
