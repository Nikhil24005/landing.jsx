// import React, { useRef } from "react";
// import { motion } from "framer-motion"; 
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { FaEnvelope, FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// const teamMembers = Array.from({ length: 16 }, (_, i) => ({
//   id: i + 1,
//   name: `Member ${i + 1}`,
//   image: `path/to/image${i + 1}.jpg`, 
//   email: "mailto:example@example.com",
//   linkedin: "https://linkedin.com/in/example",
//   github: "https://github.com/example",
// }));

// const SwipeableCards = () => {
//   const swiperRef = useRef(null);

//   return (
//     <div className="flex flex-col items-center min-s-screen bg-gray-100 p-4">
//       <h2 className="text-2xl font-bold text-center mb-4">MEET THE DEVELOPER TEAM</h2>
//       <p className="text-center text-gray-600 mb-4">The students behind the module</p>
//       <div className="relative w-full max-w-4xl">
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <FaChevronLeft className="text-xl" />
//         </button>
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           modules={[Navigation]}
//           className="w-full"
//         >
//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id}>
//               <motion.div
//                 className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col items-center"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-2xl" />
//                 <div className="text-center p-2">
//                   <h3 className="font-semibold text-lg">{member.name}</h3>
//                   <div className="flex justify-center gap-4 mt-2">
//                     <a href={member.email} className="text-gray-600 hover:text-blue-500">
//                       <FaEnvelope size={20} />
//                     </a>
//                     <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
//                       <FaLinkedin size={20} />
//                     </a>
//                     <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
//                       <FaGithub size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <FaChevronRight className="text-xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwipeableCards;

// "use client"
// import React from 'react';
// import { useRef } from "react"
// import { motion } from "framer-motion"
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/navigation"
// import { Navigation } from "swiper/modules"
// import { FaEnvelope, FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6"

// const teamMembers = Array.from({ length: 16 }, (_, i) => ({
//   id: i + 1,
//   name: `NAME`,
//   position: "POSITION",
//   image: `/placeholder.svg?height=250&width=300`,
//   email: "mailto:example@example.com",
//   linkedin: "https://linkedin.com/in/example",
//   github: "https://github.com/example",
// }))

// const Cards = () => {
//   const swiperRef = useRef(null)

//   return (
//     <div className="flex flex-col items-center w-full bg-gray-100 py-12 px-4">
//       <h1 className="text-4xl font-bold text-center mb-2">MEET THE DEVELOPER TEAM</h1>
//       <p className="text-center text-gray-800 mb-10">The students behind the module</p>

//       <div className="relative w-full max-w-6xl">
//         <button
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10 border border-gray-200"
//           onClick={() => swiperRef.current?.slidePrev()}
//         >
//           <FaChevronLeft className="text-xl" />
//         </button>

//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           modules={[Navigation]}
//           className="w-full"
//         >
//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id}>
//               <motion.div className="overflow-hidden rounded-lg shadow-md" whileHover={{ scale: 1.02 }}>
//                 <div className="bg-gray-400 h-64 w-full"></div>
//                 <div className="text-center p-4 bg-white">
//                   <h3 className="font-bold text-xl">{member.name}</h3>
//                   <p className="text-sm mb-3">{member.position}</p>
//                   <div className="flex justify-center gap-4">
//                     <a href={member.email} className="bg-gray-200 text-gray-700 p-2 rounded-md hover:opacity-80">
//                       <FaEnvelope size={18} />
//                     </a>
//                     <a
//                       href={member.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-200 text-gray-700 p-2 rounded-md hover:opacity-80"
//                     >
//                       <FaLinkedin size={18} />
//                     </a>
//                     <a
//                       href={member.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-200 text-gray-700 p-2 rounded-md hover:opacity-80"
//                     >
//                       <FaGithub size={18} />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <button
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10 border border-gray-200"
//           onClick={() => swiperRef.current?.slideNext()}
//         >
//           <FaChevronRight className="text-xl" />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Cards;

"use client"
import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { FaEnvelope, FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6"

const teamMembers = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: "NAME",
  position: "POSITION",
  image: "/placeholder.svg?height=250&width=300",
  email: "mailto:example@example.com",
  linkedin: "https://linkedin.com/in/example",
  github: "https://github.com/example",
}))

const Cards = () => {
  const swiperRef = useRef(null)

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 py-12 px-4 border-t-2 border-black shadow-md pt-10">
      <h1 className="text-4xl font-bold text-center mb-2">
        MEET THE DEVELOPER TEAM
      </h1>
      <p className="text-center text-gray-800 mb-10">The students behind the module</p>

      <div className="relative w-full max-w-6xl">
        {/* Buttons - Always Visible - Position Dynamically */}
        <button
          className="absolute left-2 sm:-left-16 top-1/2 transform -translate-y-1/2 bg-white border border-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition z-20"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FaChevronLeft className="text-black text-xl" />
        </button>

        <button
          className="absolute right-2 sm:-right-16 top-1/2 transform -translate-y-1/2 bg-white border border-black w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition z-20"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FaChevronRight className="text-black text-xl" />
        </button>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <motion.div
                className="overflow-hidden rounded-xl border border-black group transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2)] relative"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image Placeholder */}
                <div className="bg-gray-400 h-64 w-full"></div>

                {/* Info Section */}
                <div className="text-center p-4 bg-white rounded-b-xl transition-colors group-hover:bg-red-800 border-t border-black">
                  <h3 className="font-bold text-xl group-hover:text-white">{member.name}</h3>
                  <p className="text-sm mb-3 group-hover:text-white">{member.position}</p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.email}
                      className="w-8 h-8 flex items-center justify-center border border-black group-hover:border-white rounded-md group-hover:text-white"
                      >
                      <FaEnvelope size={18} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center border border-black group-hover:border-white rounded-md group-hover:text-white"
                      >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center border border-black group-hover:border-white rounded-md group-hover:text-white"
                      >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  
                </div>

                {/* Always Rounded Fix */}
                <style jsx>{`
                  .group {
                    border-radius: 12px;
                    overflow: hidden;
                  }
                  .group:hover {
                    border: none;
                    outline: 1px solid transparent;
                  }
                `}</style>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Cards
