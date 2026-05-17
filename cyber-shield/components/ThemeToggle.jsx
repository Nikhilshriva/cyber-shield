"use client";

export default function ThemeToggle() {

  const toggleTheme = () => {
    document.body.classList.toggle("light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 bg-white/10 border border-white/10 backdrop-blur-xl px-4 py-3 rounded-full"
    >
      🌗
    </button>
  );
}