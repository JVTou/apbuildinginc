import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const LogoClouds = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex w-full items-center justify-center py-10"
    >
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)}>
        <h2 className="text-base-400 mb-12 text-center font-urbanist text-lg font-semibold leading-8">
          Trusted by our clients
        </h2>
        <div className="wrap flex flex-wrap justify-center gap-10 xl:gap-32">
          <img
            className="w-32 grayscale"
            src="/images/logo/24hourfitness.svg"
            alt="24 Hour Fitness"
          />
          <img
            className="w-32 grayscale"
            src="/images/logo/chipotle.svg"
            alt="Chipotle"
          />
          <img
            className="w-32 grayscale"
            src="/images/logo/tesla.svg"
            alt="Tesla Motors"
          />
          <img
            className="w-32 grayscale"
            src="/images/logo/walmart.svg"
            alt="Walmart"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoClouds;
