// import React from "react";

// const MentorMenteeProgram = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-s-screen bg-gray-100 p-6">
//       <div className="max-w-4xl w-full">
//         <div className="bg-red-200 p-6 rounded-lg shadow-md hover:bg-red-800 hover:text-white transition duration-300">
//           <h2 className="text-xl font-bold mb-2 text-center">About Mentor-Mentee Program</h2>
//           <p className="hover:text-white">
//             At Medi-Caps University, students are seeds nurtured by mentors’ care.
//             Extending this philosophy, Mentor-Mentee portal is a digital space designed
//             to strengthen the bond between mentors and mentees, ensuring every student
//             receives the guidance they need to thrive.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div className="bg-red-200 p-6 rounded-lg shadow-md hover:bg-red-800 hover:text-white transition duration-300">
//             <h3 className="text-lg font-bold text-center">Mentee</h3>
//             <p className="hover:text-white">
//               A mentee is a sponge, eager to absorb knowledge and wisdom from their mentor.
//               Driven by curiosity and ambition, they actively seek guidance to refine their skills,
//               unlock potential, and transform aspirations into achievements under the mentor's steady guidance.
//             </p>
//           </div>

//           <div className="bg-red-200 p-6 rounded-lg shadow-md hover:bg-red-800 hover:text-white transition duration-300">
//             <h3 className="text-lg font-bold text-center">Mentor</h3>
//             <p className="hover:text-white">
//               A mentor is a lighthouse, guiding students through the turbulent waters of academia and career-building.
//               With their experience and wisdom, they illuminate paths, offer support, and empower mentees to navigate challenges.
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-6 text-center">
//           <div className="flex flex-col items-center px-4">
//             <h2 className="text-2xl font-bold">12,000+</h2>
//             <p className="text-gray-700">Mentee</p>
//           </div>
//           <div className="border-l-2 border-gray-400 h-12 mx-4"></div>
//           <div className="flex flex-col items-center px-4">
//             <h2 className="text-2xl font-bold">500+</h2>
//             <p className="text-gray-700">Mentor</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorMenteeProgram;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MentorMentee = () => {
  const [menteeCount, setMenteeCount] = useState(0);
  const [mentorCount, setMentorCount] = useState(0);

  useEffect(() => {
    let menteeInterval, mentorInterval;

    const animateCount = (target, setter) => {
      let start = 0;
      const increment = target / (3 * 60); // 3 seconds animation at 60fps

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setter(Math.floor(start));
      }, 1000 / 60);
      return interval;
    };

    menteeInterval = animateCount(12000, setMenteeCount);
    mentorInterval = animateCount(500, setMentorCount);

    return () => {
      clearInterval(menteeInterval);
      clearInterval(mentorInterval);
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Image with Text */}
          <div className="relative">
            <img src="/assets/student.png" alt="Mentor Mentee" className="w-full h-64 object-cover rounded-lg shadow" />
            <div className="absolute top-4 left-4 bg-red-200 p-4 rounded-lg">
              <h2 className="font-bold text-lg">About Mentor-Mentee Program</h2>
              <p className="mt-2 text-sm">
                At Medi-Caps University, students are seeds nurtured by mentors' care. Extending this philosophy,
                Mentor-mentee portal is a digital space designed to strengthen the bond between mentors and mentees,
                ensuring every student receives the guidance they need to thrive.
              </p>
              <p className="mt-2 text-sm">
                This portal serves as a centralized hub for managing academic and co-curricular activities, fostering
                a productive mentor-mentee relationship, and streamlining record-keeping processes.
              </p>
            </div>
          </div>

          {/* Mentee Card */}
          <div className="p-4 bg-pink-200 rounded-lg hover:bg-red-800 hover:text-white transition duration-300">
            <h3 className="font-bold text-lg">Mentee</h3>
            <p className="text-sm mt-2">
              A mentee is a sponge, eager to absorb knowledge and wisdom from their mentor. Driven by curiosity and ambition,
              they actively seek guidance to refine their skills, unlock potential, and transform aspirations into achievements
              under the mentor's steady guidance.
            </p>
          </div>

          {/* Mentee Count */}
          <motion.div
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {menteeCount.toLocaleString()}+
            <p className="text-sm font-normal">Mentee</p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Mentor Card */}
          <div className="p-4 bg-pink-200 rounded-lg hover:bg-red-800 hover:text-white transition duration-300">
            <h3 className="font-bold text-lg">Mentor</h3>
            <p className="text-sm mt-2">
              A mentor is a lighthouse, guiding students through the turbulent waters of academia and career-building. With their
              experience and wisdom, they illuminate paths, offer support, and empower mentees to navigate challenges.
            </p>
          </div>

          {/* Mentor Count */}
          <motion.div
            className="text-4xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {mentorCount.toLocaleString()}+
            <p className="text-sm font-normal">Mentor</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MentorMentee;

