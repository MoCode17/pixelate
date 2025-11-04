"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      id="navbar"
      className="fixed z-50 transition-all duration-300 w-full h-16 top-4 bg-transparent flex justify-center items-center"
    >
      <div
        className={`rounded-full bg-white/50 py-4 backdrop-blur-xl shadow-lg border border-gray-200/50 ${
          isScrolled ? "px-6 py-2" : "w-[90vw] max-w-7xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "space-x-6" : ""
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center">
            {/* <div
              className={`font-bold text-electric transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-2xl"
              }`}
            >
              PIXELATE
            </div> */}
            <Link
              href="/"
              className="hover:cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/PixelateLogo.svg"
                alt="Pixelate Labs"
                width={isScrolled ? 100 : 180}
                height={isScrolled ? 30 : 36}
                priority
                className="object-contain"
              />
            </Link>
          </div>
          {/* Links Section */}
          <div
            className={`hidden md:flex transition-all duration-300 ${
              isScrolled ? "space-x-4" : "space-x-16"
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
          {/* CTA Section */}
          <Link
            href="/landing"
            className={`bg-fanta hover:bg-fanta-dark hover:scale-105 hover:shadow-xl text-white rounded-full font-semibold transition-all duration-300 ${
              isScrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
            }`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
