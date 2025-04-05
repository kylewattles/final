import React, { useState } from "react";
import "./DarkMode.css"; // Import CSS for dark mode styles

export const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
    document.body.classList.toggle("dark-mode", !darkMode); // Add/remove dark mode class on the body
  };

  return (
    <div className="dark-mode-toggle">
      <button className="btn btn-outline-secondary" onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};