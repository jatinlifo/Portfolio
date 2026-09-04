import React from "react";
import { AiOutlineLink } from "react-icons/ai";

function About() {

const achievements = [
  {
    platform: "LeetCode",
    title: "1200+ Problems Solved",
    description:
      "Solved 1200+ coding problems covering Data Structures, Algorithms, and advanced problem-solving patterns, including Meet in the Middle, Segment Trees, Bit Manipulation, Binary Search and more.",
    image: "./archievment/leetcode.png",
    profile: "https://leetcode.com/u/Jatin_SI/",
  },
  {
    platform: "GeeksforGeeks",
    title: "700+ Problems Solved",
    description:
      "Solved 700+ problems across Data Structures and Algorithms, strengthening problem-solving skills, algorithmic thinking, and coding efficiency.",
    image: "./archievment/gfg.png",
    profile: "https://www.geeksforgeeks.org/profile/jatinstud3bdb?tab=activity",
  },
  {
    platform: "GeeksforGeeks",
    title: "GFG160 & NPCI60 Challenge",
    description:
      "Successfully completed the GFG160 and NPCI60 coding challenges, demonstrating consistency, discipline, and strong problem-solving skills.",
    image: "./archievment/certificate.png",
  },
];
  return (
    <section className="w-full bg-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 md:py-5">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-main mb-10 text-center md:text-left">
          About Me
        </h1>

        {/* MAIN ABOUT */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24">

          {/* LEFT — Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border border-soft">
              <img
                src="./profile/2.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-main mb-4">
              Full-Stack Developer (MERN)
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-6">
              I am a full-stack developer with strong expertise in the MERN stack,
              Data Structures & Algorithms, and System Design. I enjoy building
              scalable backend systems, clean APIs, and performant user interfaces.
              I focus on writing maintainable code and solving real-world problems.
            </p>

            <p className="text-muted text-lg leading-relaxed">
              Alongside development, I actively practice problem-solving and
              competitive programming to strengthen my core fundamentals.
            </p>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <h2 className="text-2xl md:text-4xl font-bold text-main mb-12 text-center md:text-left">
          Achievements
        </h2>

        <div className="flex flex-col gap-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              {/* LEFT — Image */}
              <div className="md:w-1/2 w-72 flex justify-center">
                <div className="rounded-xl overflow-hidden border border-soft bg-surface flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.platform}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* RIGHT — Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-main mb-2">
                  {item.platform}
                </h3>

                <p className="text-primary font-medium mb-3">
                  {item.title}
                </p>

                <p className="text-muted text-lg mb-4 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.profile}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition"
                >
                  <AiOutlineLink /> View Profile
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
