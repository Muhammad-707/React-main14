import React from 'react';
import { X } from 'lucide-react';
import { IMAGE_URL } from "../Config/config";

export default function InfoModal({ open, setOpen, item }) {
    if (!open || !item) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setOpen(false)} />
            <div className="relative bg-[#1A1A1A] border border-[#262626] w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl">
                <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white"><X /></button>
                
                <div className="flex flex-col items-center text-center">
                    <img 
                        src={item.images?.[0]?.imageName ? `${IMAGE_URL}${item.images[0].imageName}` : "https://via.placeholder.com/150"} 
                        className="w-32 h-32 rounded-full border-4 border-[#262626] mb-6 object-cover"
                    />
                    <h2 className="text-white text-2xl font-bold uppercase mb-2">{item.name}</h2>
                    <p className="text-gray-400 text-sm mb-6">{item.description || "No description provided"}</p>
                    <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${item.isCompleted ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                        {item.isCompleted ? "Status: Completed" : "Status: In Progress"}
                    </div>
                </div>
            </div>
        </div>
    );
}