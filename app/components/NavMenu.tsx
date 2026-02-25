"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const menuLinks = [
    { title: "Home", href: "/" },
    { title: "New Arrivals", href: "/new-arrivals" },
    { title: "Collections", href: "/shop" },
    { title: "Lookbook", href: "/lookbook" },
    { title: "Contact", href: "/contact" },
];

const heightAnim = {
    initial: {
        height: 0,
    },
    enter: (i: number) => ({
        height: "100%",
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    }),
    exit: (i: number) => ({
        height: 0,
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    }),
};

export default function NavMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const numOfColumns = 5;

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-[60] pointer-events-none flex">
                        {[...Array(numOfColumns)].map((_, i) => (
                            <motion.div
                                key={i}
                                custom={numOfColumns - i}
                                variants={heightAnim}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                className="h-full w-full bg-black"
                                style={{ transformOrigin: "bottom" }}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="fixed inset-0 z-[65] flex items-center justify-center pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.2 } }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        data-lenis-prevent
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => onClose()}
                            className="absolute top-6 right-6 md:top-8 md:right-12 text-white/50 hover:text-[#efaa27] transition-colors p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Menu Links */}
                        <div className="flex flex-col items-center gap-4 md:gap-8">
                            {menuLinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    className="overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5 + 0.1 * index,
                                        ease: [0.76, 0, 0.24, 1] as const,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => onClose()}
                                        className="font-[family-name:var(--font-oswald)] group relative flex items-center justify-center text-4xl md:text-7xl font-black text-white hover:text-[#efaa27] uppercase tracking-tighter transition-all"
                                    >
                                        <span className="hidden md:block absolute right-full mr-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-12 h-12" />
                                        </span>
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom info */}
                        <motion.div
                            className="absolute bottom-8 left-0 right-0 text-center text-white/40 text-sm tracking-widest font-bold uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            Babarkee © {new Date().getFullYear()}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
