"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Array of premium-sounding streetwear reviews
const reviews = [
    {
        id: 1,
        name: "Marcus T.",
        role: "Verified Buyer",
        text: "The Phantom Shell Jacket is unreal. The silhouette is crazy and the material feels incredibly premium.",
        rating: 5,
    },
    {
        id: 2,
        name: "Elena R.",
        role: "Verified Buyer",
        text: "Finally, everyday essentials that actually fit perfectly. The 50% off promo was an absolute steal.",
        rating: 5,
    },
    {
        id: 3,
        name: "David K.",
        role: "Verified Buyer",
        text: "Wore the Aero Series out last night. Got three compliments in an hour. The aesthetic is unmatched right now.",
        rating: 5,
    },
    {
        id: 4,
        name: "Sarah J.",
        role: "Verified Buyer",
        text: "The monochrome pants are my new uniform. Structured, heavyweight, yet somehow breathable. 10/10.",
        rating: 5,
    },
    {
        id: 5,
        name: "Julian B.",
        role: "Verified Buyer",
        text: "Packaging was beautiful. Shipping was fast. The hoodie feels like it should cost triple the price.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-black text-white w-full py-24 md:py-32 overflow-hidden relative z-10 selection:bg-white selection:text-black">
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-px w-12 bg-white"></div>
                            <span className="text-white font-semibold tracking-[0.2em] text-sm uppercase">Community</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                            Don't Just <br />
                            <span className="text-white/30">Take Our Word.</span>
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Marquee Container */}
            <div className="relative w-full flex flex-col gap-6 md:gap-8">
                {/* Fade overlays for the edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Marquee Row 1 (Moves Left) */}
                <div className="flex w-fit relative overflow-visible">
                    <motion.div
                        className="flex gap-6 md:gap-8 px-3 md:px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 35,
                            repeat: Infinity,
                        }}
                    >
                        {/* Duplicate the array twice inside the loop to create the seamless infinite scroll */}
                        {[...reviews, ...reviews, ...reviews].map((review, i) => (
                            <div
                                key={`row1-${i}`}
                                className="w-[300px] md:w-[450px] shrink-0 bg-[#111111] p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 hover:border-white/20 transition-colors"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#efaa27] text-[#efaa27]" />
                                    ))}
                                </div>
                                <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 text-white/90">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center font-black text-white font-[family-name:var(--font-oswald)]">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold uppercase tracking-widest text-sm">{review.name}</span>
                                        <span className="text-xs font-medium text-white/40 tracking-wider uppercase">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
