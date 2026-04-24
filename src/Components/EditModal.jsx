import React from 'react';
import { X } from 'lucide-react';

export default function EditModal({
    open,
    setOpen,
    onSave, // Логика сохранения (PUT запрос)
    name,
    setName,
    desc,
    setDesc,
    // В EditModal часто нужно передавать текущее изображение для превью
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />

            <div className="relative bg-[#1A1A1A] border border-[#262626] w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-white text-2xl font-bold uppercase tracking-tight">Edit Task</h2>
                    <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-gray-500 text-[10px] uppercase font-bold tracking-widest ml-2">Title</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm outline-none focus:border-[#D48D71]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-500 text-[10px] uppercase font-bold tracking-widest ml-2">Description</label>
                            <textarea
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm h-32 outline-none focus:border-[#D48D71] resize-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button onClick={() => setOpen(false)} className="flex-1 py-4 border border-[#262626] text-white rounded-xl font-bold uppercase text-xs">
                            Discard
                        </button>
                        <button onClick={onSave} className="flex-1 py-4 bg-[#D48D71] text-black rounded-xl font-bold uppercase text-xs">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}