"use client";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-30 p-3 bg-transparent border-none cursor-pointer"
      aria-label="Scroll to top"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4L4 12H20L12 4Z" fill="white" />
      </svg>
    </button>
  );
}
