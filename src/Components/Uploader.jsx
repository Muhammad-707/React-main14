import React from 'react';
import { CloudUpload } from "lucide-react";

export default function Uploader({ onChange }) {
    return (
        <div className="w-full">
            <label className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-[#262626] border-dashed rounded-[2rem] cursor-pointer bg-[#111] hover:bg-[#161616] hover:border-[#D48D71] transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="p-4 bg-[#1A1A1A] rounded-full border border-[#262626] group-hover:border-[#D48D71]/50 group-hover:bg-[#D48D71]/10 transition-all duration-300 mb-4">
                        <CloudUpload className="w-8 h-8 text-gray-500 group-hover:text-[#D48D71] transition-colors" />
                    </div>
                    
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">
                        Click to upload image
                    </p>
                    <p className="text-[9px] text-gray-600 mt-1 uppercase">
                        PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </div>

                <input 
                    type="file" 
                    className="hidden" 
                    onChange={onChange} 
                    accept="image/*"
                    multiple 
                />
            </label>
        </div>
    );
}