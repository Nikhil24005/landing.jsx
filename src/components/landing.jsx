import React from "react";

const MentorMenteePortal = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/assets/loginbg.webp" // Replace with the correct image path
        alt="Medi-Caps University"
        className="absolute w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="inset-0 bg-black bg-opacity-40"></div>
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full backdrop-blur-[5px] p-4 flex justify-between items-center">
        <img src="/assets/landing1.png" alt="Medi-Caps University Logo" className="h-12" />
        <div className="text-white flex space-x-6 pr-6">
          <a href="#about" className="hover:text-gray-300 cursor-pointer">About</a>
          <a href="#developers" className="hover:text-gray-300 cursor-pointer">Developers</a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-12 ml-[10%]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Welcome to</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Mentor- Mentee</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Portal</h2>
        <button className="mt-6 bg-red-800 hover:bg-white hover:text-red-800 text-white font-bold py-2 px-6 rounded-md">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default MentorMenteePortal;