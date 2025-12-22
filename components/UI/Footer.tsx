"use client";
import React from "react";
import { Phone, Mail, Clock, Star } from "lucide-react";
import Image from "next/image";
import pixelateLite from "@/public/images/PixelateLogoBlue.svg";
import { motion, useReducedMotion } from "framer-motion";

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-16 overflow-hidden">
      {/* Night sky background effects */}
      <div className="absolute inset-0">
        {/* Top transition from FinalCTA */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-950/90 to-transparent" />

        {/* Subtle ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-gradient-radial from-amber-500/5 via-orange-500/3 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[250px] bg-gradient-radial from-orange-500/5 via-amber-500/3 to-transparent blur-3xl rounded-full" />

        {/* Stars */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${5 + i * 5}%`,
                  top: `${10 + (i % 5) * 18}%`,
                  width: `${1 + (i % 3)}px`,
                  height: `${1 + (i % 3)}px`,
                  opacity: 0.3 + (i % 4) * 0.15,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}

        {/* Static stars for reduced motion */}
        {prefersReducedMotion && (
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  left: `${8 + i * 6}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  width: `${1 + (i % 2)}px`,
                  height: `${1 + (i % 2)}px`,
                }}
              />
            ))}
          </div>
        )}

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="relative -top-4 mb-4">
              <Image
                src={pixelateLite}
                width={200}
                height={32}
                alt="Pixelate Logo"
                className="object-contain mb-1"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses for the digital age with professional
              websites that convert visitors into customers.
            </p>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <p className="text-sm text-amber-200/80">
                100% Australian Owned & Operated
              </p>
            </div>
          </div>
          {/* Services Column */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                "Website Design",
                "Web Development",
                "SEO Optimization",
                "Digital Marketing",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-amber-300 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <span>1300 PIXELATE</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-amber-300 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <span>hello@pixelate.com.au</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-amber-300 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <span>Response: Under 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Pixelate Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
