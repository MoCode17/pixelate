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

// Moved outside Portfolio component to prevent recreation on state changes
const PortfolioCard = ({
  item,
  className = "",
  isHovered,
  onHover,
  onLeave,
  prefersReducedMotion,
}: {
  item: PortfolioItem;
  className?: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  prefersReducedMotion: boolean | null;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
    onLeave();
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative ${className}`}
      style={{
        perspective: "1000px",
        zIndex: isHovered ? 10 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
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
            isHovered ? "shadow-2xl shadow-orange-400/30" : ""
          }`}
        >
          {/* Inner card */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-[22px] overflow-hidden h-full">
            {/* Image container */}
            <div className="relative overflow-hidden aspect-[16/10]">
              {/* Placeholder gradient background for image */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40`}
                animate={
                  !prefersReducedMotion && isHovered
                    ? { scale: 1.1 }
                    : { scale: 1 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)`,
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
                <div className="w-full max-w-[85%] bg-white/90 backdrop-blur rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md h-5 flex items-center px-3 border border-gray-200">
                        <span className="text-[10px] text-gray-500 truncate">
                          {item.client.toLowerCase().replace(/\s+/g, "")}.com.au
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Browser content */}
                  <div
                    className={`aspect-[16/9] bg-gradient-to-br ${item.gradient} opacity-70`}
                  >
                    <div className="p-4 space-y-2">
                      <div className="h-3 bg-white/40 rounded w-1/3" />
                      <div className="h-2 bg-white/30 rounded w-2/3" />
                      <div className="h-2 bg-white/30 rounded w-1/2" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-8 bg-white/30 rounded" />
                        <div className="h-8 bg-white/30 rounded" />
                        <div className="h-8 bg-white/30 rounded" />
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
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-transparent flex items-end justify-start p-6"
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
                            className="px-2.5 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      {/* Description */}
                      <p className="text-sm text-gray-200 line-clamp-2">
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
                    className={`text-sm font-medium text-${item.accentColor}`}
                  >
                    {item.client}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
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
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
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
                        <p className="text-lg font-bold text-gray-900">
                          {result.value}
                        </p>
                        <p className="text-xs text-gray-500">{result.metric}</p>
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
      gradient: "from-amber-400 via-orange-500 to-amber-500",
      accentColor: "orange-600",
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
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
      accentColor: "amber-600",
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
      gradient: "from-yellow-400 via-amber-400 to-orange-400",
      accentColor: "yellow-600",
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
      gradient: "from-amber-500 via-yellow-400 to-amber-400",
      accentColor: "amber-600",
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
      gradient: "from-orange-500 via-amber-400 to-yellow-400",
      accentColor: "orange-600",
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
      gradient: "from-yellow-500 via-orange-400 to-amber-500",
      accentColor: "yellow-600",
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

  const featuredItem = portfolioItems.find((item) => item.featured);
  const gridItems = portfolioItems.filter((item) => !item.featured);

  return (
    <section className="relative py-24 md:py-32 overflow-x-clip">
      {/* Mid-day warm background with gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/80 via-orange-100/60 to-orange-200/50">
        {/* Top transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-100/40 to-transparent" />

        {/* Warm mid-day glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-200/40 via-orange-200/20 to-transparent blur-3xl rounded-full" />

        {/* Bottom transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-200/60 to-transparent" />
      </div>

      {/* Animated background elements */}
      {!prefersReducedMotion && (
        <>
          {/* Large gradient orbs */}
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-300/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.12, 0.2, 0.12],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Floating particles - warm tones */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                background: i % 2 === 0 ? "rgba(251, 191, 36, 0.5)" : "rgba(249, 115, 22, 0.4)",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.7, 0.4],
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
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(180, 83, 9, 0.4) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/15 backdrop-blur-sm rounded-full mb-6 border border-orange-400/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
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
            <span className="text-gray-900">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
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
            <PortfolioCard
              item={featuredItem}
              className="max-w-4xl mx-auto"
              isHovered={hoveredId === featuredItem.id}
              onHover={() => setHoveredId(featuredItem.id)}
              onLeave={() => setHoveredId(null)}
              prefersReducedMotion={prefersReducedMotion}
            />
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
            <PortfolioCard
              key={item.id}
              item={item}
              isHovered={hoveredId === item.id}
              onHover={() => setHoveredId(item.id)}
              onLeave={() => setHoveredId(null)}
              prefersReducedMotion={prefersReducedMotion}
            />
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
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 p-[2px] rounded-full"
              whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-white hover:bg-gray-50 rounded-full text-gray-900 font-semibold text-lg transition-colors flex items-center gap-3"
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
            className="mt-6 text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-orange-600 font-semibold">50+</span> projects delivered •{" "}
            <span className="text-amber-600 font-semibold">98%</span> client satisfaction
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
