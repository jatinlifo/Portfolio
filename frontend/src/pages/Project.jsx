import React from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

function Projects() {

  const projects = [
    {
      title: "Shreeji Enterprises",
      description:
        "A professionally designed static business website built using React, TypeScript, Vite, and Tailwind CSS. This project was developed as my first freelance paid project, focusing on performance, responsiveness, and clean, maintainable frontend architecture.",
      image: "./project/shreejee.png",
      live: "https://solar-project-six-chi.vercel.app/",
      github: "https://github.com/jatinlifo/solar-project",
    },
    {
      title: "Coding Contest Platform",
      description:
        "A full-stack live coding contest platform currently under active development. It allows users to create contest rooms, select DSA problems, and compete with friends in real time & Ranking system. Built using React, JavaScript, Node.js, Express, and Socket.io, with a robust authentication system and seamless frontend–backend integration.",
      image: "./project/coding.png",
      live: "https://coding-contest-ten.vercel.app/",
      github: "https://github.com/jatinlifo/coding-contest",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game developed using vanilla JavaScript along with HTML and CSS. The project demonstrates strong fundamentals in game logic, DOM manipulation, and state handling without relying on any external frameworks or libraries.",
      image: "./project/tictac.png",
      live: "https://tic-tac-toe-game-sable-kappa.vercel.app/",
      github: "https://github.com/jatinlifo/TIC-TAC-TOE-GAME-",
    },
    {
      title: "Chat Bot Application",
      description:
        "A chatbot web application built with React and JavaScript that consumes a third-party API to generate real-time responses. The project focuses on API integration, asynchronous data handling, and delivering a smooth and user-friendly chat experience.",
      image: "./project/chat.png",
      live: "https://chat-bot-1-23sy.onrender.com/",
      github: "https://github.com/jatinlifo/chat-bot",
    },
  ];


  return (
    <section className="w-full bg-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 md:py-5">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-main mb-10 text-center md:text-left">
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
