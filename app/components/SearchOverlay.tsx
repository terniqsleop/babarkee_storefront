"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const mockProducts = [
    { id: 1, name: "Oversized Graphic Tee", category: "T-Shirts", price: "$45" },
    { id: 2, name: "Heavyweight Boxy Hoodie", category: "Hoodies", price: "$85" },
    { id: 3, name: "Vintage Wash Denim Jacket", category: "Outerwear", price: "$120" },
    { id: 4, name: "Cargo Parachute Pants", category: "Bottoms", price: "$75" },
    { id: 5, name: "Essential Ribbed Beanie", category: "Accessories", price: "$25" },
    { id: 6, name: "Signature Logo Tape Belt", category: "Accessories", price: "$35" },
];

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(mockProducts);

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
        } else {
            const filtered = mockProducts.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        }
    }, [query]);

    // Handle body scroll locking
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setTimeout(() => setQuery(""), 300); // delay clear for animation
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[70] bg-white/95 backdrop-blur-md flex flex-col pt-24 px-6 md:px-12 md:pt-32"
                    data-lenis-prevent
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-8 md:right-12 text-black/50 hover:text-black transition-colors p-2"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Search Input Container */}
                    <div className="w-full h-full max-w-5xl mx-auto flex flex-col min-h-0">
                        <div className="relative w-full shrink-0 flex items-center border-b-4 border-black pb-4 group">
                            <Search className="w-8 h-8 md:w-12 md:h-12 mr-4 md:mr-6 text-black/50 group-focus-within:text-black transition-colors" />
                            <input
                                type="text"
                                autoFocus
                                placeholder="WHAT ARE YOU LOOKING FOR?"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent text-3xl md:text-5xl lg:text-7xl font-black font-[family-name:var(--font-oswald)] outline-none text-black placeholder:text-black/20 uppercase tracking-tighter"
                            />
                        </div>

                        {/* Dynamic Results */}
                        <div className="w-full mt-8 md:mt-12 flex-grow min-h-0 flex flex-col">
                            {query.trim() !== "" && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-sm font-bold tracking-widest uppercase text-black/50 mb-4 shrink-0"
                                    >
                                        Results ({results.length})
                                    </motion.div>

                                    <div className="flex-grow min-h-0 overflow-y-auto custom-scrollbar pb-12 pr-2" data-lenis-prevent>
                                        <div className="flex flex-col gap-2">
                                            {results.length > 0 ? (
                                                results.map((product, i) => (
                                                    <motion.div
                                                        key={product.id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                    >
                                                        <Link
                                                            href="#"
                                                            onClick={onClose}
                                                            className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-black/10 hover:border-black transition-colors"
                                                        >
                                                            <div className="flex flex-col">
                                                                <span className="text-2xl md:text-4xl font-black font-[family-name:var(--font-oswald)] uppercase text-black group-hover:text-[#efaa27] transition-colors">
                                                                    {product.name}
                                                                </span>
                                                                <span className="text-sm tracking-widest text-black/50 mt-1 uppercase font-bold">
                                                                    {product.category}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                                                <span className="text-xl md:text-2xl font-bold text-black group-hover:text-[#efaa27] transition-colors">
                                                                    {product.price}
                                                                </span>
                                                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#efaa27] transition-colors">
                                                                    <ArrowRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-2xl md:text-4xl font-black font-[family-name:var(--font-oswald)] uppercase text-black/30 mt-8"
                                                >
                                                    No products found.
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Suggestions when empty */}
                            {query.trim() === "" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full flex flex-col gap-6"
                                >
                                    <div className="text-sm font-bold tracking-widest uppercase text-black/50 mb-2">
                                        Trending Searches
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {["Graphic Tees", "Hoodies", "Cargo Pants", "Oversized"].map((term) => (
                                            <button
                                                key={term}
                                                onClick={() => setQuery(term)}
                                                className="px-6 py-3 border border-black/20 rounded-full text-sm font-bold uppercase tracking-widest text-black/70 hover:bg-black hover:text-white hover:border-black transition-all"
                                            >
                                                {term}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
