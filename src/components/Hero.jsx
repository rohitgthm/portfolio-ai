import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../resume/Frontend_dev_Rohit_kumar.pdf";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-26 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* person image here  */}
          <img
            src="rohit.jpeg"
            alt="person profile picture"
            className="w-75 cursor-pointer rounded-full shadow-xl  transition-all duration-300 hover:-translate-y-2 
            hover:scale-100 hover:shadow-sky-100/20 md:w-87.5"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-150 flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl">
            Rohit Kumar
          </h1>
          <div className="flex gap-5 justify-center items-center">
            <h3 className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
              Frontend developer
            </h3>

            {/* a tag for downloading the resume */}
            <a
              href={resume}
              download="resume"
              className="flex items-center gap-2 cursor-pointer rounded-lg border border-indigo-400 bg-indigo-700 hover:bg-indigo-800
                     px-5 py-3 text-lg font-mono text-white shadow-lg transition-all duration-300 hover:shadow-white/10"
            >
              Resume <MdOutlineFileDownload className="text-xl text-white" />
            </a>
          </div>

          {/* my description */}

          <p className="md:text-base text-pretty text-sm text-gray-400">
            Frontend Developer with a BCA degree, skilled in HTML, CSS,
            JavaScript, and React.js. I build responsive, user-friendly web
            interfaces and have experience creating interactive applications,
            integrating APIs, and managing code with Git and GitHub
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
