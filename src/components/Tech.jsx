import React from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-5xl font-light text-white md:text-16"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-12 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white text-xl">Html5</span>
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-2 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white text-xl">Css</span>
          <BiLogoCss3 className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-2 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white text-xl">JavaScript</span>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hover:-translate-y-2 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white text-xl">ReactJs</span>
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-2 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-white text-xl">TailwindCss</span>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-2 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
