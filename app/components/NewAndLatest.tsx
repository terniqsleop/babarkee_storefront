"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Phantom Shell Jacket",
        category: "Outerwear",
        price: "$185",
        image: "/tshirt/1.png",
        colSpan: "col-span-2 md:col-span-8",
        height: "h-[450px] md:h-[80vh]",
        tag: "Selling Fast",
        theme: "light"
    },
    {
        id: 2,
        name: "Monochrome Worker Pants",
        category: "Bottoms",
        price: "$95",
        image: "/tshirt/2.png",
        colSpan: "col-span-1 md:col-span-4",
        height: "h-[300px] md:h-[80vh]",
        tag: "Just Dropped",
        theme: "dark"
    },
    {
        id: 3,
        name: "Vintage Bleach Hoodie",
        category: "Hoodies",
        price: "$120",
        image: "/tshirt/3.png",
        colSpan: "col-span-1 md:col-span-5",
        height: "h-[300px] md:h-[600px]",
        tag: "Limited",
        theme: "light"
    },
    {
        id: 4,
        name: "Studio Graphic Tee",
        category: "T-Shirts",
        price: "$45",
        image: "/tshirt/1.png",
        colSpan: "col-span-2 md:col-span-7",
        height: "h-[450px] md:h-[600px]",
        tag: "",
        theme: "dark"
    }
];

export default function NewAndLatest() {
    return (
        <section className="bg-white text-black py-24 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden">
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
                            <span className="text-black font-semibold tracking-[0.2em] text-sm uppercase">Fresh Out The Oven</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                            New &<br />
                            <span className="text-black/30">Latest.</span>
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-3 border-b-2 border-black pb-1 hover:pr-4 transition-all w-fit"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">Shop The Drop</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${product.colSpan} group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl ${product.height} w-full`}
                        >
                            {product.tag && (
                                <div className="absolute top-6 left-6 z-20 bg-black text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                                    {product.tag}
                                </div>
                            )}

                            <div className="absolute inset-0 w-full h-full bg-[#f4f4f5]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Gradient Overlay for Text Legibility */}
                            {product.theme === "dark" && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            )}
                            {product.theme === "light" && (
                                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent z-10" />
                            )}

                            {/* Product Info - Positioned Bottom */}
                            <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out`}>
                                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                                    <button className={`font-black uppercase tracking-widest text-[11px] py-3 px-8 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 ${product.theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                        Quick Add
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs font-bold tracking-[0.2em] uppercase ${product.theme === 'dark' ? 'text-white/70' : 'text-black/50'}`}>
                                            {product.category}
                                        </span>
                                        <span className={`font-black text-xl md:text-3xl ${product.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                            {product.price}
                                        </span>
                                    </div>
                                    <h3 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-2 group-hover:text-[#efaa27] transition-colors ${product.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                        {product.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
