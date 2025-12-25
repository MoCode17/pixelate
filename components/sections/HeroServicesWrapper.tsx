"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Services from "./Services";

const HeroServicesWrapper = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the entire wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for buttery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Sun expansion - starts small at bottom, expands to fill screen
  const sunScale = useTransform(smoothProgress, [0, 0.3], [1, 3.5]);
  const sunY = useTransform(smoothProgress, [0, 0.3], ["70%", "-40%"]);
  const sunOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.35],
    [0.7, 1, 0.3]
  );

  // Gradient warmth increases as sun rises
  const gradientProgress = useTransform(smoothProgress, [0, 0.25], [0, 1]);

  // Hero content fades and scales as we scroll into services
  const heroContentOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroContentY = useTransform(smoothProgress, [0, 0.25], [0, -80]);
  const heroContentScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);

  // Floating orbs parallax
  const orbY1 = useTransform(smoothProgress, [0, 0.4], [0, -150]);
  const orbY2 = useTransform(smoothProgress, [0, 0.4], [0, -100]);
  const orbScale = useTransform(smoothProgress, [0, 0.3], [1, 1.5]);

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
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const animationProps = prefersReducedMotion
    ? {}
    : {
        variants: itemVariants,
        initial: "hidden",
        animate: "visible",
      };

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Sunrise Background */}
      <section
        ref={heroRef}
        className="relative min-h-[200vh] overflow-hidden"
      >
        {/* Fixed Hero Background - stays in place while content scrolls */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Base sky gradient - transitions from blue to warm sunrise */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: prefersReducedMotion
                ? "linear-gradient(to bottom, rgba(51, 153, 255, 0.62) 0%, rgba(51, 153, 255, 0.4) 40%, rgba(255, 200, 150, 0.3) 70%, rgba(255, 153, 0, 0.4) 100%)"
                : undefined,
            }}
          >
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom,
                    rgba(51, 153, 255, 0.62) 0%,
                    rgba(51, 153, 255, 0.4) 30%,
                    rgba(255, 230, 200, 0.3) 60%,
                    rgba(255, 153, 0, 0.5) 100%
                  )`,
                }}
              />
            )}
          </motion.div>

          {/* Animated Sun/Glow - the main sunrise effect */}
          {!prefersReducedMotion && (
            <>
              {/* Primary sun orb */}
              <motion.div
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle,
                    rgba(255, 200, 100, 0.9) 0%,
                    rgba(255, 153, 0, 0.7) 25%,
                    rgba(255, 120, 50, 0.5) 50%,
                    rgba(255, 100, 100, 0.3) 70%,
                    transparent 100%
                  )`,
                  scale: sunScale,
                  y: sunY,
                  opacity: sunOpacity,
                  filter: "blur(60px)",
                }}
              />

              {/* Secondary warm glow - creates depth */}
              <motion.div
                className="absolute left-1/2 bottom-[-20%] -translate-x-1/2 w-full h-[60vh] rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse,
                    rgba(255, 153, 0, 0.8) 0%,
                    rgba(255, 120, 80, 0.5) 40%,
                    transparent 70%
                  )`,
                  scale: orbScale,
                  y: orbY1,
                  filter: "blur(100px)",
                }}
              />

              {/* Coral accent orb - right side */}
              <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  background: "rgba(255, 107, 107, 0.3)",
                  y: orbY2,
                  filter: "blur(80px)",
                }}
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

              {/* Electric blue accent - left side for contrast */}
              <motion.div
                className="absolute top-20 left-10 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: "rgba(51, 153, 255, 0.2)",
                  filter: "blur(60px)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    top: `${15 + ((i * 7) % 60)}%`,
                    left: `${8 + ((i * 13) % 80)}%`,
                    width: `${3 + (i % 3) * 2}px`,
                    height: `${3 + (i % 3) * 2}px`,
                    background:
                      i % 3 === 0
                        ? "rgba(255, 153, 0, 0.6)"
                        : i % 3 === 1
                        ? "rgba(0, 102, 255, 0.4)"
                        : "rgba(255, 107, 107, 0.5)",
                    boxShadow:
                      i % 3 === 0
                        ? "0 0 10px rgba(255, 153, 0, 0.4)"
                        : i % 3 === 1
                        ? "0 0 10px rgba(0, 102, 255, 0.3)"
                        : "0 0 10px rgba(255, 107, 107, 0.3)",
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{
                    delay: i * 0.3,
                    duration: 3 + (i % 3),
                  }}
                />
              ))}
            </>
          )}

          {/* Hero Content */}
          <motion.div
            className="relative z-10 h-full flex flex-col justify-center items-center px-6 mt-12"
            style={
              !prefersReducedMotion
                ? {
                    opacity: heroContentOpacity,
                    y: heroContentY,
                    scale: heroContentScale,
                  }
                : {}
            }
          >
            <motion.div
              className="max-w-7xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Social Proof Badge */}
              <motion.div
                {...animationProps}
                className="inline-flex items-center gap-2 mb-8"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-fanta/20">
                  <Sparkles className="w-4 h-4 text-fanta" />
                  <span className="text-sm font-medium text-gray-700">
                    Trusted by 100+ Melbourne businesses
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                {...animationProps}
                className="text-[#1d1d1d] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[500] mb-12 leading-tight"
              >
                <span className="block">Web Design</span>
                <span className="block">Without The Tech Headaches</span>
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
                className="text-md md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
              >
                We help growing businesses stand out online with stunning
                design, seamless user experience, and lightning-fast
                performance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                {...animationProps}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                {/* Primary CTA */}
                <motion.button
                  className="group relative px-8 py-4 bg-fanta text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-fanta/30 hover:scale-105"
                  whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-fanta via-coral to-fanta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-electric border-2 border-electric rounded-full font-semibold text-lg shadow-lg hover:text-white transition-all duration-300 hover:scale-105 overflow-hidden"
                  whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                >
                  <span className="absolute inset-0 bg-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    View Our Work
                    <span className="group-hover:rotate-45 transition-transform duration-300">
                      ↗
                    </span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Scroll Indicator */}
              {!prefersReducedMotion && (
                <motion.div
                  className="mt-8"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-gray-500 font-medium">
                      Scroll to explore
                    </span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
                      <motion.div
                        className="w-1.5 h-1.5 bg-fanta rounded-full"
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
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - rises smoothly over the hero */}
      <section className="relative z-20">
        {/* Gradient transition overlay - blends hero into services */}
        <div
          className="absolute -top-40 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 250, 245, 0.8) 50%, rgb(255, 252, 250) 100%)",
          }}
        />
        <Services />
      </section>
    </div>
  );
};

export default HeroServicesWrapper;
