import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

function Projects() {

    const projects = [
  {
    title: "Full-Stack MERN App",
    description:
      "A scalable MERN stack application with authentication, REST APIs, and optimized backend architecture.",
    image: "/project1.png",
    live: "https://yourprojectlive.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "DSA Visualizer",
    description:
      "Interactive platform to visualize data structures and algorithms with clean UI and efficient logic.",
    image: "/project2.png",
    live: "https://yourprojectlive.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "System Design Case Study",
    description:
      "High-level and low-level system design for scalable applications with real-world architecture patterns.",
    image: "/project3.png",
    live: "https://yourprojectlive.com",
    github: "https://github.com/yourusername/project3",
  },
  {
    title: "Portfolio Website",
    description:
      "Dark-mode developer portfolio built with React and Tailwind CSS using modern design principles.",
    image: "/project4.png",
    live: "https://yourprojectlive.com",
    github: "https://github.com/yourusername/project4",
  },
  {
    title: "Backend API Service",
    description:
      "RESTful backend service with authentication, authorization, and performance-optimized APIs.",
    image: "/project5.png",
    live: "https://yourprojectlive.com",
    github: "https://github.com/yourusername/project5",
  },
  {
    title: "React Dashboard",
    description:
      "Responsive dashboard with charts, role-based access, and clean component architecture.",
    image: "/project6.png",
    live: "https://yourprojectlive.com",
    github: "https://github.com/yourusername/project6",
  },
];



  return (
    <section className="w-full bg-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-main mb-16 text-center md:text-left">
          Projects
        </h1>

        {/* Projects List */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              {/* LEFT — Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-main mb-4">
                  {project.title}
                </h2>

                <p className="text-muted text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-center md:justify-start gap-6">
                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition"
                  >
                    <AiOutlineLink /> Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-muted hover:text-main transition"
                  >
                    <AiOutlineGithub /> GitHub
                  </a>
                </div>
              </div>

              {/* RIGHT — Image */}
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden border border-soft">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
