import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-[#a00000] text-white">
      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 border-b border-white">
        
        {/* Left Side - Logo and University Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="https://www.medicaps.ac.in" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/landing1.png"
              alt="Medi-Caps Logo"
              className="w-20 md:w-88 mb-2 cursor-pointer"
            />
          </a>
        </div>

        {/* Right Side - Social Links & Contact */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 mt-4 md:mt-0">
          
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/medicapsuniversity" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/medicapsuniversityofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.youtube.com/@Medi-CapsUniversityOfficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaYoutube size={20} />
            </a>
            <a href="https://twitter.com/medicapsuni" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Phone Numbers (just text, not clickable) */}
          <div className="flex items-center gap-2">
            <MdPhone />
            <p className="text-sm">07313111500 , 07313111501</p>
          </div>

          {/* Email (click to open mail client) */}
          <div className="flex items-center gap-2">
            <a href="mailto:info@medicaps.ac.in" className="flex items-center gap-2 text-white hover:text-gray-300">
              <MdEmail />
              <p className="text-sm">info@medicaps.ac.in</p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-[#a00000] text-center py-2">
        <p className="text-xs md:text-sm">
          Designed and Developed by Developers Community. <br />
          Medi-Caps University
        </p>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-center py-2 text-xs md:text-sm">
        © 2025 Medi-Caps University. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;