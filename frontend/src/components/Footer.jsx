import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineX, AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {

  return (
    <>
      <div className="bg-bg pt-6 pb-2">

        {/* 🔹 Separation Line */}
        <div className="mb-6 border-t border-soft"></div>

        <h1 className="text-2xl font-bold text-main text-center pb-3">
          Connect with me
        </h1>

        <div className="flex justify-around md:justify-center gap-8 md:gap-20 items-center">

          {/* Links */}
          <div className="flex md:flex-row flex-col gap-4 md:gap-10 text-white">
            <Link className="hover:text-main transition" to="/">Home</Link>
            <Link className="hover:text-main transition" to="/project">Project</Link>
            <Link className="hover:text-main transition" to="/about">About</Link>
            <Link className="hover:text-main transition" to="/contact">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:gap-10 text-3xl">
            <a
              href="https://x.com/Jatin_lifo82"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineX className="py-1 text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/jatin-kumar-384777331/"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineLinkedin className="py-1 text-white" />
            </a>

            <a
              href="https://github.com/jatinlifo"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineGithub className="py-1 text-white" />
            </a>

            <a
              href="https://www.instagram.com/_jatin_k_31?igsh=MXAzbjVwZGl0MmV1dA=="
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineInstagram className="py-1 text-white" />
            </a>

            <a
              href="https://www.facebook.com/share/17kBBdoaz7/"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineFacebook className="py-1 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom text */}
      <p className="text-xs text-center py-1 text-white bg-gray-900">
        © {new Date().getFullYear()} Jatin
      </p>
    </>
  )
}

export default Footer;
