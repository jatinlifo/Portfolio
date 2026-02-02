import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineX, AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {

  return (
    <>
      <div className="bg-bg pt-6">

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
              href="https://x.com/yourusername"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineX className="py-1 text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineLinkedin className="py-1 text-white" />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineGithub className="py-1 text-white" />
            </a>

            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineInstagram className="py-1 text-white" />
            </a>

            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              className="cursor-pointer rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <AiOutlineFacebook className="py-1 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom text */}
      <p className="text-xs text-center text-white bg-gray-900">
        © {new Date().getFullYear()} Jatin
      </p>
    </>
  )
}

export default Footer;
