"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Palette, Code2, Sparkles, ArrowRight, Zap, Layout, Rocket } from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  const services: Service[] = [
    {
      id: 1,
      icon: <Palette className="w-12 h-12" />,
      title: "Web Design",
      description:
        "Create stunning, user-centric designs that captivate your audience and reflect your brand's unique identity.",
      features: [
        "Custom UI/UX Design",
        "Brand Identity Integration",
        "Responsive Layouts",
        "Prototyping & Wireframing",
      ],
      gradient: "from-coral via-coraldark to-coral/80",
      accentColor: "text-coral",
    },
    {
      id: 2,
      icon: <Code2 className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Build lightning-fast, scalable websites with cutting-edge technology that deliver exceptional performance.",
      features: [
        "Next.js & React Development",
        "Performance Optimization",
        "SEO Best Practices",
        "API Integration",
      ],
      gradient: "from-electric via-blue-600 to-electric/80",
      accentColor: "text-electric",
    },
    {
      id: 3,
      icon: <Rocket className="w-12 h-12" />,
      title: "Digital Strategy",
      description:
        "Transform your digital presence with data-driven strategies that increase conversions and grow your business.",
      features: [
        "Conversion Rate Optimization",
        "Analytics & Insights",
        "Growth Marketing",
        "Ongoing Support & Maintenance",
      ],
      gradient: "from-fanta via-fanta-dark to-fanta/80",
      accentColor: "text-fanta-dark",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative bg-gray-50 py-20 md:py-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
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
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-electric to-gray-900 bg-clip-text text-transparent">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From concept to launch and beyond, we provide comprehensive web solutions tailored to
            your business goals.
          </p>
        </motion.div>
      </div>

      {/* Sticky Services Cards */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="space-y-8 md:space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative md:h-screen flex items-center justify-center"
              style={{
                paddingTop: index === 0 ? "0" : "80px",
                paddingBottom: index === services.length - 1 ? "0" : "80px",
              }}
            >
              <motion.div
                className={`w-full md:sticky md:top-20`}
                style={{
                  zIndex: services.length - index,
                }}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 60 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-1 shadow-2xl`}
                >
                  {/* Gradient Border Effect */}
                  <div className="bg-white rounded-[22px] p-8 md:p-12 lg:p-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Content */}
                      <div>
                        {/* Icon */}
                        <motion.div
                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} ${service.accentColor} mb-6 shadow-lg`}
                          whileHover={
                            !prefersReducedMotion
                              ? { scale: 1.1, rotate: 5 }
                              : {}
                          }
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          {service.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        {/* CTA Button */}
                        <motion.button
                          className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
                          whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                          whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </div>

                      {/* Right Side - Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-6 uppercase tracking-wider">
                          What's Included
                        </h4>
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            whileHover={!prefersReducedMotion ? { x: 5 } : {}}
                          >
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}
                            >
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                      <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-3xl`} />
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
        className="max-w-4xl mx-auto px-6 mt-32 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-electric via-coral to-fanta p-1 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-[22px] p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-electric via-coral to-fanta bg-clip-text text-transparent">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get a free consultation and discover
              how we can help your business thrive online.
            </p>
            <motion.button
              className="px-8 py-4 bg-electric text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-electric/50 transition-all duration-300"
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              Get Your Free Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0066ff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
};

export default Services;
