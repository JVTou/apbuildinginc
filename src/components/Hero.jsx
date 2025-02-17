import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 flex justify-center"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content flex-col lg:flex-row-reverse"
      >
        <img
          src="/images/featured/IMG_2371.jpg"
          alt="AP Painting Division"
          loading="lazy"
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />
        <div className="text-center lg:text-start">
          <h1 className="font-urbanist text-3xl font-black uppercase md:text-7xl">
            building maintenance
            <span className="text-primary">
              {"\n"}
              painting
            </span>
            <span className="text-accent">
              {"\n"}
              electrical
            </span>
            <span className="text-base-content/30">
              {"\n"}
              serving southern california
            </span>
          </h1>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="btn btn-ghost md:btn-lg rounded-full font-urbanist font-light"
            >
              See our work
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
