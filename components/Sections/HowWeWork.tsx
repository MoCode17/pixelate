"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
} from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  HeartHandshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  accentColor: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals and target audience.",
    details: [
      "In-depth consultation",
      "Market research",
      "Competitive analysis",
      "Goal setting & KPIs",
    ],
    accentColor: "fanta",
  },
  {
    id: 2,
    icon: <Palette className="w-8 h-8" />,
    title: "Design & Prototyping",
    description: "Creating stunning visuals that capture your brand essence.",
    details: [
      "Wireframe creation",
      "UI/UX design",
      "Interactive prototypes",
      "Design iterations",
    ],
    accentColor: "coral",
  },
  {
    id: 3,
    icon: <Code2 className="w-8 h-8" />,
    title: "Development & Testing",
    description: "Building your vision with cutting-edge technology.",
    details: [
      "Clean code development",
      "Responsive implementation",
      "Performance optimization",
      "Quality assurance",
    ],
    accentColor: "sky",
  },
  {
    id: 4,
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Optimization",
    description: "Deploying your site and fine-tuning for success.",
    details: [
      "Seamless deployment",
      "SEO optimization",
      "Analytics setup",
      "Performance monitoring",
    ],
    accentColor: "electric",
  },
  {
    id: 5,
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Ongoing Support",
    description: "We're here for the long haul with continuous support.",
    details: [
      "Regular maintenance",
      "Security updates",
      "Content updates",
      "Growth strategies",
    ],
    accentColor: "fanta",
  },
];

// Individual Step Card Component
function StepCard({
  step,
  index,
  isInView,
  prefersReducedMotion,
}: {
  step: ProcessStep;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
}) {
  const colorClasses: Record<
    string,
    { bg: string; text: string; border: string; glow: string }
  > = {
    fanta: {
      bg: "bg-fanta/10",
      text: "text-fanta",
      border: "border-fanta/30",
      glow: "shadow-fanta/20",
    },
    coral: {
      bg: "bg-coral/10",
      text: "text-coral",
      border: "border-coral/30",
      glow: "shadow-coral/20",
    },
    sky: {
      bg: "bg-sky/10",
      text: "text-sky",
      border: "border-sky/30",
      glow: "shadow-sky/20",
    },
    electric: {
      bg: "bg-electric/10",
      text: "text-electric",
      border: "border-electric/30",
      glow: "shadow-electric/20",
    },
  };

  const colors = colorClasses[step.accentColor] || colorClasses.fanta;

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 50 }
      }
      transition={{
        duration: 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      {/* Step Card */}
      <div
        className={`relative bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border ${colors.border}
        hover:border-opacity-60 transition-all duration-500 h-full
        hover:shadow-lg ${colors.glow} hover:bg-gray-900/80`}
      >
        {/* Step Number Badge */}
        <div
          className={`absolute -top-4 -left-4 w-10 h-10 rounded-full ${colors.bg} ${colors.text}
          flex items-center justify-center font-bold text-lg border ${colors.border}
          group-hover:scale-110 transition-transform duration-300`}
        >
          {step.id}
        </div>

        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-4 ${colors.text}`}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {step.icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{step.description}</p>

        {/* Details List */}
        <ul className="space-y-2">
          {step.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }
              }
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, x: -10 }
              }
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.15 + i * 0.1 + 0.3,
              }}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
              {detail}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Connector Line (Desktop only, not on last item) */}
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 0.6,
              delay: prefersReducedMotion ? 0 : index * 0.15 + 0.4,
            }}
            className="h-full bg-gradient-to-r from-fanta/50 to-electric/50 origin-left"
          />
        </div>
      )}
    </motion.div>
  );
}

export default function HowWeWork() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  // Scroll progress for background animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const sunPosition = useTransform(scrollYProgress, [0, 1], ["100%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Sunset Background */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Gradient layers creating sunset effect */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : backgroundY }}
          className="absolute inset-0"
        >
          {/* Sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

          {/* Sunset glow - bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-fanta/20 via-coral/10 to-transparent" />

          {/* Blue sky tint - top */}
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-electric/10 via-sky/5 to-transparent" />

          {/* Sun orb */}
          <motion.div
            style={{ bottom: prefersReducedMotion ? "10%" : sunPosition }}
            className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full
            bg-gradient-radial from-fanta/40 via-coral/20 to-transparent blur-3xl"
          />

          {/* Horizon glow */}
          <div className="absolute bottom-[15%] left-0 right-0 h-32 bg-gradient-to-t from-fanta/30 via-coral/15 to-transparent blur-2xl" />
        </motion.div>

        {/* Animated particles/stars */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-gradient-to-r from-fanta/20 to-electric/20 border border-fanta/30
            text-sm font-medium text-fanta mb-6"
          >
            <ArrowRight className="w-4 h-4" />
            Our Process
          </motion.span>

          <h2
            id="process-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            How We{" "}
            <span className="bg-gradient-to-r from-fanta via-coral to-electric bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven 5-step process that transforms your ideas into
            high-performing digital experiences.
          </p>
        </motion.div>

        {/* Timeline Progress Bar (Desktop) */}
        <div className="hidden lg:block relative mb-12">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full bg-gradient-to-r from-fanta via-coral to-electric origin-left"
            />
          </div>

          {/* Progress dots */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-[8%]">
            {processSteps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 300,
                }}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-fanta to-electric border-2 border-gray-950"
              />
            ))}
          </div>
        </div>

        {/* Process Steps Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6"
        >
          {processSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isInView={isInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Mobile Timeline Connector */}
        <div className="lg:hidden absolute left-8 top-[200px] bottom-[200px] w-0.5 bg-gradient-to-b from-fanta via-coral to-electric opacity-30" />

        {/* Bottom Stats */}
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "48hrs", label: "Average Response Time" },
            { value: "100%", label: "Project Completion Rate" },
            { value: "4-8 wks", label: "Typical Timeline" },
            { value: "24/7", label: "Ongoing Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : 0.4 + index * 0.1,
              }}
              className="text-center p-4 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-800"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-fanta to-electric bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
