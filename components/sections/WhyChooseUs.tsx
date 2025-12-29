"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Users,
  Clock,
  DollarSign,
  HeadphonesIcon,
  MapPin,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Differentiator {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
  stats?: {
    value: string;
    label: string;
  };
}

const WhyChooseUs = () => {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const differentiators: Differentiator[] = [
    {
      id: 1,
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused Approach",
      description:
        "Your vision drives everything we do. We partner closely with you to understand your goals, ensuring every design decision aligns with your business objectives and delivers measurable results.",
      gradient: "from-electric via-sky to-electric/80",
      accentColor: "electric",
      stats: {
        value: "100%",
        label: "Satisfaction",
      },
    },
    {
      id: 2,
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround Times",
      description:
        "Time is money. Our streamlined processes and agile methodology mean you get stunning results without the endless wait. Most projects launch within 2-4 weeks, not months.",
      gradient: "from-fanta via-coral to-fanta/80",
      accentColor: "fanta",
      stats: {
        value: "2-4 Weeks",
        label: "Average Launch",
      },
    },
    {
      id: 3,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Transparent Pricing",
      description:
        "No hidden fees, no surprise costs. You'll know exactly what you're investing in from day one, with flexible packages designed to fit businesses of all sizes.",
      gradient: "from-emerald-500 via-teal-500 to-emerald-500/80",
      accentColor: "emerald-500",
      stats: {
        value: "$0",
        label: "Hidden Fees",
      },
    },
    {
      id: 4,
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Ongoing Support",
      description:
        "We don't disappear after launch. Enjoy dedicated support, regular updates, and proactive maintenance to keep your site running smoothly and growing with your business.",
      gradient: "from-coral via-pink-500 to-coral/80",
      accentColor: "coral",
      stats: {
        value: "24/7",
        label: "Support",
      },
    },
    {
      id: 5,
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Melbourne Team",
      description:
        "Work with a team that understands the Melbourne market. Same timezone, local insights, and the ability to meet face-to-face whenever you need. Supporting local businesses is what we do best.",
      gradient: "from-sky via-electric to-sky/80",
      accentColor: "sky",
      stats: {
        value: "100%",
        label: "Melbourne Based",
      },
    },
    {
      id: 6,
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description:
        "Don't just take our word for it. With 50+ successful projects, 98% client satisfaction, and measurable ROI improvements averaging 200%+, our results speak for themselves.",
      gradient: "from-purple-500 via-violet-500 to-purple-500/80",
      accentColor: "purple-500",
      stats: {
        value: "50+",
        label: "Projects",
      },
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const iconVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-gray-950 py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements - disabled on mobile */}
      {!prefersReducedMotion && !isMobile && (
        <>
          {/* Large gradient orbs */}
          <motion.div
            className="absolute top-20 right-0 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08],
              x: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fanta/10 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.06, 0.1, 0.06],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-coral/8 rounded-full blur-[80px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </>
      )}

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal lines decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full border-r-2 border-white rotate-45" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full border-r-2 border-white rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 backdrop-blur-sm rounded-full mb-6 border border-electric/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-sm font-semibold text-electric uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Why Melbourne
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric via-fanta to-coral bg-clip-text text-transparent">
              Businesses Choose Us
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're not just another web agency. We're your growth partner,
            committed to delivering exceptional results that transform your
            digital presence.
          </motion.p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative"
              whileHover={
                !prefersReducedMotion
                  ? {
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }
                  : {}
              }
            >
              {/* Gradient border wrapper */}
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-[2px] h-full shadow-xl transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-${item.accentColor}/20`}
              >
                {/* Inner card */}
                <div className="relative bg-gray-950 rounded-[22px] p-8 h-full">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${item.gradient} rounded-full blur-3xl`}
                    />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-lg`}
                    variants={iconVariants}
                    initial="initial"
                    whileHover={!prefersReducedMotion ? "hover" : "initial"}
                  >
                    {item.icon}
                    {/* Icon glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </motion.div>

                  {/* Stats badge (if available) */}
                  {item.stats && (
                    <motion.div
                      className="absolute top-6 right-6 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <p
                        className={`text-sm font-bold text-${item.accentColor}`}
                      >
                        {item.stats.value}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        {item.stats.label}
                      </p>
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors"
                    initial={{ x: 0 }}
                    whileHover={!prefersReducedMotion ? { x: 5 } : {}}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <div className="bg-gradient-to-r from-electric via-fanta to-coral p-1 rounded-3xl shadow-2xl">
              <div className="bg-gray-950 rounded-[22px] p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Ready to Work with Melbourne's Best?
                </h3>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join 50+ Melbourne businesses who've transformed their digital
                  presence with us. Let's create something extraordinary
                  together.
                </p>
                <motion.button
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric via-sky to-electric text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-electric/50 transition-all duration-300"
                  whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                  whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <span>Start Your Project</span>
                  <motion.span
                    animate={!prefersReducedMotion ? { x: [0, 4, 0] } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
                <p className="mt-6 text-gray-500 text-sm">
                  Free consultation • No obligation • Quick response
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
