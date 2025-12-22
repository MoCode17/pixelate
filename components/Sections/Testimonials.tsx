"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  gradient: string;
}

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jesse Heffernan",
      role: "Founder",
      company: "Heffernan Electrical Automation",
      content:
        "Pixelate understood our vision from day one. The design is beautiful, the performance is incredible, and our booking rate has increased by 180%. Highly recommend!",
      rating: 5,
      gradient: "from-amber-400 via-orange-500 to-amber-500",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Founder",
      company: "TechStart Solutions",
      content:
        "Working with Pixelate was a game-changer. They didn't just build a website—they built a digital experience that our customers love. Traffic is up 250% and counting!",
      rating: 5,
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Luxe Boutique",
      content:
        "The team's creativity and technical expertise exceeded all expectations. Our new website loads lightning-fast and looks stunning on every device. Sales have doubled!",
      rating: 5,
      gradient: "from-yellow-400 via-amber-400 to-orange-400",
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Co-Founder",
      company: "FitLife Studios",
      content:
        "Pixelate transformed our online presence completely. Our conversion rate increased by 300% in just 3 months. The attention to detail and user experience is unmatched.",
      rating: 5,
      gradient: "from-amber-500 via-yellow-400 to-amber-400",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Owner",
      company: "Artisan Coffee Co.",
      content:
        "Best decision we made for our business. The website perfectly captures our brand essence and the customer feedback has been overwhelmingly positive. Worth every penny!",
      rating: 5,
      gradient: "from-orange-500 via-amber-400 to-yellow-400",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Golden Hour Background - late afternoon glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/40 via-orange-200/50 to-orange-300/40">
        {/* Top transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-200/50 to-transparent" />

        {/* Golden sun glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-300/40 via-orange-200/20 to-transparent blur-3xl rounded-full" />

        {/* Bottom transition toward sunset */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-400/30 via-amber-300/20 to-transparent" />
      </div>

      {/* Background Decorations */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/25 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating golden particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${3 + (i % 3) * 2}px`,
                height: `${3 + (i % 3) * 2}px`,
                background: i % 2 === 0 ? "rgba(251, 191, 36, 0.6)" : "rgba(245, 158, 11, 0.5)",
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/15 backdrop-blur-sm rounded-full mb-6 border border-orange-400/30">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Loved by Melbourne </span>
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Businesses</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Don&apos;t just take our word for it—hear what our clients have to
            say about working with us.
          </p>
        </motion.div>
      </div>

      {/* Main Testimonial Card - Carousel */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="relative">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={activeIndex}
              custom={1}
              variants={prefersReducedMotion ? {} : cardVariants}
              initial={prefersReducedMotion ? {} : "enter"}
              animate="center"
              exit={prefersReducedMotion ? {} : "exit"}
              className="relative"
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${activeTestimonial.gradient} p-[2px] shadow-2xl`}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-[22px] p-8 md:p-12 lg:p-16">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={
                          prefersReducedMotion ? {} : { opacity: 0, scale: 0 }
                        }
                        animate={
                          prefersReducedMotion ? {} : { opacity: 1, scale: 1 }
                        }
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-6 h-6 fill-[#FFC81B] text-[#FFC81B]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium mb-8 leading-relaxed">
                    &quot;{activeTestimonial.content}&quot;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${activeTestimonial.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                    >
                      {activeTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {activeTestimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {activeTestimonial.role} at {activeTestimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-20 pointer-events-none">
            <motion.button
              onClick={previousTestimonial}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white shadow-xl border-2 border-orange-300 flex items-center justify-center text-orange-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white shadow-xl border-2 border-orange-300 flex items-center justify-center text-orange-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-12 h-3 bg-gradient-to-r from-amber-500 to-orange-500"
                  : "w-3 h-3 bg-orange-200 hover:bg-orange-300"
              }`}
              whileHover={!prefersReducedMotion ? { scale: 1.2 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Happy Clients", value: "15+" },
            { label: "Projects Delivered on time", value: "100%" },
            { label: "Average Rating", value: "5.0" },
            { label: "Support", value: "24/7" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Pattern 
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0066ff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      */}
    </section>
  );
};

export default Testimonials;
