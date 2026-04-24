import React from 'react';

import i1 from "../assets/Button (6).png"
import i2 from "../assets/Button (7).png"

export default function Card2({img, sectionTitle, projects = [] }) {
  return (
    <div className="bg-[#111] border border-[#262626] p-6 md:p-8 rounded-[2rem] h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-white text-sm font-bold uppercase tracking-widest">{sectionTitle}</h3>
        <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-all">
            <img className='w-[39px]' src={i2} alt="" />
          <span className="text-[10px] font-bold uppercase tracking-widest">View All</span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-2xl border border-[#262626]">
            <img src={img} alt="" className="w-full h-50 object-cover opacity-60 group-hover:opacity-100 transition-all group-hover:scale-105" />
            <div className="absolute bottom-3 left-3">
               <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 uppercase">
                 <img className='w-[30px]' src={i1} alt="" /> Open Project
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}