"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-coral/5">
      {/* Animated Background Elements */}
      {!prefersReducedMotion && mounted && (
        <>
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-electric/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fanta/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
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
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Social Proof Badge */}
        <motion.div {...animationProps} className="inline-flex items-center gap-2 mb-8">
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-gray-900 via-electric to-gray-900 bg-clip-text text-transparent">
            Transform Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-coral via-coraldark to-coral bg-clip-text text-transparent">
            Digital Presence
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...animationProps}
          className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Melbourne's award-winning web design agency creating{" "}
          <span className="font-semibold text-electric">high-performance websites</span> that
          convert visitors into customers.
        </motion.p>

        <motion.p
          {...animationProps}
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          We help growing businesses stand out online with stunning design, seamless UX, and
          lightning-fast performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...animationProps}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            className="group relative px-8 py-4 bg-electric text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-electric/50"
            whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
            whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-gradient-to-r from-electric to-coraldark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-electric border-2 border-electric rounded-full font-semibold text-lg shadow-lg hover:bg-electric hover:text-white transition-all duration-300"
            whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
            whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <span className="flex items-center gap-2">
              View Our Work
              <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Client Logos / Social Proof */}
        <motion.div {...animationProps} className="flex flex-col items-center gap-6">
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
            Delivering results for
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder for client logos - replace with actual logos */}
            {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"].map((client, i) => (
              <motion.div
                key={i}
                className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-medium"
                whileHover={!prefersReducedMotion ? { opacity: 1, scale: 1.1 } : {}}
                transition={{ duration: 0.2 }}
              >
                {client}
              </motion.div>
            ))}
          </div>
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
