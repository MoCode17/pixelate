"use client";
import React, { useState, useEffect } from "react";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled
          ? "top-4 left-1/2 transform -translate-x-1/2 w-auto rounded-full bg-white/50 backdrop-blur-xl shadow-lg border border-gray-200/50"
          : "top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled ? "px-6 py-2" : "max-w-7xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-12 space-x-6" : "h-16"
          }`}
        >
          <div className="flex items-center">
            <div
              className={`font-bold text-electric transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-2xl"
              }`}
            >
              PIXELATE
            </div>
          </div>
          <div
            className={`hidden md:flex transition-all duration-300 ${
              isScrolled ? "space-x-4" : "space-x-8"
            }`}
          >
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`text-gray-700 hover:text-blue-600 transition-all duration-300 ${
                isScrolled ? "text-sm" : ""
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className={`text-gray-700 hover:text-blue-600 transition-all duration-300 ${
                isScrolled ? "text-sm" : ""
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`text-gray-700 hover:text-blue-600 transition-all duration-300 ${
                isScrolled ? "text-sm" : ""
              }`}
            >
              Success Stories
            </button>
          </div>
          <button
            className={`bg-coral hover:bg-coraldark text-white rounded-lg font-semibold transition-all duration-300 ${
              isScrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
