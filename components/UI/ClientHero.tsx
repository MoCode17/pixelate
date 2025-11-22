import React from "react";
import { motion, MotionProps } from "framer-motion";

type ClientHeroProps = Partial<Pick<MotionProps, "whileHover" | "transition">>;

const ClientHero: React.FC<ClientHeroProps> = ({ whileHover, transition }) => {
  return (
    <motion.div
      whileHover={whileHover}
      transition={transition}
      className="flex justify-center items-center w-80 h-40 lg:w-40 rounded-2xl bg-fanta"
    >
      ClientHero
    </motion.div>
  );
};

export default ClientHero;
