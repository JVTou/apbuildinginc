import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
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
        className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start"
      >
        {/* Image - Prevents shifting */}
        <img
          src="/images/featured/IMG_2371.jpg"
          alt="AP Painting Division"
          loading="lazy"
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />

        {/* Typewriter Wrapper */}
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start min-w-2/3">
          <div className="md:h-[420px] md:w-[720px] font-urbanist text-3xl font-black uppercase md:text-7xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Building Maintenance\n
                      <span class="text-primary">Painting</span>\n
                      <span class="text-accent">Electrical</span>\n
                      <span class="text-base-content/30">Serving Southern California</span>`
                  )
                  .pauseFor(Infinity) // Keeps the text after typing
                  .start();
              }}
              options={{
                delay: 30, // Faster typing speed
                cursor: "|",
                parseHTML: true,
              }}
            />
          </div>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md"
            >
              Contact Us
            </a>
            <a
              href="#projects"
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
