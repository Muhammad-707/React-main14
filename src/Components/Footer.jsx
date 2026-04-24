import React from 'react';

import i1 from "../assets/Icon Container (4).png"
import i2 from "../assets/Icon Container (5).png"
import i3 from "../assets/Icon Container (6).png"
import i4 from "../assets/Icon Container (7).png"
import i5 from "../assets/Button (7).png"

export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] pt-20 pb-10 px-4 md:px-6">
            <div className="max-w-7xl mx-auto space-y-4">

                <div className='flex justify-between gap-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                        <div className="bg-[#1A1A1A] p-8 rounded-[24px] border border-[#262626] flex flex-col justify-between h-[240px] transition-all">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-[#262626] rounded-xl flex items-center justify-center border border-[#333]">
                                    <img src={i1} alt="Instagram Icon" className="w-full h-full object-contain" />
                                </div>
                                <img src={i5} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2 uppercase">Instagram</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Share visually appealing snippets of our latest web projects.</p>
                            </div>
                        </div>

                        <div className="bg-[#1A1A1A] p-8 rounded-[24px] border border-[#262626] flex flex-col justify-between h-[240px] transition-all ">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-[#262626] rounded-xl flex items-center justify-center border border-[#333]">
                                    <img src={i2} alt="Twitter Icon" className="w-full h-full object-contain" />
                                </div>
                                <img src={i5} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2 uppercase">Twitter</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Tweet about interesting coding challenges you've overcome.</p>
                            </div>
                        </div>

                        <div className="bg-[#1A1A1A] p-8 rounded-[24px] border border-[#262626] flex flex-col justify-between h-[240px] transition-all">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-[#262626] rounded-xl flex items-center justify-center border border-[#333]">
                                    <img src={i3} alt="Dribbble Icon" className="w-full h-full object-contain" />
                                </div>
                                <img src={i5} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2 uppercase">Dribbble</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Showcase design elements of our web projects.</p>
                            </div>
                        </div>

                        <div className="bg-[#1A1A1A] p-8 rounded-[24px] border border-[#262626] flex flex-col justify-between h-[240px] transition-all">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-[#262626] rounded-xl flex items-center justify-center border border-[#333]">
                                    <img src={i4} alt="Behance Icon" className="w-full h-full object-contain" />
                                </div>
                                <img src={i5} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2 uppercase">Behance</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">Create detailed presentations for our projects.</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#1A1A1A] border border-[#262626] rounded-[32px] p-10 md:p-16 md:flex hidden">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            <div>
                                <h4 className="text-white font-bold mb-8 text-base">Home</h4>
                                <ul className="text-gray-500 space-y-4 text-sm">
                                    <li>Why Us</li><li>About Us</li><li>Testimonials</li><li>FAQ's</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-8 text-base">Services</h4>
                                <ul className="text-gray-500 space-y-4 text-sm">
                                    <li>Web Development</li><li>App Development</li><li>Web Design</li><li>Digital Marketing</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-8 text-base">Projects</h4>
                                <ul className="text-gray-500 space-y-4 text-sm">
                                    <li>Klothink</li><li>Zenith</li><li>Novus</li><li>Apex</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-8 text-base">Blogs</h4>
                                <ul className="text-gray-500 space-y-4 text-sm">
                                    <li>Business</li>
                                    <li className="flex items-center gap-2">Design <span className="bg-[#262626] text-[10px] text-gray-400 px-2 py-0.5 rounded-full border border-[#333]">Soon</span></li>
                                    <li className="flex items-center gap-2">Development <span className="bg-[#262626] text-[10px] text-gray-400 px-2 py-0.5 rounded-full border border-[#333]">Soon</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[32px] p-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-left">
                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2 block">Newsletter</span>
                        <h2 className="text-white text-2xl font-bold uppercase">Subscribe to our newsletter</h2>
                    </div>
                    <div className="relative w-full md:max-w-md border-b border-[#262626] flex items-center pb-2">
                        <input className="bg-transparent w-full text-white outline-none text-sm py-2" placeholder="Enter your email" />
                        <button className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">↗</button>
                    </div>
                </div>

                <div className="bg-[#1A1A1A] border border-[#262626] rounded-[24px] p-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[11px]">
                    <p>© 2024 NextGen. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}