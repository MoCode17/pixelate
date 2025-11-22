import React from "react";
import { motion } from "framer-motion";
import ClientHero from "../UI/ClientHero";

const OurWork = () => {
  return (
    <div>
      {/* Client Results / Social Proof */}
      <motion.div className="flex flex-col items-center gap-6">
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
          Delivering results for
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {/* Placeholder for client logos - replace with actual logos */}
          {["Client 1", "Client 2"].map((client, i) => (
            <ClientHero key={i} transition={{ duration: 0.2 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurWork;
