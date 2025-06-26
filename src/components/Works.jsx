import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const CardContent = (
    <>
      <div className="relative w-full" style={{ height: isMobile ? 0 : 230 }}>
         {!isMobile && <img src={image || "https://via.placeholder.com/300"}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />}

        {source_code_link && (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className={`${isMobile ? "mt-1" : "mt-4" } flex flex-wrap gap-2`}>
        {tags?.map((tag, idx) => (
          <p
            key={`${name}-${tag?.name || idx}`}
            className={`text-[14px] ${tag?.color || "text-white"}`}
          >
            #{tag?.name || "tag"}
          </p>
        ))}
      </div>
    </>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.5)}>
      {isMobile ? (
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          {CardContent}
        </div>
      ) : (
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          {CardContent}
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
