import image1 from "/image1.png";
import image2 from "/image2.webp";
import image3 from "/image3.webp";
import image4 from "/image4.webp";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      image: image3,
      title: "Poke`dex",
      description:
        "Built with React, this app features a dynamic discovery tool that fetches a random Pokémon from the PokéAPI at the click of a button. It instantly renders essential data like types, base stats, and abilities using hooks-based state management. The project highlights my ability to handle asynchronous API calls and transform raw JSON into a clean, mobile-responsive UI.",
      technologies: ["JavaScript", "Reactjs", "Tailwindcss", "Pokemon Api"],
      visitlink: "https://pokedex-react-beryl-seven.vercel.app/",
      ariaLabel: "image of pokedex project",
    },
    {
      image: image4,
      title: "Todo App",
      description:
        "I built this simple Todo App using React to help users stay organized. It lets you quickly add new tasks, check them off when finished, and delete them when they are no longer needed. The app is designed to be fast and easy to use on both phones and computers.",
      technologies: ["JavaScript", "Reactjs", "Tailwindcss", "LocalStorage"],
      visitlink: "https://todo-react-app-tan-omega.vercel.app/",
      ariaLabel: "image of TodoApp project",
    },
    {
      image: image2,
      title: "Text Translator",
      description:
        "I built a simple Language Translator using React to help people communicate better. You just type in a word or sentence, and the app instantly shows the translation in a different language. It uses a Translation API to get the right words and is designed to be very easy to use on any device.",
      technologies: ["JavaScript", "Reactjs", "Tailwindcss", "Rapid Api"],
      visitlink: "https://text-translator-app-three.vercel.app/",
      ariaLabel: "image of text translator project",
    },
    {
      image: image1,
      title: "Image Search Engine",
      description:
        "I built this search engine using HTML, CSS, and JavaScript to help people find high-quality photos. It connects to the Unsplash API to pull in thousands of professional images based on whatever you type. I designed the layout to be clean and responsive, so the pictures look great on both phones and computers. It is a simple way to see how real-time data can be used to build a useful web tool.",
      technologies: ["Html", "Css", "JavaScript", "Unsplash Api"],
      visitlink: "https://image-search-engine-psi-eight.vercel.app/",
      ariaLabel: "image of image search engine project",
    },
  ];

  const ScrollReveal = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const ProjectCard = ({ project }) => {
    return (
      <ScrollReveal>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
          <img
            src={project.image}
            loading="lazy"
            alt="project images"
            aria-label={project.ariaLabel}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-75"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">
                {" "}
                <a
                  target="_blank"
                  href={project.visitlink}
                  className="text-gray-200 transition-colors duration-300 hover:text-blue-600 cursor-pointer hover:underline"
                >
                  {project.title}
                </a>
              </div>
              <p className="text-gray-400"> {project.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-14"
    >
      <ScrollReveal>
        <h1 className="text-4xl mt-10 font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-250 flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
