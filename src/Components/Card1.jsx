import React from 'react';
import i1 from "../assets/Button (7).png"

export default function Card1({img, title, desc, price, icon }) {
  return (
    <div className="bg-[#111] border border-[#262626] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between  transition-all group h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl border border-[#262626] flex items-center justify-center">
            <img src={img} alt="" />
          </div>
          <button className="flex items-center gap-2 text-[#D48D71] group-hover:bg-[#D48D71] group-hover:text-black transition-all border border-[#262626] px-3 py-2 rounded-full">
            <img className='w-[30px]' src={i1} alt="" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Book a call</span>
          </button>
        </div>
        <h3 className="text-white text-lg font-bold uppercase mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-500 text-[13px] leading-relaxed mb-10">{desc}</p>
      </div>
      <div className="pt-6 border-t border-[#262626] flex items-center justify-between">
        <p className="text-white font-bold text-lg uppercase tracking-tighter">Starts From {price}</p>
      </div>
    </div>
  );
}