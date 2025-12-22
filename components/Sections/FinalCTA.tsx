"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, FolderOpen } from "lucide-react";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const sunScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  // Floating shapes data
  const floatingShapes = [
    { size: 60, left: "10%", top: "20%", delay: 0, color: "fanta" },
    { size: 40, left: "85%", top: "15%", delay: 0.5, color: "electric" },
    { size: 80, left: "75%", top: "70%", delay: 1, color: "coral" },
    { size: 30, left: "20%", top: "75%", delay: 1.5, color: "sky" },
    { size: 50, left: "50%", top: "10%", delay: 0.8, color: "fanta" },
    { size: 35, left: "90%", top: "50%", delay: 1.2, color: "electric" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dusk/Twilight Background - deep and dramatic */}
      <div className="absolute inset-0">
        {/* Base gradient - transitioning from sunset to night */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/40 via-gray-900 to-gray-950" />

        {/* Top transition from HowWeWork */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900/80 to-transparent" />

        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute inset-0"
        >
          {/* Dusk warm remnants */}
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-orange-500/30 via-amber-600/20 to-transparent" />

          {/* Twilight glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-gray-950 via-orange-900/20 to-transparent" />

          {/* Setting sun remnant - large glowing element */}
          <motion.div
            style={{ scale: prefersReducedMotion ? 1 : sunScale }}
            className="absolute top-[20%] left-1/2 -translate-x-1/2
            w-[700px] h-[500px] rounded-full
            bg-gradient-radial from-orange-500/40 via-amber-600/25 via-40% to-transparent blur-3xl"
          />

          {/* Twilight accent glow */}
          <div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full
            bg-gradient-radial from-amber-500/30 via-orange-600/15 to-transparent blur-3xl"
          />
        </motion.div>

        {/* Floating geometric shapes - warm twilight colors */}
        {!prefersReducedMotion &&
          floatingShapes.map((shape, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full opacity-25 blur-sm
                ${shape.color === "fanta" ? "bg-amber-500" : ""}
                ${shape.color === "electric" ? "bg-orange-400" : ""}
                ${shape.color === "coral" ? "bg-amber-400" : ""}
                ${shape.color === "sky" ? "bg-yellow-500" : ""}
              `}
              style={{
                width: shape.size,
                height: shape.size,
                left: shape.left,
                top: shape.top,
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                delay: shape.delay,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Animated particles - stars emerging */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  backgroundColor:
                    i % 4 === 0
                      ? "rgba(251, 191, 36, 0.6)"
                      : i % 4 === 1
                      ? "rgba(249, 115, 22, 0.5)"
                      : i % 4 === 2
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(245, 158, 11, 0.5)",
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        )}

        {/* Mesh overlay for texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Decorative badge */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-amber-500/20 backdrop-blur-md border border-amber-400/30
            text-sm font-medium text-amber-200 mb-8"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </motion.div>
            Let&apos;s Create Something Amazing
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            id="cta-heading"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Your Online Presence?
              </span>
              {/* Underline decoration */}
              <motion.svg
                initial={
                  prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }
                }
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  d="M2 8C50 4 100 2 150 6C200 10 250 4 298 8"
                  stroke="url(#cta-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient
                    id="cta-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fcd34d" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12"
          >
            Let&apos;s discuss your project and bring your vision to life.
            <br className="hidden md:block" />
            <span className="text-white/60">
              No pressure, no obligations — just a friendly chat about your
              goals.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="group relative px-8 py-4 rounded-full overflow-hidden
              bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white font-semibold text-lg
              shadow-2xl shadow-orange-500/30 transition-shadow duration-300
              hover:shadow-orange-500/50"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={prefersReducedMotion ? {} : { x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="group px-8 py-4 rounded-full
              bg-white/10 backdrop-blur-md border border-amber-400/30
              text-white font-semibold text-lg
              hover:bg-white/15 hover:border-amber-400/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                See Our Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free 30-min Consultation
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              No Commitment Required
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Response Within 24hrs
            </div>
          </motion.div>

          {/* Decorative bottom elements */}
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            {/* Client avatars stack */}
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gradient-to-br from-amber-400/60 to-orange-500/60 flex items-center justify-center text-white text-xs font-semibold"
                >
                  {["JD", "AS", "MK", "TL", "RC"][i]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">
                Join 50+ Happy Clients
              </div>
              <div className="text-amber-200/70 text-sm">
                who transformed their business
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.25)" />
              <stop offset="50%" stopColor="rgba(245, 158, 11, 0.2)" />
              <stop offset="100%" stopColor="rgba(249, 115, 22, 0.25)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
            initial={
              prefersReducedMotion
                ? {}
                : {
                    d: "M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z",
                  }
            }
            animate={
              prefersReducedMotion
                ? {}
                : {
                    d: [
                      "M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z",
                      "M0,80 C300,40 600,100 900,40 C1050,70 1150,80 1200,80 L1200,120 L0,120 Z",
                      "M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z",
                    ],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </section>
  );
}
