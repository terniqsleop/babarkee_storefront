"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, ChevronDown, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mockProducts, categories, sortOptions } from "../lib/mockData";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentSort, setCurrentSort] = useState("Featured");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...mockProducts];

        // Filter
        if (selectedCategory !== "All") {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Sort
        switch (currentSort) {
            case "Price: Low to High":
                result.sort((a, b) => a.price - b.price);
                break;
            case "Price: High to Low":
                result.sort((a, b) => b.price - a.price);
                break;
            case "Newest":
                // Mock sorting for newest based on ID or tag
                result.sort((a, b) => Number(b.id) - Number(a.id));
                break;
            default:
                break;
        }

        return result;
    }, [selectedCategory, currentSort]);

    return (
        <main className="min-h-screen bg-[#fcfcfc] text-black">
            <Navbar />

            <div className="pt-24 md:pt-32 px-6 md:px-12 max-w-[1500px] mx-auto min-h-screen">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-12 mt-8">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        Collection
                    </h1>
                    <p className="text-black/60 font-medium max-w-xl">
                        Explore our latest drops and signature essentials engineered for modern living.
                    </p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-y border-black/10 mb-12 gap-4 md:gap-0 relative z-20">
                    <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-sm tracking-widest uppercase font-bold transition-colors whitespace-nowrap px-4 py-2 border rounded-full
                                    ${selectedCategory === cat ? "bg-black text-white border-black" : "bg-transparent text-black/60 border-transparent hover:text-black hover:border-black/20"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                        {/* Mobile Filter Toggle */}
                        <button
                            className="md:hidden flex items-center gap-2 text-xs font-black tracking-widest uppercase border border-black/20 px-4 py-2 rounded-full"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <SlidersHorizontal className="w-4 h-4" /> Filter
                        </button>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-2 text-xs font-black tracking-widest uppercase bg-black/5 hover:bg-black/10 px-5 py-2.5 rounded-full transition-colors"
                                onClick={() => setIsSortOpen(!isSortOpen)}
                            >
                                Sort: <span className="text-black/60 font-medium">{currentSort}</span> <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {isSortOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 top-full mt-2 w-56 bg-white shadow-2xl rounded-2xl border border-black/5 overflow-hidden z-30"
                                    >
                                        {sortOptions.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => {
                                                    setCurrentSort(opt);
                                                    setIsSortOpen(false);
                                                }}
                                                className={`w-full text-left px-5 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex justify-between items-center hover:bg-black/5
                                                    ${currentSort === opt ? "text-[#efaa27]" : "text-black/70"}`}
                                            >
                                                {opt}
                                                {currentSort === opt && <Check className="w-4 h-4" />}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16 mb-24">
                    <AnimatePresence mode="popLayout">
                        {filteredAndSortedProducts.map((product, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                                key={product.id}
                                className="group flex flex-col cursor-pointer"
                            >
                                <Link href={`/shop/${product.id}`} className="block relative aspect-[3/4] bg-[#f0f0f0] rounded-2xl overflow-hidden mb-5">
                                    {product.tag && (
                                        <div className="absolute top-4 left-4 z-20 bg-white text-black text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
                                            {product.tag}
                                        </div>
                                    )}
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:opacity-0 transition-opacity duration-500"
                                    />
                                    <Image
                                        src={product.hoverImage}
                                        alt={`${product.name} lifestyle`}
                                        fill
                                        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
                                    />
                                    {/* Quick Add Overlay */}
                                    <div className="absolute inset-x-4 bottom-4 z-20 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="bg-white/90 backdrop-blur-md rounded-full text-center py-3 text-xs font-black tracking-widest uppercase shadow-xl hover:bg-black hover:text-white">
                                            Quick View
                                        </div>
                                    </div>
                                </Link>

                                <Link href={`/shop/${product.id}`} className="flex flex-col gap-1 px-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold uppercase tracking-tight text-lg line-clamp-1 mr-2">{product.name}</h3>
                                        <span className="font-[family-name:var(--font-oswald)] font-black text-lg tracking-wider whitespace-nowrap">${product.price}</span>
                                    </div>
                                    <p className="text-black/50 text-sm font-medium">{product.color}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredAndSortedProducts.length === 0 && (
                    <div className="w-full flex flex-col items-center justify-center py-32 text-center">
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-2">No Products Found</h3>
                        <p className="text-black/50">Try selecting a different category or clearing filters.</p>
                        <button onClick={() => setSelectedCategory("All")} className="mt-6 border-b border-black text-sm font-bold uppercase tracking-widest pb-1 hover:text-[#efaa27] hover:border-[#efaa27] transition-colors">
                            View All Products
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
