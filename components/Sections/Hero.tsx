"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ClientHero from "../UI/ClientHero";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Disable animations if user prefers reduced motion
  const animationProps = prefersReducedMotion
    ? {}
    : {
        variants: itemVariants,
        initial: "hidden",
        animate: "visible",
      };

  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-b from-[#3399FF]/62 from-40% to-[#EEF1FF]/62 to-75%">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && mounted && (
        <>
          {/* Gradient Orbs */}

          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-coral/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute -bottom-[50%]  left-1/2 -translate-x-1/2  w-[120vw] h-[60vh] bg-fanta/70 rounded-full blur-[160px]"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-electric/40 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              variants={floatingVariants}
              animate="animate"
              transition={{
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      {/* Main Content */}
      <motion.div
        className="relativer z-10 max-w-7xl mx-auto px-6 py-20 mt-12 text-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Social Proof Badge */}
        <motion.div
          {...animationProps}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-electric/20">
            <Sparkles className="w-4 h-4 text-fanta" />
            <span className="text-sm font-medium text-gray-700">
              Trusted by 100+ Melbourne businesses
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          {...animationProps}
          className=" text-[#1d1d1d] text-4xl md:text-5xl lg:texl-6xl xl:text-7xl font-[500] mb-12 leading-tight"
        >
          <span className="">Web Design</span>
          <br />
          <span className="">Without The Tech Headaches</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...animationProps}
          className="text-lg md:text-xl text-gray-800 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Melbourne's favourite design agency creating{" "}
          <span className="font-semibold text-electric">
            high-performance websites
          </span>{" "}
          that convert visitors into customers.
        </motion.p>

        <motion.p
          {...animationProps}
          className="text-md md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          We help growing businesses stand out online with stunning design,
          seamless user experience, and lightning-fast performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...animationProps}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            className="group relative px-8 py-4 bg-fanta text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-electric/50 hover:scale-105"
            whileTap={!prefersReducedMotion ? { scale: 0.8 } : {}}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#bd7dfa] to-[#f0c85a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-electric border-2 border-electric rounded-full font-semibold text-lg shadow-lg hover:text-white transition-all duration-300 hover:scale-105 overflow-hidden"
            whileTap={!prefersReducedMotion ? { scale: 0.8 } : {}}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-gradient-to-b from-[#87fa7d] to-[#47afdf] opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-120" />
            <span className="relative flex items-center gap-2">
              View Our Work
              <span className="group-hover:rotate-45 transition-transform duration-300">
                ↗
              </span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        {!prefersReducedMotion && mounted && (
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-electric rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
