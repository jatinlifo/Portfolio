// import React from 'react'

// function Hero() {


//     // flex-col mobile screen below 768
//     // md:flex-row for screen 768px and up
//     return (
//         <>
//             <div className='w-full'>
//                 <div className='flex flex-col md:flex-row 
//                  justify-center items-center py-10 px-3 border-2  gap-6 md:gap-20 bg-bg'>
//                     <div className='right order-2 md:order-1 
//                     w-full md:w-1/2 md:text-left text-center'>
//                         <h1 className='pb-4 text-2xl md:text-4xl font-bold text-center text-main'>
//                             Full-Stack Developer with Strong DSA & System Design
//                         </h1>
//                         <p className='pb-6 text-xl md:text-2xl text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing
//                             I am a full-stack developer experienced in MERN, DSA, and System Design.
//                             I focus on building scalable backends, clean APIs, and performant user experiences
//                             that solve real business problems.

//                         </p>
//                         <a
//                             href="/resume.pdf"
//                             download
//                             className="inline-block px-6 py-2 bg-primary text-white font-bold rounded-md cursor-pointer hover:opacity-90 transition"
//                         >
//                             Download Resume
//                         </a>

//                     </div>
//                     <div className='left w-full md:w-1/2 order-1 md:order-2 flex items-center justify-center'>
//                         <div className='w-40 h-40 md:w-64 md:h-64 border-2 border-soft rounded-full overflow-hidden'>
//                             <img 
//                             src="profile.jpg"
//                             className='w-full h-full object-cover'
//                              alt="" />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Hero;



import React from "react";

function Hero() {
  return (
    <section className="w-full bg-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">

          {/* TEXT SECTION */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="pb-4 text-3xl md:text-4xl font-bold text-main leading-tight">
              Full-Stack Developer <br className="hidden md:block" />
              <span className="text-primary">MERN · DSA · System Design</span>
            </h1>

            <p className="pb-8 text-lg md:text-xl text-muted leading-relaxed">
              I am a full-stack developer experienced in building scalable MERN
              applications with a strong foundation in Data Structures,
              Algorithms, and System Design. I focus on clean architecture,
              performant APIs, and real-world problem solving.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-7 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Download Resume
            </a>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-soft">
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
     <div className="border-t border-soft pb-3"></div>
    </section>
  );
}

export default Hero;








// import React from 'react'

// function Hero() {
//   return (
//     <div className="w-full border-3 mt-8 px-4 md:px-12 lg:px-20">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16
//       bg-white border-2 rounded-2xl p-6 md:p-10 shadow-md">

//         {/* Left Section (Text) */}
//         <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
//           <h1 className="pb-4 text-3xl md:text-4xl font-bold">
//             Hii, I am a Fullstack Developer
//           </h1>
//           <p className="pb-6 text-lg md:text-xl text-gray-700 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             In, expedita? Dolorum, consectetur. Lorem ipsum dolor sit amet
//             consectetur adipisicing elit. In, expedita? Dolorum, consectetur.
//           </p>
//           <button className="px-8 py-3 mt-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
//             Resume
//           </button>
//         </div>

//         {/* Right Section (Image) */}
//         <div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center">
//           <div className="w-48 h-48 md:w-72 md:h-72 border-4 border-blue-300 rounded-full overflow-hidden shadow-lg">
//             <img
//               src="profile.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Hero