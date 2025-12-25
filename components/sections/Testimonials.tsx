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
  const [customDirection, setCustomDirection] = useState<-1 | 1>(1);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jesse Heffernan",
      role: "Founder",
      company: "Heffernan Electrical Automation",
      content:
        "Pixelate understood our vision from day one. The design is beautiful, the performance is incredible, and our booking rate has increased by 180%. Highly recommend!",
      rating: 5,
      gradient: "from-yellow-500 to-orange-500/80",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Founder",
      company: "TechStart Solutions",
      content:
        "Working with Pixelate was a game-changer. They didn't just build a website—they built a digital experience that our customers love. Traffic is up 250% and counting!",
      rating: 5,
      gradient: "from-electric via-sky to-electric/80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Luxe Boutique",
      content:
        "The team's creativity and technical expertise exceeded all expectations. Our new website loads lightning-fast and looks stunning on every device. Sales have doubled!",
      rating: 5,
      gradient: "from-red-600 to-red-300",
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Co-Founder",
      company: "FitLife Studios",
      content:
        "Pixelate transformed our online presence completely. Our conversion rate increased by 300% in just 3 months. The attention to detail and user experience is unmatched.",
      rating: 5,
      gradient: "from-electric to-green-400",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Owner",
      company: "Artisan Coffee Co.",
      content:
        "Best decision we made for our business. The website perfectly captures our brand essence and the customer feedback has been overwhelmingly positive. Worth every penny!",
      rating: 5,
      gradient: "from-coral to-indigo-400",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setCustomDirection(1);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setCustomDirection(-1);
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
    <section className="relative bg-gradient-to-b from-gray-950 to-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Blue sky tint - bottom */}
      <div className="absolute top-0 left-0 bottom-0 h-[20%] bg-gradient-to-t from-electric/10 via-sky/5 to-transparent" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-sm font-semibold text-electric uppercase tracking-wider">
              Client Stories
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Loved by
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric via-fanta to-coral bg-clip-text text-transparent">
              Melbourne Businesses
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Don&apos;t just take our word for it—hear what our clients have to
            say about working with us.
          </p>
        </motion.div>
      </div>

      {/* Main Testimonial Card - Carousel */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="relative">
          <AnimatePresence mode="wait" custom={customDirection}>
            <motion.div
              key={activeIndex}
              custom={customDirection}
              variants={prefersReducedMotion ? {} : cardVariants}
              initial={prefersReducedMotion ? {} : "enter"}
              animate="center"
              exit={prefersReducedMotion ? {} : "exit"}
              className="relative"
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-electric via-fanta to-coral p-1 shadow-xl transition-shadow duration-500 hover:shadow-2xl`}
              >
                <div className="bg-white rounded-[22px] p-6 sm:p-8 md:p-12">
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
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${activeTestimonial.gradient} flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg`}
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

          {/* Navigation Buttons - Hidden on mobile, shown on desktop sides */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between md:-mx-20 pointer-events-none">
            <motion.button
              onClick={previousTestimonial}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white shadow-xl border-2 border-electric/20 flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-all duration-300"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="pointer-events-auto w-14 h-14 rounded-full bg-white shadow-xl border-2 border-electric/20 flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-all duration-300"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Buttons - Below card */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <motion.button
            onClick={previousTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-electric/20 flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-all duration-300"
            whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-electric/20 flex items-center justify-center text-electric hover:bg-electric hover:text-white transition-all duration-300"
            whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            whileTap={!prefersReducedMotion ? { scale: 0.9 } : {}}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-12 h-3 bg-electric"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
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
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-electric via-coral to-fanta bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
