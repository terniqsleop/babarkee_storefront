"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white pt-24 md:pt-32 pb-12 px-6 md:px-12 relative z-10 overflow-hidden">
            <div className="max-w-[1500px] mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">

                    {/* Newsletter (Left) */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
                        >
                            Join The <span className="text-[#efaa27]">Movement.</span>
                        </motion.h3>
                        <p className="text-white/60 font-medium max-w-md text-sm md:text-base leading-relaxed">
                            Sign up for exclusive drops, early access to new collections, and underground events in your city.
                        </p>

                        <form className="mt-4 flex flex-col sm:flex-row gap-4 w-full max-w-xl">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="bg-[#1a1a1a] text-white px-6 py-4 rounded-full border border-white/10 outline-none focus:border-white/40 transition-colors flex-grow uppercase tracking-widest text-xs font-bold"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-[#efaa27] hover:text-white transition-all shadow-xl whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Links Grid (Right) */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 pl-0 lg:pl-16">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-[family-name:var(--font-oswald)] font-black tracking-widest uppercase text-white/40 text-sm">Shop</h4>
                            <div className="flex flex-col gap-4">
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">New Arrivals</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Outerwear</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Essentials</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Accessories</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h4 className="font-[family-name:var(--font-oswald)] font-black tracking-widest uppercase text-white/40 text-sm">Company</h4>
                            <div className="flex flex-col gap-4">
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">About Us</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Journal</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Stockists</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Careers</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 col-span-2 sm:col-span-1 mt-8 sm:mt-0">
                            <h4 className="font-[family-name:var(--font-oswald)] font-black tracking-widest uppercase text-white/40 text-sm">Support</h4>
                            <div className="flex flex-col gap-4">
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">FAQ</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Shipping</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Returns</Link>
                                <Link href="#" className="font-bold text-sm tracking-wide uppercase hover:text-[#efaa27] transition-colors w-fit">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Massive Branding Bottom */}
                <div className="flex flex-col items-center justify-center border-t border-white/5 pt-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full text-center relative z-0 flex justify-center items-center"
                    >
                        {/* Huge Background Text Logo */}
                        <div className="font-[family-name:var(--font-oswald)] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-white/0 select-none pb-8"
                            style={{ fontSize: "clamp(4rem, 18vw, 24rem)", lineHeight: 0.8 }}>
                            BABARKEE
                        </div>

                        {/* Animated Diamond SVG overlaid in the center */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <motion.svg
                                width="64"
                                height="64"
                                viewBox="0 0 32 32"
                                className="w-12 h-12 md:w-20 md:h-20 overflow-visible drop-shadow-2xl"
                            >
                                {/* Dynamic Outer Orbit */}
                                <motion.rect
                                    x="4" y="4" width="24" height="24" rx="8"
                                    stroke="#efaa27" strokeWidth="1.5" fill="none"
                                    style={{ originX: "50%", originY: "50%" }}
                                    variants={{
                                        initial: { rotate: 45, pathLength: 0, opacity: 0 },
                                        animate: {
                                            rotate: [45, 405],
                                            pathLength: [0, 1, 0],
                                            opacity: [0, 1, 0],
                                            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                        }
                                    }}
                                />
                                {/* Inner Diamond */}
                                <motion.rect
                                    x="8" y="8" width="16" height="16" rx="5"
                                    fill="#efaa27"
                                    style={{ originX: "50%", originY: "50%" }}
                                    variants={{
                                        initial: { scale: 0, rotate: 45 },
                                        animate: {
                                            scale: 1,
                                            rotate: [45, 135, 225, 315, 405],
                                            transition: {
                                                scale: { duration: 0.8, ease: "backOut" },
                                                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                                            }
                                        }
                                    }}
                                />
                                {/* Pulsing Dark Dot */}
                                <motion.circle
                                    cx="16" cy="16" r="2.5"
                                    fill="#0a0a0a"
                                    variants={{
                                        initial: { scale: 0 },
                                        animate: {
                                            scale: [1, 1.5, 1],
                                            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                                        }
                                    }}
                                />
                            </motion.svg>
                        </motion.div>
                    </motion.div>

                    {/* Footer Bottom Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full mt-12 gap-8 z-10">
                        <p className="text-[10px] md:text-xs font-bold tracking-widest text-white/40 uppercase text-center md:text-left">
                            © {new Date().getFullYear()} Babarkee. All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/40 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 text-[10px] md:text-xs font-bold tracking-widest text-white/40 uppercase">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
