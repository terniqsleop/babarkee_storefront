"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stairAnim = {
    initial: { height: "100%" },
    enter: (i: number) => ({
        height: 0,
        transition: {
            duration: 0.5,
            delay: 1.2 + 0.05 * i, // Wait 1.2s for logo animation
            ease: [0.76, 0, 0.24, 1] as const,
        },
    }),
};

export default function Template({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const numOfColumns = 5;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {/* Global Page Transition Overlay */}
            <div className="fixed inset-0 z-[100] pointer-events-none flex">

                {/* 5 Stair Columns */}
                {[...Array(numOfColumns)].map((_, i) => (
                    <motion.div
                        key={i}
                        custom={numOfColumns - i}
                        variants={stairAnim}
                        initial="initial"
                        animate="enter"
                        className="h-full w-full bg-black relative"
                        style={{ transformOrigin: "top" }}
                    />
                ))}

                {/* Centered Loading Logo */}
                {isMounted && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-[110]"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 1.1, duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.svg
                            width="80"
                            height="80"
                            viewBox="0 0 32 32"
                            className="w-16 h-16 md:w-24 md:h-24 overflow-visible drop-shadow-2xl"
                            initial="initial"
                            animate="animate"
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
                                        pathLength: [0, 1, 0, 1], // draws in and out quickly
                                        opacity: [0, 1, 0, 0],
                                        transition: { duration: 1.2, ease: "easeInOut" }
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
                                        scale: [0, 1, 1, 0.8],
                                        rotate: [45, 135, 225],
                                        transition: { duration: 1.2, ease: "backOut" }
                                    }
                                }}
                            />
                            {/* Pulsing White Dot */}
                            <motion.circle
                                cx="16" cy="16" r="3"
                                fill="white"
                                variants={{
                                    initial: { scale: 0 },
                                    animate: {
                                        scale: [0, 1.5, 1, 1.5],
                                        transition: { duration: 1.2, ease: "easeInOut" }
                                    }
                                }}
                            />
                        </motion.svg>
                    </motion.div>
                )}
            </div>

            {/* The actual page content */}
            {children}
        </>
    );
}
