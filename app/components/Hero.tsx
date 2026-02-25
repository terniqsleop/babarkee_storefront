"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();

    // Scroll Animations
    // 1. Text fades and parallaxes up
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const textY = useTransform(scrollY, [0, 300], [0, -100]);

    // 2. The huge black block scales up using GPU accelerated transform instead of heavy CSS layout `width`
    const blockScaleX = useTransform(scrollY, [0, 400], [0.96, 1]);
    const borderRadius = useTransform(scrollY, [0, 400], ["24px", "0px"]);

    // 3. The video behind slowly scales down to 1 (starts slightly zoomed in)
    const videoScale = useTransform(scrollY, [0, 500], [1.15, 1]);
    const videoY = useTransform(scrollY, [0, 500], [0, 200]); // Soft parallax tracking effect instead of pure fixed

    return (
        <section className="relative w-full min-h-[100vh] bg-white text-black overflow-hidden">
            {/* Background Video bounded accurately to the container depth */}
            <motion.div
                style={{ scale: videoScale, y: videoY }}
                className="absolute inset-0 w-full h-full z-0 pointer-events-none transform-origin-center origin-center"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Screen Blend Overlay - Black becomes transparent, White stays solid white */}
            <motion.div
                className="absolute inset-0 z-10 bg-white mix-blend-screen flex flex-col items-center pt-24 pb-8"
            >
                {/* Giant BABARKEE Text Mask */}
                <motion.h1
                    className="font-sans text-black font-black tracking-tighter text-center leading-[0.8] select-none w-full max-w-[100vw] uppercase"
                    style={{
                        fontSize: "clamp(4rem, 18vw, 16rem)",
                        opacity: textOpacity,
                        y: textY
                    }}
                >
                    BABARKEE
                </motion.h1>

                {/* The Large Video Window Block below the text */}
                <motion.div
                    style={{
                        scaleX: blockScaleX,
                        borderTopLeftRadius: borderRadius,
                        borderTopRightRadius: borderRadius,
                        borderBottomLeftRadius: borderRadius,
                        borderBottomRightRadius: borderRadius
                    }}
                    className="mt-4 sm:mt-8 bg-black relative flex-grow min-h-[50vh] w-full max-w-[1700px] origin-bottom will-change-transform"
                />
            </motion.div>
        </section>
    );
}
