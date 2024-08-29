import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="w-14 h-7 bg-gray-700 rounded-full p-1 cursor-pointer flex items-center relative"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon 
        className={`absolute left-2 text-yellow-400 transition-opacity duration-300 ${
          darkMode ? 'opacity-100' : 'opacity-0'
        }`} 
        size={12} 
      />
      <div
        className={`w-5 h-5 rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center
          ${darkMode ? 'translate-x-7 bg-gray-400' : 'bg-yellow-400'}`}
      />
      <FaSun 
        className={`absolute right-2 text-yellow-600 transition-opacity duration-300 ${
          darkMode ? 'opacity-0' : 'opacity-100'
        }`} 
        size={12} 
      />
    </div>
  );
}

export default ThemeToggle;