"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MoveRight, ShieldCheck, Feather, Wind } from "lucide-react";

export default function DiscountPromo() {
    return (
        <section className="bg-[#f8f8f8] text-black w-full overflow-hidden relative z-10 border-t border-black/5">
            <div className="max-w-[1500px] mx-auto min-h-[40vh] lg:min-h-[80vh] flex flex-row items-stretch">

                {/* Left Content */}
                <div className="w-1/2 lg:w-[55%] p-4 sm:p-8 md:p-12 lg:p-24 flex flex-col justify-center z-10 relative order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-2 lg:mb-4 pr-2">
                            Premium Heavyweight <br className="hidden sm:block" />
                            <span className="text-black/30">Essentials.</span>
                        </h2>
                        <p className="text-[10px] sm:text-xs md:text-base lg:text-xl font-medium text-black/70 mb-4 lg:mb-10 max-w-lg leading-tight lg:leading-relaxed pr-2">
                            Everyday ease, unmatched durability, & breathable comfort engineered for the streets.
                        </p>

                        <div className="flex flex-col xl:flex-row xl:items-center gap-2 lg:gap-6 mb-6 lg:mb-12">
                            <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter font-[family-name:var(--font-oswald)] leading-none text-black">
                                50<span className="text-3xl md:text-5xl lg:text-7xl text-[#efaa27]">%</span>
                            </span>
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-xs lg:text-base font-black tracking-[0.2em] uppercase text-black mb-0.5 lg:mb-1">
                                    Off Select Styles
                                </span>
                                <p className="text-[7px] sm:text-[9px] lg:text-xs font-bold tracking-widest uppercase text-black/50 max-w-[120px] lg:max-w-[200px] leading-relaxed hidden sm:block">
                                    Over 10,000 customers repeat their order from this series.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row flex-wrap gap-2 lg:gap-8 mb-6 lg:mb-16">
                            <div className="flex items-center gap-1.5 lg:gap-4">
                                <div className="p-1 lg:p-3 bg-white rounded-full shadow-sm border border-black/5 hidden md:block">
                                    <Feather className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                                </div>
                                <span className="text-[8px] sm:text-[10px] lg:text-sm font-bold tracking-widest uppercase text-black/80">Soft Texture</span>
                            </div>
                            <div className="flex items-center gap-1.5 lg:gap-4">
                                <div className="p-1 lg:p-3 bg-white rounded-full shadow-sm border border-black/5 hidden md:block">
                                    <Wind className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                                </div>
                                <span className="text-[8px] sm:text-[10px] lg:text-sm font-bold tracking-widest uppercase text-black/80">Breathable</span>
                            </div>
                            <div className="flex items-center gap-1.5 lg:gap-4">
                                <div className="p-1 lg:p-3 bg-white rounded-full shadow-sm border border-black/5 hidden md:block">
                                    <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                                </div>
                                <span className="text-[8px] sm:text-[10px] lg:text-sm font-bold tracking-widest uppercase text-black/80">Durable Knit</span>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row xl:items-center gap-3 lg:gap-8">
                            <div className="bg-black text-white px-3 py-1.5 lg:px-10 lg:py-5 text-xs sm:text-sm lg:text-3xl font-black font-[family-name:var(--font-oswald)] tracking-wider w-fit">
                                $ 45.00
                            </div>
                            <button className="group flex items-center gap-2 lg:gap-4 border-b lg:border-b-2 border-black pb-0.5 lg:pb-2 hover:pr-2 lg:hover:pr-4 transition-all w-fit">
                                <span className="uppercase font-black border-black/70 tracking-widest text-[8px] sm:text-[10px] lg:text-sm">Shop Now</span>
                                <MoveRight className="w-3 h-3 lg:w-6 lg:h-6 group-hover:translate-x-1 lg:group-hover:translate-x-3 group-hover:text-[#efaa27] transition-all" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="w-1/2 lg:w-[45%] relative min-h-full bg-[#f0f0f0] overflow-hidden order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src="/images/5.jpg"
                            alt="Discount Promotional Item"
                            fill
                            className="object-cover object-center lg:object-left"
                            sizes="(max-width: 1024px) 50vw, 50vw"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
