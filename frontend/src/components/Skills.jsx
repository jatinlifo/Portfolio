// import React from 'react'

// function Skills() {

//     return (
//         <>
//             <div className='border-3 mt-5 w-200  md:w-full'>
//                 <h1 className='py-3 px-4 text-5xl font-bold md:text-4xl'>Skills</h1>
//                 <div className='grid grid-cols-3 px-15 md:grid-cols-6'>
//                     <div>
//                         <h1 className='text-3xl md:text-2xl font-bold pb-4'>
//                             Frontend
//                         </h1>
//                         <div className="flex items-start space-x-8 ">
//                             {/* Vertical Line */}
//                             <div className="relative left-5 h-35 w-[2.5px] bg-black">
//                                 {/* Horizontal Lines */}
//                                 <div className="absolute top-4 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-12 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-20 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-28 w-8 h-[2px] bg-black"></div>
//                             </div>

//                             {/* Text beside each line */}
//                             <div className="flex text-xl  flex-col justify-start gap-1 h-40 py-1 px-5 ">
//                                 <span className="">HTML</span>
//                                 <span className="">CSS</span>
//                                 <span className="">Java Script</span>
//                                 <span className="">React</span>
//                             </div>
//                         </div>

//                     </div>
//                     <div>
//                         <h1 className='text-3xl md:text-2xl font-bold pb-4'>
//                             Backend
//                         </h1>
//                         <div className="flex items-start space-x-8 ">
//                             {/* Vertical Line */}
//                             <div className="relative left-5 h-35 w-[2.5px] bg-black">
//                                 {/* Horizontal Lines */}
//                                 <div className="absolute top-4 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-12 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-20 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-28 w-8 h-[2px] bg-black"></div>
//                             </div>

//                             {/* Text beside each line */}
//                             <div className="flex text-xl flex-col justify-start gap-1 h-40 py-1 px-5 ">
//                                 <span className="">Java Script</span>
//                                 <span className="">Express.js</span>
//                                 <span className="">Mongo DB</span>
//                                 <span className="">Next.js</span>
//                             </div>
//                         </div>

//                     </div>
//                      <div>
//                         <h1 className='text-3xl md:text-2xl font-bold pb-4'>
//                             Other Tools
//                         </h1>
//                         <div className="flex items-start space-x-8 ">
//                             {/* Vertical Line */}
//                             <div className="relative left-5 h-50 w-[2.5px] bg-black">
//                                 {/* Horizontal Lines */}
//                                 <div className="absolute top-4 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-12 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-20 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-28 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-38 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-45 w-8 h-[2px] bg-black"></div>
//                             </div>

//                             {/* Text beside each line */}
//                             <div className="flex  flex-col justify-start gap-1 h-40 py-1 px-5 ">
//                                 <span className="text-md">Git & Github</span>
//                                 <span className="text-md">Postman</span>
//                                 <span className="text-md">Bootstrap</span>
//                                 <span className="text-md">TailwindCSS</span>
//                                 <span className="text-md">M.S office</span>
//                                 <span className="text-md">V.S Code</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <h1 className='text-3xl md:text-2xl font-bold pb-4'>
//                             DSA
//                         </h1>
//                         <div className="flex items-start space-x-8 ">
//                             {/* Vertical Line */}
//                             <div className="relative left-5 h-28 w-[2.5px] bg-black">
//                                 {/* Horizontal Lines */}
//                                 <div className="absolute top-4 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-12 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-20 w-8 h-[2px] bg-black"></div>
//                                 {/* <div className="absolute top-28 w-8 h-[2px] bg-black"></div> */}
//                             </div>

//                             {/* Text beside each line */}
//                             <div className="flex  flex-col justify-start gap-1 h-40 py-1 px-5 ">
//                                 <span className="text-md">C</span>
//                                 <span className="text-md">C++</span>
//                                 <span className="text-md">Java</span>
//                                 {/* <span className="text-md">React</span> */}
//                             </div>
//                         </div>
//                     </div>
//                      <div>
//                         <h1 className='text-3xl md:text-2xl font-bold'>
//                             Design
//                         </h1>
//                         <div className="flex items-start space-x-8 ">
//                             {/* Vertical Line */}
//                             <div className="relative left-5 h-35 w-[2.5px] bg-black">
//                                 {/* Horizontal Lines */}
//                                 <div className="absolute top-4 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-12 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-20 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-28 w-8 h-[2px] bg-black"></div>
//                             </div>

//                             {/* Text beside each line */}
//                             <div className="flex  flex-col justify-start gap-1 h-40 py-1 px-5 ">
//                                 <span className="text-md">Figma</span>
//                                 <span className="text-md">Canva</span>
//                                 <span className="text-md">Photoshop</span>
//                                 <span className="text-md">Power point</span>
//                             </div>
//                         </div>

//                     </div>
//                     <div className='py-9 md:py-0'>
//                         <h1 className='text-2xl  font-bold pb-3'>
//                             System Design
//                         </h1>
//                         <div className="flex items-start space-x-8 ">
//                             {/* Vertical Line */}
//                             <div className="relative left-5 h-20 w-[2.5px] bg-black">
//                                 {/* Horizontal Lines */}
//                                 <div className="absolute top-4 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-12 w-8 h-[2px] bg-black"></div>
//                                 {/* <div className="absolute top-20 w-8 h-[2px] bg-black"></div>
//                                 <div className="absolute top-28 w-8 h-[2px] bg-black"></div> */}
//                             </div>

//                             {/* Text beside each line */}
//                             <div className="flex  flex-col justify-start gap-1 h-40 py-1 px-5 ">
//                                 <span className="text-md">LLD</span>
//                                 <span className="text-md">HLD</span>
//                                 {/* <span className="text-md">Java Script</span>
//                                 <span className="text-md">React</span> */}
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Skills;


import React from 'react'
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiPostman } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { PiFileCppFill } from "react-icons/pi";
import { DiJava } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";


function Skills() {

  return (
    <section className='w-full bg-bg pb-5'>
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-main text-center md:text-left">
        Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-white">

        {/* ========== Frontend ========== */}
        <div className=''>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Frontend</h2>
          <div className="flex items-start space-x-8">
            <div className="relative h-40 w-[2px] bg-white">
              {[1, 3, 5, 7.2, 9.2].map((t) => (
                <div
                  key={t}
                  className={`absolute  w-8 h-[2px] bg-white`}
                  style={{ top: `${t}rem` }}
                >
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 text-lg text-white">
              <div className='flex items-center gap-1'>
                <FaHtml5 className='text-orange-600' />
                <span>HTML</span>
              </div>
              <div className='flex items-center gap-1'>
                <DiCss3 className='text-blue-800' />
                <span>CSS</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiJavascript className='text-yellow-300' />
                <span>JavaScript</span>
              </div>
              <div className='flex items-center gap-1'>
                <RiReactjsLine className='text-blue-300 ' />
                <span>React</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiTailwindcss className='text-blue-600' />
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== Backend ========== */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Backend</h2>
          <div className="flex items-start space-x-8">
            <div className="relative h-40 w-[2px] bg-white">
              {[1, 3, 5, 7.2, 9.2].map((t) => (
                <div
                  key={t}
                  className={`absolute  w-8 h-[2px] bg-white`}
                  style={{ top: `${t}rem` }}
                >
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 text-lg text-white">
              <div className='flex items-center gap-1'>
                <FaNodeJs className='text-green-600' />
                <span>Node.js</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiJavascript className='text-yellow-300' />
                <span>JavaScript</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiExpress className='bg-black text-white' />
                <span>Express.js</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiMongodb className='bg-green-600 text-white' />
                <span>MongoDB</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiNextdotjs />
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== Other Tools ========== */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Other Tools</h2>
          <div className="flex items-start space-x-8">
            <div className="relative h-32 w-[2px] bg-white">
              {[1, 3, 5, 7.2,].map((t) => (
                <div
                  key={t}
                  className={`absolute  w-8 h-[2px] bg-white`}
                  style={{ top: `${t}rem` }}
                >
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 text-lg text-white">
              <div className='flex items-center gap-1'>
                <PiGithubLogoFill className='bg-white rounded-full' />
                <span>Git & GitHub</span>
              </div>
              <div className='flex items-center gap-1'>
                <SiPostman className='text-orange-400' />
                <span>Postman</span>
              </div>
              <div className='flex items-center gap-1'>
                <BsMicrosoft className='text-blue-400' />
                <span>MS Office</span>
              </div>
              <div className='flex items-center gap-1'>
                <VscVscode className='text-blue-700' />
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== DSA ========== */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DSA</h2>
          <div className="flex items-start space-x-8">
            <div className="relative h-25 w-[2px] bg-white">
              {[1, 3, 5.2,].map((t) => (
                <div
                  key={t}
                  className={`absolute  w-8 h-[2px] bg-white`}
                  style={{ top: `${t}rem` }}
                >
                </div>
              ))}
            </div>
            <div className="flex flex-col text-lg gap-1.5 text-white">
              <div className='flex items-center gap-1'>
                <p className='font-bold  bg-black text-sm text-white px-1'>C</p>
                <span>C</span>
              </div>
              <div className='flex items-center gap-1'>
                <PiFileCppFill className='text-2xl' />
                <span>C++</span>
              </div>
              <div className='flex items-center gap-1'>
                <DiJava className='text-2xl' />
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== Design ========== */}
        <div>
          <h2 className="text-2xl font-bold mb-4 ">Design</h2>
          <div className="flex items-start  space-x-8">
            <div className="relative h-24 w-[2px] bg-white">
              {[1, 3, 5,].map((t) => (
                <div
                  key={t}
                  className={`absolute  w-8 h-[2px] bg-white`}
                  style={{ top: `${t}rem` }}
                >
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1 text-lg text-white">
              <div className='flex items-center gap-1'>
                <IoLogoFigma className='figma-gradient' />
                <span>Figma</span>

              </div>
              <div className='flex items-center gap-1'>
                <SiCanva className='text-[#00C4CC] rounded-full' />
                <span>Canva</span>
              </div>
              <div className='flex items-center gap-1'>
                <PiMicrosoftPowerpointLogoFill className='text-[#D24726]' />
                <span>PowerPoint</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== System Design ========== */}
        <div>
          <h2 className="text-2xl font-bold mb-4">System Design</h2>
          <div className="flex items-start space-x-8">
            <div className="relative h-20 w-[2px] bg-white">
              {[1, 3,].map((t) => (
                <div
                  key={t}
                  className={`absolute  w-8 h-[2px] bg-white`}
                  style={{ top: `${t}rem` }}
                >
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 text-lg text-white">
              <div className='flex items-center gap-1'>
                <span>LLD</span>
              </div>
              <div className='flex items-center gap-1'>
                <span>HLD</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Skills
