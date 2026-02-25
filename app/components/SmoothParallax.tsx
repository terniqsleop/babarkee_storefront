"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue, useMotionValueEvent, useSpring } from "framer-motion";

const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg",
    "9.jpg", "10.jpg", "11.jpg", "12.jpg"
];

export default function SmoothParallax() {
    const gallery = useRef<HTMLDivElement>(null);
    const videoContainer = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"]
    });

    // 1. SMooth the Image Parallax specifically to combat native scroll jitter on mobile
    const smoothImageProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { scrollYProgress: videoScrollProgress } = useScroll({
        target: videoContainer,
        offset: ["start end", "end start"]
    });

    // 2. Smooth the Video Scrub target vector to prevent overwhelming decoder hardware
    const smoothVideoProgress = useSpring(videoScrollProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001
    });

    const lastRenderedTime = useRef(0);

    useMotionValueEvent(smoothVideoProgress, "change", (latest) => {
        if (!videoRef.current || isNaN(videoRef.current.duration)) return;

        const targetTime = latest * videoRef.current.duration;

        // Throttling the `currentTime` update to approximately 24 FPS (every 0.04s).
        // If we push updates faster than mobile processors can decode intra-frames, Chrome/Safari will violently stutter.
        if (Math.abs(targetTime - lastRenderedTime.current) > 0.04) {
            requestAnimationFrame(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = targetTime;
                    lastRenderedTime.current = targetTime;
                }
            });
        }
    });

    const { height } = dimension;

    // Values mapped to vertical position based on smoothed image progress
    const y1 = useTransform(smoothImageProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(smoothImageProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(smoothImageProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(smoothImageProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force browser to dedicate resources purely to our manual scrubbing by pausing natively.
        // Timeout ensures the initial starting frame actually computes and paints first.
        setTimeout(() => {
            video.pause();
        }, 100);

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", resize);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section className="bg-white">
            {/* Extended height pinned container for frame-by-frame video scrub */}
            <div ref={videoContainer} className="relative w-full h-[150vh] md:h-[250vh]">
                <div className="sticky top-0 w-full h-screen overflow-hidden">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ willChange: "transform" }}
                    >
                        <source src="/video2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Gallery Wrapper */}
            <div ref={gallery} className="h-[175vh] bg-[#111111] relative flex gap-[2vw] p-[2vw] overflow-hidden">
                <Column images={[images[0], images[1], images[2]]} y={y1} top="-45%" />
                <Column images={[images[3], images[4], images[5]]} y={y2} top="-95%" />
                <Column images={[images[6], images[7], images[8]]} y={y3} top="-45%" />
                <Column images={[images[9], images[10], images[11]]} y={y4} top="-75%" />
            </div>
        </section>
    );
}

const Column = ({ images, y, top }: { images: string[], y: MotionValue<number>, top: string }) => {
    return (
        <motion.div
            className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]"
            style={{ y, top, willChange: "transform" }}
        >
            {images.map((src, i) => (
                <div key={i} className="h-full w-full relative rounded-2xl md:rounded-[1vw] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                    <Image
                        src={`/images/${src}`}
                        alt={`Lookbook image ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>
            ))}
        </motion.div>
    );
}
