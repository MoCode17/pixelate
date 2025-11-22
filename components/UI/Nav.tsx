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
        className={`rounded-full bg-white/50 py-2 px-3 backdrop-blur-xl shadow-lg border border-gray-200/50 ${
          isScrolled ? "w-[90vw] md:w-auto" : "w-[90vw] max-w-7xl lg:px-4"
        }`}
      >
        <div
          className={`flex justify-between px-2 md:pl-4 lg:pl-4 items-center transition-all duration-300 ${
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
              className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 sm:scale-110 md:scale-120 xl:scale-140 xl:px-8"
            >
              <Image
                src="/images/PixelateLogo.svg"
                alt="Pixelate Labs"
                width={isScrolled ? 100 : 120}
                height={isScrolled ? 30 : 32}
                priority
                className="object-contain"
              />
            </Link>
          </div>
          {/* Links Section */}
          <div
            className={`hidden md:flex transition-all duration-300 px-2 ${
              isScrolled ? "space-x-4" : "md:space-x-8 lg:space-x-12"
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
            className={`bg-fanta hover:bg-fanta-dark hover:scale-105 text-sm py-2 hover:shadow-xl px-4 text-white rounded-full font-semibold transition-all duration-300 ${
              isScrolled ? "" : ""
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
