"use client";
import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const LandingHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Website Should Be
              <br />
              <span className="text-electric">Making You Money,</span>
              <br />
              Not Collecting Digital Dust
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We pixelate businesses for the digital age — transforming outdated
              websites into
              <span className="font-semibold text-gray-900">
                {" "}
                lead-generating machines
              </span>{" "}
              that work 24/7 to grow your business
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-electric hover:bg-electric text-white cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Get My Free Website Audit
              </button>
              <button className="cursor-pointer border-2 border-gray-300 hover:border-electric text-gray-700 hover:text-electric px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                See Success Stories
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>100% Australian Owned & Operated</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>500+ Businesses Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>30-Day Results Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
