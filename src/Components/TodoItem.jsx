import React from 'react';
import { Trash2, Edit3, Info } from "lucide-react";
import { IMAGE_URL } from "../Config/config";

export default function TodoItem({ item, onDelete, onEdit, onInfo }) {
    const isDone = item.isCompleted;

    return (
        <div className="relative bg-[#1A1A1A] border border-[#262626] rounded-[2rem] p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#D48D71]/50 group">
            
            {/* Кнопки управления (появляются при наведении или всегда полупрозрачны) */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    onClick={() => onEdit(item)} 
                    className="p-2 bg-[#111] border border-[#262626] rounded-full text-gray-400 hover:text-[#D48D71] hover:border-[#D48D71]/50 transition-colors"
                    title="Edit"
                >
                    <Edit3 size={14} />
                </button>
                <button 
                    onClick={() => onDelete(item.id)} 
                    className="p-2 bg-[#111] border border-[#262626] rounded-full text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
                    title="Delete"
                >
                    <Trash2 size={14} />
                </button>
            </div>

            {/* Кнопка Info (слева сверху) */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                    onClick={() => onInfo(item)}
                    className="p-2 bg-[#111] border border-[#262626] rounded-full text-gray-400 hover:text-blue-400 transition-colors"
                >
                    <Info size={14} />
                </button>
            </div>

            {/* Контейнер для изображения */}
            <div className="relative mb-4 mt-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#262626] group-hover:border-[#D48D71] transition-colors">
                    <img 
                        src={item.images?.[0]?.imageName ? `${IMAGE_URL}${item.images[0].imageName}` : "https://via.placeholder.com/80"} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Индикатор статуса */}
                <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-[#1A1A1A] ${isDone ? 'bg-green-500' : 'bg-orange-500'}`} />
            </div>

            {/* Текстовая часть */}
            <div className="space-y-2 w-full">
                <h3 className="text-white font-bold uppercase tracking-tight text-lg truncate px-2">
                    {item.name}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2 h-8 px-2">
                    {item.description || "No description provided"}
                </p>
                
                <div className="pt-4">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full border ${
                        isDone 
                        ? 'border-green-500/20 bg-green-500/5 text-green-500' 
                        : 'border-[#D48D71]/20 bg-[#D48D71]/5 text-[#D48D71]'
                    }`}>
                        {isDone ? "Task Completed" : "In Progress"}
                    </span>
                </div>
            </div>
        </div>
    );
}