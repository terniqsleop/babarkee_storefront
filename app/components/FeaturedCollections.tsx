"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
    {
        id: 1,
        title: "Aero Series",
        description: "Ultra-lightweight garments built for maximum mobility and breathtaking aesthetics.",
        image: "/hero_images/1.png",
        color: "bg-[#f4f4f5]",
        colSpan: "col-span-2 lg:col-span-4",
        aspect: "aspect-[4/3] sm:aspect-[4/5]",
    },
    {
        id: 2,
        title: "Origins Classic",
        description: "The timeless silhouette that started it all. Redefined with premium organic cotton.",
        image: "/hero_images/2.png",
        color: "bg-[#ececec]",
        colSpan: "col-span-1 lg:col-span-4",
        aspect: "aspect-[3/4] sm:aspect-[4/5]",
    },
    {
        id: 3,
        title: "Nocturne Drop",
        description: "Dark, sleek, and defiant. Limited edition streetwear for the night owls.",
        image: "/hero_images/3.png",
        color: "bg-[#e2e2e2]",
        colSpan: "col-span-1 lg:col-span-4",
        aspect: "aspect-[3/4] sm:aspect-[4/5]",
    }
];

export default function FeaturedCollections() {
    return (
        <section className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-12 relative z-20">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-black"></div>
                            <span className="text-black font-semibold tracking-[0.2em] text-sm uppercase">Curated</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                            Featured<br />
                            <span className="text-black/30">Collections.</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-3 border-b-2 border-black pb-1 hover:pr-4 transition-all w-fit"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">View All Drops</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`group cursor-pointer flex flex-col ${item.colSpan}`}
                        >
                            <div className={`relative w-full ${item.aspect} ${item.color} rounded-2xl overflow-hidden mb-4 sm:mb-6 flex items-center justify-center p-6 sm:p-8`}>
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Quick Add Button */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                    <button className="bg-white text-black font-bold uppercase tracking-widest text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-black hover:text-white transition-colors shadow-xl w-max">
                                        Explore
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 sm:gap-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight truncate mr-2">{item.title}</h3>
                                    <span className="text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 bg-black text-white rounded-full shrink-0">New</span>
                                </div>
                                <p className="text-black/60 font-medium text-xs sm:text-sm leading-relaxed max-w-[95%] line-clamp-2 sm:line-clamp-none">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
