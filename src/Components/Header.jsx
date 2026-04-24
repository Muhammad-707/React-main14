import React from 'react';
import i1 from "../assets/Logo (4).png"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-6 bg-[#111]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#1A1A1A] p-2 md:p-3 rounded-2xl border border-[#262626]">
            <div className="text-white font-black text-xl px-4 tracking-tighter">
                <img src={i1} alt="" />
            </div>
            <div className="flex items-center gap-3">
                <nav className="hidden lg:flex gap-3">
                   <p className="bg-[#0F0F0F] text-gray-400  px-5 py-3 rounded-xl text-xs font-medium transition-all scale-100 hover:scale-105 transition-transform duration-500 hover:text-[#CE7D63]">Home</p>
                   <p className="bg-[#0F0F0F] text-gray-400  px-5 py-3 rounded-xl text-xs font-medium transition-all scale-100 hover:scale-105 transition-transform duration-500 hover:text-[#CE7D63]">Services</p>
                   <p className="bg-[#0F0F0F] text-gray-400  px-5 py-3 rounded-xl text-xs font-medium transition-all scale-100 hover:scale-105 transition-transform duration-500 hover:text-[#CE7D63]">Projects</p>
                   <p className="bg-[#0F0F0F] text-gray-400  px-5 py-3 rounded-xl text-xs font-medium transition-all scale-100 hover:scale-105 transition-transform duration-500 hover:text-[#CE7D63]">About</p>
                   <p className="bg-[#0F0F0F] text-gray-400  px-5 py-3 rounded-xl text-xs font-medium transition-all scale-100 hover:scale-105 transition-transform duration-500 hover:text-[#CE7D63]">Careers</p>
                   <p className="bg-[#0F0F0F] text-gray-400  px-5 py-3 rounded-xl text-xs font-medium transition-all scale-100 hover:scale-105 transition-transform duration-500 hover:text-[#CE7D63]">Blogs</p>
                </nav>
                <button className="bg-[#D48D71] text-black px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold text-xs">CONTACT US</button>
            </div>
        </div>
    </header>
  );
};