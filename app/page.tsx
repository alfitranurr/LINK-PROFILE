import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";
import { SiNpm } from "react-icons/si"; // Using SiNpm as a placeholder for NGL, as NGL doesn't have a standard icon

export default function Home() {
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
    { name: "NGL", url: "https://ngl.link/rmdhani_ii27833", icon: <SiNpm /> }, // Placeholder icon for NGL
  ];

  return (
    <main className="relative">
      <GridBackgroundDemo>
        <div className="relative z-20 flex flex-col items-center gap-4 px-2 sm:px-4 md:px-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[750px]"
            >
              <HoverBorderGradient
                containerClassName="rounded-full px-20 py-3 w-full md:min-w-[755px] flex items-center"
                className="text-xl font-semibold flex items-center"
              >
                <span className="mr-2 text-2xl">{link.icon}</span>
                {link.name}
              </HoverBorderGradient>
            </a>
          ))}
        </div>
      </GridBackgroundDemo>
      <ScrollToTopButton />
    </main>
  );
}
