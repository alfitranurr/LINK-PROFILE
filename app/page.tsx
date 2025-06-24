"use client";

import { useEffect, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "@/components/ui/Footer";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import "animate.css";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "Portfolio",
      url: "https://alfitranurrportfolio.vercel.app/",
      icon: <FaBriefcase />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rmdhani_ii",
      icon: <FaInstagram />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6285158779239",
      icon: <FaWhatsapp />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/al-fitra-nur-ramadhani/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/alfitranurr",
      icon: <FaGithub />,
    },
    { name: "NGL", url: "https://ngl.link/rmdhani_ii27833", icon: <SiNpm /> },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Full-width white box at the top */}
      <div className="w-full bg-white py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
            Welcome to Al Fitra Nur R's Profile
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Connect with me through my social links below!
          </p>
        </div>
      </div>
      <GridBackgroundDemo>
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 px-4 py-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate__animated ${
                isMounted ? "animate__fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <HoverBorderGradient
                containerClassName="rounded-full px-10 sm:px-10 md:px-20 lg:px-32 py-2 w-[280px] sm:w-[400px] md:w-[700px] lg:w-[800px] xl:w-[900px] flex items-center justify-center"
                className="text-base sm:text-lg md:text-xl font-semibold flex items-center justify-center"
              >
                <span className="mr-3 text-xl sm:text-2xl">{link.icon}</span>
                {link.name}
              </HoverBorderGradient>
            </a>
          ))}
        </div>
      </GridBackgroundDemo>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
