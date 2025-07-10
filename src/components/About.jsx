import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { logo } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    glareEnable={false}
    scale={1.05}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* النص */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="flex-1"
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.3, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a passionate Frontend Developer with a strong foundation in programming principles, data structures, and algorithms. I specialize in building modern, interactive, and user-friendly web applications using technologies like React.js, Next.js, and TypeScript.

            With hands-on experience in real-world projects and a continuous drive to learn, I transform ideas into scalable and efficient digital experiences. Whether it's integrating complex APIs, crafting responsive interfaces, or optimizing performance, I’m committed to delivering clean, maintainable code.

            I thrive in collaborative environments and enjoy solving real user problems through technology. Let's build something impactful together.
          </motion.p>
        </motion.div>

        {/* اللوجو */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="flex-shrink-0"
        >
          <img src={logo} alt="Logo" className="w-80 h-80 object-contain" />
        </motion.div>
      </div>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
