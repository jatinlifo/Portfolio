import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "123456",
        "template_15qtb66",
        e.target,
        "iTVboByHVtJV8M1M7"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="w-full bg-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 md:py-5">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-main mb-5 text-center md:text-left">
          Contact
        </h1>

        <div className="flex flex-col md:flex-row gap-2 md:gap-15">

          {/* LEFT — Info */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-main mb-6">
              Let’s Contact
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              I’m a fresher full-stack developer with hands-on freelance experience and a
              strong interest in backend development. I enjoy working with the MERN stack,
              solving DSA problems, and learning system design concepts. I’m open to
              full-time roles, internships, freelance opportunities, and meaningful
              collaborations.
            </p>

            <div className="space-y-5 text-lg mb-10">
              <div className="flex items-center gap-4 text-muted">
                <AiOutlineMail className="text-primary text-2xl" />
                <a
                  href="mailto:jatinstudentjatin@gmail.com"
                  className="hover:text-main transition"
                >
                  jatinstudentjatin@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-muted">
                <AiOutlinePhone className="text-primary text-2xl" />
                <a
                  href="tel:+917618453221"
                  className="hover:text-main transition"
                >
                  +91 7618453221
                </a>
              </div>
            </div>

            {/* Social Icons */}
            {/* <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="text-muted hover:text-main transition"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-muted hover:text-main transition"
              >
                <AiOutlineLinkedin />
              </a>
            </div> */}
          </div>

          {/* RIGHT — Form */}
          <div className="md:w-1/2">
            <div className="bg-surface border border-soft rounded-lg p-6 md:p-8">

              <form onSubmit={sendEmail} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="bg-bg border border-soft rounded-md px-4 py-3 text-main placeholder:text-muted focus:outline-none focus:border-primary"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="bg-bg border border-soft rounded-md px-4 py-3 text-main placeholder:text-muted focus:outline-none focus:border-primary"
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="bg-bg border border-soft rounded-md px-4 py-3 text-main placeholder:text-muted focus:outline-none focus:border-primary resize-none"
                />

                <button
                  type="submit"
                  className="mt-2 bg-primary text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-400 text-sm">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    ❌ Something went wrong. Try again.
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
