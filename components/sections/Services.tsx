"use client";

import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  TabletSmartphone,
  Code2,
  Globe,
  ArrowRight,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  iconGradient: string;
  accentColor: string;
  glowColor: string;
}

const Services = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);

  const services: Service[] = [
    {
      id: 1,
      icon: <TabletSmartphone className="w-10 h-10" />,
      title: "Web Design",
      subtitle: "Beautiful & Intuitive",
      description:
        "Create stunning, user-centric designs that captivate your audience and reflect your brand's unique identity. We blend creativity with strategy.",
      features: [
        "Custom UI/UX Design",
        "Brand Identity Integration",
        "Responsive Layouts",
        "Prototyping & Wireframing",
      ],
      gradient: "from-coral via-rose-400 to-fanta",
      iconGradient: "from-coral to-fanta",
      accentColor: "text-coral",
      glowColor: "coral",
    },
    {
      id: 2,
      icon: <Code2 className="w-10 h-10" />,
      title: "Web Development",
      subtitle: "Fast & Scalable",
      description:
        "Build lightning-fast, scalable websites with cutting-edge technology that deliver exceptional performance and seamless user experiences.",
      features: [
        "Next.js & React Development",
        "Performance Optimization",
        "SEO Best Practices",
        "API Integration",
      ],
      gradient: "from-electric via-sky to-cyan-400",
      iconGradient: "from-electric to-sky",
      accentColor: "text-electric",
      glowColor: "electric",
    },
    {
      id: 3,
      icon: <Rocket className="w-10 h-10" />,
      title: "Digital Strategy",
      subtitle: "Growth-Focused",
      description:
        "Transform your digital presence with data-driven strategies that increase conversions, engage users, and accelerate your business growth.",
      features: [
        "Conversion Rate Optimization",
        "Analytics & Insights",
        "Growth Marketing",
        "Ongoing Support & Maintenance",
      ],
      gradient: "from-fanta via-amber-400 to-yellow-300",
      iconGradient: "from-fanta to-amber-400",
      accentColor: "text-fanta",
      glowColor: "fanta",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      {/* Seamless Sunrise Background - continues from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffcfa] via-[#fff8f2] to-white">
        {/* Animated gradient layers */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute inset-0"
        >
          {/* Warm ambient glow - top */}
          <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-fanta/8 via-coral/5 to-transparent" />

          {/* Soft warm radial at top center - continues sunrise feel */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255, 153, 0, 0.15) 0%, rgba(255, 180, 120, 0.08) 50%, transparent 80%)",
            }}
          />

          {/* Electric blue accent - bottom right */}
          <div
            className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
            }}
          />

          {/* Coral accent - bottom left */}
          <div
            className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 107, 107, 0.2) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Floating particles - warm tones */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${15 + ((i * 17) % 70)}%`,
                  top: `${20 + ((i * 13) % 60)}%`,
                  width: `${4 + (i % 3) * 2}px`,
                  height: `${4 + (i % 3) * 2}px`,
                  background:
                    i % 3 === 0
                      ? "rgba(255, 153, 0, 0.5)"
                      : i % 3 === 1
                      ? "rgba(0, 102, 255, 0.35)"
                      : "rgba(255, 107, 107, 0.4)",
                  boxShadow:
                    i % 3 === 0
                      ? "0 0 12px rgba(255, 153, 0, 0.3)"
                      : i % 3 === 1
                      ? "0 0 12px rgba(0, 102, 255, 0.2)"
                      : "0 0 12px rgba(255, 107, 107, 0.25)",
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        )}

        {/* Subtle warm grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 140, 90, 0.8) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-fanta/10 via-coral/10 to-electric/10
            backdrop-blur-sm rounded-full mb-6 border border-fanta/20 shadow-sm"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-fanta" />
            <span className="text-sm font-semibold bg-gradient-to-r from-fanta to-coral bg-clip-text text-transparent uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-900">Everything You Need to</span>
            <br />
            <span className="bg-gradient-to-r from-fanta via-coral to-electric bg-clip-text text-transparent">
              Succeed Online
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From concept to launch and beyond, we provide comprehensive web
            solutions tailored to your business goals and designed to delight
            your users.
          </motion.p>
        </motion.div>

        {/* Services Cards - Sticky on desktop, stacked on mobile */}
        <div className="relative">
          <div className="flex flex-col gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={service.id} className={`sticky h-[200vh]  top-0`}>
                <motion.div
                  className="w-full"
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 60 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* Card with gradient border */}
                  <div
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-[2px]
                    shadow-xl hover:shadow-2xl transition-shadow duration-500`}
                  >
                    {/* Glass morphism inner card */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-[22px] overflow-hidden">
                      {/* Decorative background glow */}
                      <div
                        className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl rounded-full`}
                      />
                      <div
                        className={`absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br ${service.gradient} opacity-5 blur-3xl rounded-full`}
                      />

                      <div className="relative p-8 md:p-12 lg:p-16">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                          {/* Left Side - Content */}
                          <div className="space-y-6">
                            <div className="flex items-center gap-6 mb-2">
                              {/* Icon with gradient background */}
                              <motion.div
                                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.iconGradient} text-white shadow-lg`}
                                whileHover={
                                  !prefersReducedMotion
                                    ? { scale: 1.1, rotate: 5 }
                                    : {}
                                }
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 30,
                                }}
                              >
                                {service.icon}
                              </motion.div>
                              {/* Title */}
                              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                {service.title}
                              </h3>
                            </div>

                            {/* Subtitle */}
                            <motion.span
                              className={`inline-block text-sm font-semibold ${service.accentColor} uppercase tracking-wider`}
                              initial={
                                prefersReducedMotion
                                  ? {}
                                  : { opacity: 0, x: -20 }
                              }
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                            >
                              {service.subtitle}
                            </motion.span>

                            {/* Description */}
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {service.description}
                            </p>

                            {/* CTA Button */}
                            <motion.button
                              className={`group inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold
                              bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl
                              transition-all duration-300`}
                              whileHover={
                                !prefersReducedMotion
                                  ? { scale: 1.05, x: 5 }
                                  : {}
                              }
                              whileTap={
                                !prefersReducedMotion ? { scale: 0.98 } : {}
                              }
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                          </div>

                          {/* Right Side - Features */}
                          <div className="space-y-3">
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5 flex items-center gap-4 p-4">
                              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                <Globe className="w-4 h-4 " />
                              </div>
                              <h4 className="">What's Included</h4>
                            </div>
                            <div className="space-y-3">
                              {service.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  className={`group/feature flex items-center gap-4 p-4 rounded-xl
                                  bg-gradient-to-r from-gray-50 to-transparent hover:from-gray-100
                                  border border-gray-100 hover:border-gray-200 transition-all duration-300`}
                                  initial={
                                    prefersReducedMotion
                                      ? {}
                                      : { opacity: 0, x: 20 }
                                  }
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1, duration: 0.4 }}
                                  whileHover={
                                    !prefersReducedMotion ? { x: 8 } : {}
                                  }
                                >
                                  <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${service.iconGradient}
                                    flex items-center justify-center shadow-sm`}
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-6 md:mt-12"
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fanta via-coral to-electric p-[2px]">
            <div className="relative bg-white/95 backdrop-blur-xl rounded-[22px] overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-fanta/20 to-transparent blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-electric/20 to-transparent blur-3xl rounded-full" />

              <div className="relative p-10 md:p-16 text-center">
                <motion.div
                  initial={
                    prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }
                  }
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-fanta/10 to-electric/10 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4 text-fanta" />
                  <span className="text-sm font-semibold text-fanta">
                    Let's Create Together
                  </span>
                </motion.div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-gray-900">Ready to Transform Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-fanta via-coral to-electric bg-clip-text text-transparent">
                    Digital Presence?
                  </span>
                </h3>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's create something extraordinary together. Get a free
                  consultation and discover how we can help your business thrive
                  online.
                </p>

                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-fanta via-coral to-electric text-white rounded-full
                  font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
                  whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                  whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <span>Get Your Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Trust indicators */}
                <motion.div
                  className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
                  initial={prefersReducedMotion ? {} : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    No commitment required
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Response within 24hrs
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Expert consultation
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
