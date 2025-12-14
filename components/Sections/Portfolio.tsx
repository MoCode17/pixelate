"use client";

import React, { useState } from "react";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Eye,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  description: string;
  fullDescription: string;
  image: string;
  gradient: string;
  accentColor: string;
  tags: string[];
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  featured?: boolean;
  size?: "large" | "medium" | "small";
}

const Portfolio = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Luxe Real Estate Platform",
      client: "Melbourne Properties",
      description: "Premium property marketplace with virtual tours",
      fullDescription:
        "A comprehensive real estate platform featuring 3D virtual tours, AI-powered property recommendations, and seamless inquiry management.",
      image: "/api/placeholder/800/600",
      gradient: "from-electric via-sky to-electric/80",
      accentColor: "electric",
      tags: ["Next.js", "Three.js", "AI/ML", "Real Estate"],
      results: [
        {
          metric: "Conversion Rate",
          value: "+340%",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: "Page Views",
          value: "2.1M",
          icon: <Eye className="w-4 h-4" />,
        },
        {
          metric: "Load Time",
          value: "0.8s",
          icon: <Clock className="w-4 h-4" />,
        },
      ],
      featured: true,
      size: "large",
    },
    {
      id: 2,
      title: "Fintech Dashboard",
      client: "PayFlow Australia",
      description: "Real-time financial analytics platform",
      fullDescription:
        "Enterprise-grade financial dashboard with real-time transaction monitoring, predictive analytics, and automated reporting.",
      image: "/api/placeholder/600/400",
      gradient: "from-fanta via-coral to-fanta/80",
      accentColor: "fanta",
      tags: ["React", "D3.js", "WebSocket", "Finance"],
      results: [
        {
          metric: "Processing Speed",
          value: "+200%",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: "Daily Users",
          value: "50K+",
          icon: <Eye className="w-4 h-4" />,
        },
      ],
      size: "medium",
    },
    {
      id: 3,
      title: "E-Commerce Redesign",
      client: "StyleHouse Co.",
      description: "Luxury fashion e-commerce experience",
      fullDescription:
        "Complete redesign of a luxury fashion retailer with personalized recommendations, AR try-on features, and streamlined checkout.",
      image: "/api/placeholder/600/400",
      gradient: "from-coral via-pink-500 to-coral/80",
      accentColor: "coral",
      tags: ["Next.js", "Shopify", "AR", "Fashion"],
      results: [
        {
          metric: "Revenue",
          value: "+180%",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: "Avg Session",
          value: "8.2m",
          icon: <Clock className="w-4 h-4" />,
        },
      ],
      size: "medium",
    },
    {
      id: 4,
      title: "SaaS Platform UI",
      client: "CloudSync Tech",
      description: "Enterprise collaboration suite",
      fullDescription:
        "Modern SaaS platform interface for team collaboration with real-time editing, video conferencing, and project management.",
      image: "/api/placeholder/600/400",
      gradient: "from-sky via-electric to-sky/80",
      accentColor: "sky",
      tags: ["React", "WebRTC", "Node.js", "SaaS"],
      results: [
        {
          metric: "User Growth",
          value: "+420%",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: "NPS Score",
          value: "72",
          icon: <Sparkles className="w-4 h-4" />,
        },
      ],
      size: "small",
    },
    {
      id: 5,
      title: "Health & Wellness App",
      client: "VitaTrack",
      description: "Personalized fitness tracking platform",
      fullDescription:
        "AI-powered health platform with workout planning, nutrition tracking, and integration with wearable devices.",
      image: "/api/placeholder/600/400",
      gradient: "from-emerald-500 via-teal-500 to-emerald-500/80",
      accentColor: "emerald",
      tags: ["React Native", "AI/ML", "Health", "Mobile"],
      results: [
        {
          metric: "Downloads",
          value: "500K+",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: "Retention",
          value: "78%",
          icon: <Eye className="w-4 h-4" />,
        },
      ],
      size: "small",
    },
    {
      id: 6,
      title: "Restaurant Chain",
      client: "Harvest Kitchen",
      description: "Multi-location ordering system",
      fullDescription:
        "Unified ordering platform for 50+ restaurant locations with real-time inventory, delivery tracking, and loyalty programs.",
      image: "/api/placeholder/600/400",
      gradient: "from-fanta via-amber-500 to-fanta/80",
      accentColor: "fanta",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Food"],
      results: [
        {
          metric: "Orders",
          value: "+250%",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          metric: "Locations",
          value: "50+",
          icon: <Layers className="w-4 h-4" />,
        },
      ],
      size: "small",
    },
  ];

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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
  };

  // Interactive card component with 3D tilt effect
  const PortfolioCard = ({
    item,
    className = "",
  }: {
    item: PortfolioItem;
    className?: string;
  }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(
      mouseYSpring,
      [-0.5, 0.5],
      ["10deg", "-10deg"]
    );
    const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-10deg", "10deg"]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setHoveredId(null);
    };

    const isHovered = hoveredId === item.id;

    return (
      <motion.div
        variants={itemVariants}
        className={`group relative ${className}`}
        style={{
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX: prefersReducedMotion ? 0 : rotateX,
            rotateY: prefersReducedMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full"
        >
          {/* Gradient border wrapper */}
          <div
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${
              item.gradient
            } p-[2px] h-full shadow-xl transition-shadow duration-500 ${
              isHovered ? "shadow-2xl shadow-electric/20" : ""
            }`}
          >
            {/* Inner card */}
            <div className="relative bg-gray-950 rounded-[22px] overflow-hidden h-full">
              {/* Image container */}
              <div className="relative overflow-hidden aspect-[16/10]">
                {/* Placeholder gradient background for image */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30`}
                  animate={
                    !prefersReducedMotion && isHovered
                      ? { scale: 1.1 }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Geometric pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                {/* Floating mockup elements */}
                <motion.div
                  className="absolute inset-4 flex items-center justify-center"
                  animate={
                    !prefersReducedMotion && isHovered
                      ? { y: -10, scale: 1.02 }
                      : { y: 0, scale: 1 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Browser mockup */}
                  <div className="w-full max-w-[85%] bg-gray-900/90 backdrop-blur rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    {/* Browser header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/10">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-700/50 rounded-md h-5 flex items-center px-3">
                          <span className="text-[10px] text-gray-400 truncate">
                            {item.client.toLowerCase().replace(/\s+/g, "")}
                            .com.au
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Browser content */}
                    <div
                      className={`aspect-[16/9] bg-gradient-to-br ${item.gradient} opacity-60`}
                    >
                      <div className="p-4 space-y-2">
                        <div className="h-3 bg-white/20 rounded w-1/3" />
                        <div className="h-2 bg-white/10 rounded w-2/3" />
                        <div className="h-2 bg-white/10 rounded w-1/2" />
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="h-8 bg-white/10 rounded" />
                          <div className="h-8 bg-white/10 rounded" />
                          <div className="h-8 bg-white/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Hover overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent flex items-end justify-start p-6"
                    >
                      <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-3"
                      >
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <motion.span
                              key={tag}
                              custom={i}
                              variants={tagVariants}
                              initial="hidden"
                              animate="visible"
                              className="px-2.5 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        {/* Description */}
                        <p className="text-sm text-gray-300 line-clamp-2">
                          {item.fullDescription}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card content */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <p
                      className={`text-sm font-medium text-${item.accentColor} opacity-80`}
                    >
                      {item.client}
                    </p>
                    <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  {/* Link button */}
                  <motion.button
                    whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                    whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                    className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg transition-transform`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Results */}
                {item.results && item.results.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    {item.results.map((result, i) => (
                      <motion.div
                        key={result.metric}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <span className={`text-${item.accentColor}`}>
                          {result.icon}
                        </span>
                        <div>
                          <p className="text-lg font-bold text-white">
                            {result.value}
                          </p>
                          <p className="text-xs text-gray-500">
                            {result.metric}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const featuredItem = portfolioItems.find((item) => item.featured);
  const gridItems = portfolioItems.filter((item) => !item.featured);

  return (
    <section className="relative bg-gray-950 py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      {!prefersReducedMotion && (
        <>
          {/* Large gradient orbs */}
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fanta/10 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.12, 0.08],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[80px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

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
              Featured Work
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
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric via-sky to-fanta bg-clip-text text-transparent">
              Experiences
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
            From startups to enterprises, we transform ideas into pixel-perfect
            experiences that drive real business results.
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        {featuredItem && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <PortfolioCard item={featuredItem} className="max-w-4xl mx-auto" />
          </motion.div>
        )}

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {gridItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <motion.div
              className="bg-gradient-to-r from-electric via-fanta to-coral p-[2px] rounded-full"
              whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gray-950 hover:bg-gray-900 rounded-full text-white font-semibold text-lg transition-colors flex items-center gap-3"
                whileHover={!prefersReducedMotion ? { scale: 1.01 } : {}}
                whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
              >
                <span>View All Projects</span>
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
            </motion.div>
          </div>

          <motion.p
            className="mt-6 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-electric">50+</span> projects delivered •{" "}
            <span className="text-fanta">98%</span> client satisfaction
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
