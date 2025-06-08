import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";

export default function Home() {
  const socialLinks = [
    { name: "Portfolio", url: "https://alfitranurrportfolio.vercel.app/" }, // Tambahan di paling atas
    { name: "Instagram", url: "https://instagram.com/rmdhani_ii" },
    { name: "WhatsApp", url: "https://wa.me/6285158779239" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/al-fitra-nur-ramadhani/",
    },
    { name: "GitHub", url: "https://github.com/alfitranurr" },
    { name: "NGL", url: "https://ngl.link/rmdhani_ii27833" },
  ];

  return (
    <main>
      <GridBackgroundDemo>
        <div className="relative z-20 flex flex-col items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverBorderGradient
                containerClassName="rounded-full px-10 py-3 min-w-[300px]"
                className="text-xl font-semibold text-center"
              >
                {link.name}
              </HoverBorderGradient>
            </a>
          ))}
        </div>
      </GridBackgroundDemo>
    </main>
  );
}
