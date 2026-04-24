import React from 'react';
import i1 from "../assets/Button (8).png"

export default function Card3({ text, author, role, avatar }) {
  return (
    <div className="bg-[#111] border border-[#262626] p-8 rounded-[2.5rem] flex flex-col justify-between hover:bg-[#161616] transition-all">
      <h4 className="text-white font-bold text-sm md:text-base mb-5 leading-tight uppercase tracking-tight">"{text}"</h4>
      <p className='text-[#B3B3B2] mb-5'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
      <div className="flex items-center justify-between pt-6 border-t border-[#262626]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#262626] overflow-hidden">
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-[11px] uppercase text-white tracking-wide">{author}</div>
            <div className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">{role}</div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-gray-500 hover:text-[#D48D71] cursor-pointer">
            <img className='w-[30px]' src={i1} alt="" />
        </div>
      </div>
    </div>
  );
}