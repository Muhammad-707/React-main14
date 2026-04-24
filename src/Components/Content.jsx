import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TodoList from './TodoList';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

import 'swiper/css';
import 'swiper/css/pagination';

import i1 from "../assets/Button (5).png";
import i2 from "../assets/b226f513f40323002014adf4315689b8accf4c55.png";
import i3 from "../assets/Button (6).png";
import i4 from "../assets/Icon Container.png";
import i5 from "../assets/Icon Container (1).png";
import i6 from "../assets/Icon Container (2).png";
import i7 from "../assets/Icon Container (3).png";
import i8 from "../assets/f842778e62470355285b76ba913f10bc6089f7d9.png";
import i9 from "../assets/43df4d730545501d2c48534a31f89cc5b2583c1e.png";
import i10 from "../assets/e3cb64ae24eeb62225b3f99c80fcbec169490ac0.png";
import i11 from "../assets/45792d0a273615cbe6261b9b00d3d7e04d275656.png";
import i12 from "../assets/Button (7).png";
import i13 from "../assets/Image (18).png";
import i14 from "../assets/Image (19).png";

export default function Content() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const reviews = [
        { text: "NexGen turned our business around!", author: "Sarah Thompson", role: "CEO of BlueBloom", avatar: i13 },
        { text: "The best digital agency we've ever worked with.", author: "Wade Warren", role: "Art Director", avatar: i14 },
        { text: "Incredible attention to detail.", author: "Lisa Williams", role: "CEO of HealthTech", avatar: i13 },
        { text: "Their design team is world-class.", author: "Jennifer Lee", role: "COO of Foodie Haven", avatar: i14 },
        { text: "NexGen turned our business around!", author: "Sarah Thompson", role: "CEO of BlueBloom", avatar: i13 },
        { text: "The best digital agency we've ever worked with.", author: "Wade Warren", role: "Art Director", avatar: i14 },
        { text: "Incredible attention to detail.", author: "Lisa Williams", role: "CEO of HealthTech", avatar: i13 },
        { text: "Their design team is world-class.", author: "Jennifer Lee", role: "COO of Foodie Haven", avatar: i14 },
        { text: "NexGen turned our business around!", author: "Sarah Thompson", role: "CEO of BlueBloom", avatar: i13 },
        { text: "The best digital agency we've ever worked with.", author: "Wade Warren", role: "Art Director", avatar: i14 },
        { text: "Incredible attention to detail.", author: "Lisa Williams", role: "CEO of HealthTech", avatar: i13 },
        { text: "Their design team is world-class.", author: "Jennifer Lee", role: "COO of Foodie Haven", avatar: i14 },
        { text: "NexGen turned our business around!", author: "Sarah Thompson", role: "CEO of BlueBloom", avatar: i13 },
        { text: "The best digital agency we've ever worked with.", author: "Wade Warren", role: "Art Director", avatar: i14 },
        { text: "Incredible attention to detail.", author: "Lisa Williams", role: "CEO of HealthTech", avatar: i13 },
        { text: "Their design team is world-class.", author: "Jennifer Lee", role: "COO of Foodie Haven", avatar: i14 },
    ];

    const sampleProjects = [
        { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" },
        { img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500" }
    ];

    return (
        <main className="pt-32 pb-20 px-4 md:px-6 bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
                
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-8 bg-[#111] border border-[#262626] p-8 md:p-16 rounded-[3rem] flex flex-col justify-between min-h-[450px]">
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter">Our Comprehensive</h1>
                                <img className='w-[220px]' src={i1} alt="" />
                            </div>
                            <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Digital Solutions</h1>
                            <p className="text-gray-500 text-sm max-w-2xl">At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm.</p>
                        </div>
                        <div className="mt-12 bg-[#0F0F0F] border border-[#262626] p-4 rounded-xl flex overflow-hidden whitespace-nowrap text-[10px] font-bold text-gray-600 gap-8 uppercase tracking-[0.3em]">
                            <span className='flex items-center'>Marketing <p className='text-[#CE7D63] font-bold text-[15px] px-1'>•</p> Website Design <p className='text-[#CE7D63] font-bold text-[15px] px-1'>•</p> Branding <p className='text-[#CE7D63] font-bold text-[15px] px-1'>•</p> Website Development <p className='text-[#CE7D63] font-bold text-[15px] px-1'>•</p> Mobile App Development</span>
                        </div>
                    </div>
                    <div className="lg:col-span-4 rounded-[3rem] overflow-hidden relative min-h-[350px]">
                        <img src={i2} alt="" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                            <button className="text-white text-[14px] font-bold px-4 py-2 rounded-full flex items-center gap-2 uppercase">
                                <img className='w-[29px]' src={i3} alt="" /> View Blog
                            </button>
                            <span className="text-white text-[10px] font-bold uppercase tracking-widest">Web Development.</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-[#1A1A1A] text-2xl p-6 rounded-2xl mb-6 border border-[#262626] text-white font-bold uppercase">Our Services</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card1 img={i4} title="Web Design" price="$1,500" desc="Our Web Design service is all about creating visually stunning and user-friendly websites." />
                        <Card2 img={i8} sectionTitle="Web Design Projects" projects={sampleProjects} />

                        <Card1 img={i5} title="Mobile App" price="$2,500" desc="With our Mobile App Development service, we harness the power of mobile technology." />
                        <Card2 img={i9} sectionTitle="App Projects" projects={sampleProjects} />

                        <Card1 img={i6} title="Web Development" price="$1,500" desc="Our Web Development service is focused on turning your website into a powerful digital asset." />
                        <Card2 img={i10} sectionTitle="Web Design Projects" projects={sampleProjects} />

                        <Card1 img={i7} title="Digital Marketing" price="$2,500" desc="In the digital age, marketing is a critical aspect of your business's success." />
                        <Card2 img={i11} sectionTitle="App Projects" projects={sampleProjects} />
                    </div>
                </section>

                <section>
                    <div className="flex justify-between items-center mb-10">
                        <div className="bg-[#111] border border-[#262626] px-6 py-4 rounded-2xl">
                            <h2 className="text-white text-2xl font-bold uppercase tracking-tight">Success Stories</h2>
                        </div>
                        <button className="text-gray-500 text-[10px] font-bold uppercase tracking-widest border border-[#262626] px-4 py-2 rounded-xl flex items-center gap-3 hover:bg-[#1A1A1A]">
                            <img className='w-[30px]' src={i12} alt="" /> View All
                        </button>
                    </div>

                    <div className="space-y-6">
                        <Card4
                            img={i5}
                            name="Klothink"
                            industry="E-commerce"
                            service="Design & Development"
                            solutionText="Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website."
                        />
                        <Card4
                            img={i6}
                            name="Fitness Tracker"
                            industry="Health & Fitness"
                            service="Mobile App Development"
                            solutionText="Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features."
                        />
                    </div>
                </section>

                <section className="py-10">
                    <div className="mb-10 inline-block bg-[#111] border border-[#262626] px-6 py-4 rounded-2xl">
                        <h2 className="text-white text-2xl font-bold uppercase tracking-tight">Testimonials</h2>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 1100, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="testimonials-swiper !pb-14"
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card3
                                    text={item.text}
                                    author={item.author}
                                    role={item.role}
                                    avatar={item.avatar}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <style jsx global>{`
                        .testimonials-swiper .swiper-pagination-bullet {
                            background: #262626 !important;
                            opacity: 1;
                        }
                        .testimonials-swiper .swiper-pagination-bullet-active {
                            background: #D48D71 !important;
                        }
                    `}</style>
                </section>

                <section>
                    <div className="bg-[#1A1A1A] p-6 rounded-2xl mb-6 border border-[#262626] flex justify-between items-center gap-3">
                        <span className="text-white text-xl md:text-3xl font-bold uppercase">Frequently Asked Questions</span>
                        <button className="text-gray-500 text-[10px] flex items-center gap-1 uppercase font-bold tracking-widest whitespace-nowrap">
                            <img className='w-[30px]' src={i12} alt="" /> ALL QUESTIONS
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="bg-[#1A1A1A] rounded-2xl border border-[#262626] overflow-hidden transition-all duration-300">
                                    <div
                                        onClick={() => toggleAccordion(i)}
                                        className="p-6 flex justify-between items-center text-white cursor-pointer hover:bg-[#222] transition-colors"
                                    >
                                        <span className="text-sm font-medium uppercase tracking-tight">How long does it take to complete a project?</span>
                                        <span className="text-[#D48D71] text-2xl w-6 text-center select-none">
                                            {openIndex === i ? '−' : '+'}
                                        </span>
                                    </div>
                                    {openIndex === i && (
                                        <div className="px-6 pb-6 text-gray-400 text-sm border-t border-[#262626]/50 pt-4">
                                            Typically, a project takes 2-4 weeks depending on the complexity and requirements.
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#1A1A1A] p-8 rounded-3xl border border-[#262626]">
                            <h3 className="text-white font-bold mb-6 uppercase tracking-tight">Ask your question</h3>
                            <div className="space-y-4">
                                <input className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm outline-none focus:border-[#D48D71]" placeholder="Name" />
                                <input className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm outline-none focus:border-[#D48D71]" placeholder="Email" />
                                <textarea className="w-full bg-[#111] border border-[#262626] p-4 rounded-xl text-white text-sm h-32 outline-none focus:border-[#D48D71] resize-none" placeholder="Your Question" />
                                <button className="w-full bg-[#D48D71] py-4 rounded-xl font-bold uppercase text-xs text-black hover:bg-[#b0745b] transition-colors">Send Your Message</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#D48D71] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-black text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-4">Ready to transform your<br /> digital presence?</h2>
                        <p className="text-black/60 font-bold uppercase text-[10px] tracking-widest">Take the first step towards digital success with NexGen by your side.</p>
                    </div>
                    <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold uppercase text-xs flex items-center gap-5 shrink-0">
                        Get in touch <img className='w-[35px]' src={i12} alt="" />
                    </button>
                </section>

                <section>
                    <TodoList />
                </section>
            </div>
        </main>
    );
}