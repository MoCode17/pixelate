"use client";
import React from "react";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-electric">PIXELATE</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Success Stories
            </button>
          </div>
          <button className="bg-coral hover:bg-coraldark text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
