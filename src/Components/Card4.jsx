import React from 'react';

import i1 from "../assets/Button (7).png"

export default function Card4({ img, name, industry, service, solutionText, icon }) {
    return (
        <div className="bg-[#111] border border-[#262626] p-6 md:p-10 rounded-[2.5rem] flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 space-y-6">
                <div className="flex items-center justify-between gap-3">
                    <div className='flex items-center gap-3'>
                        <div className="w-12 h-12 bg-[#1A1A1A] border border-[#262626] rounded-xl flex items-center justify-center text-2xl">
                            <img src={img} alt="" />
                        </div>
                        <h3 className="text-white text-xl font-bold uppercase">{name}</h3>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-[30px]' src={i1} alt="" />
                        <p className='text-gray-500 text-[10px] font-bold uppercase tracking-widest'>Visit Website</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#1A1A1A] border border-[#262626] rounded-full text-[10px] text-gray-400 uppercase">Industry: {industry}</span>
                    <span className="px-4 py-2 bg-[#1A1A1A] border border-[#262626] rounded-full text-[10px] text-gray-400 uppercase">Service: {service}</span>
                </div>
            </div>

            <div className="lg:w-2/3 bg-[#1A1A1A] border border-[#262626] p-6 md:p-8 rounded-[2rem] relative">
                <div className="flex gap-2 mb-4">
                    <span className="text-[10px] text-gray-500 uppercase px-3 py-1 border border-[#262626] rounded-md">Challenge</span>
                    <span className="text-[10px] text-black bg-[#D48D71] uppercase px-3 py-1 rounded-md font-bold">Solution</span>
                    <span className="text-[10px] text-gray-500 uppercase px-3 py-1 border border-[#262626] rounded-md">Results</span>
                </div>
                <h4 className="text-white font-bold uppercase mb-4">Solution</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{solutionText}</p>
            </div>
        </div>
    );
}