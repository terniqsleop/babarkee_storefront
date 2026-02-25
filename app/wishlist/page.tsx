"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, Heart, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mockProducts } from "../lib/mockData";
import { useState } from "react";

export default function Wishlist() {
    // Start with a couple merged mock products
    const [wishlistItems, setWishlistItems] = useState([
        mockProducts[3],
        mockProducts[7]
    ]);

    const removeItem = (id: string) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc] text-black">
            <Navbar />

            <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 max-w-[1500px] mx-auto min-h-[80vh]">

                {/* Header */}
                <div className="flex flex-col gap-4 mb-12">
                    <div className="flex items-center gap-4">
                        <Heart className="w-10 h-10 md:w-16 md:h-16 text-[#efaa27] fill-[#efaa27]" />
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                            Your <br className="md:hidden" /> Wishlist
                        </h1>
                    </div>
                    <p className="text-black/60 font-medium max-w-xl mt-2">
                        Items you've liked. Save them for later or add them to your cart.
                    </p>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center border-y border-black/10">
                        <Heart className="w-12 h-12 text-black/20 mb-6" />
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-4">Your wishlist is empty</h2>
                        <p className="text-black/50 mb-8 max-w-md">Looks like you haven't liked any items yet. Start exploring our latest drops.</p>
                        <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-full font-black tracking-widest uppercase text-xs hover:bg-[#efaa27] transition-colors">
                            Explore Collections
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
                        <AnimatePresence mode="popLayout">
                            {wishlistItems.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                                    key={product.id}
                                    className="group flex flex-col relative"
                                >
                                    {/* Remove Button overlaying the image */}
                                    <button
                                        onClick={() => removeItem(product.id)}
                                        className="absolute top-4 right-4 z-30 p-2 bg-white rounded-full shadow-md text-red-500 hover:text-white hover:bg-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>

                                    <Link href={`/shop/${product.id}`} className="block relative aspect-[3/4] bg-[#f0f0f0] rounded-2xl overflow-hidden mb-5">
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
                                    </Link>

                                    <div className="flex flex-col gap-1 px-1 mb-4 border-b border-white/0">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold uppercase tracking-tight text-lg line-clamp-1 mr-2"><Link href={`/shop/${product.id}`}>{product.name}</Link></h3>
                                        </div>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="font-[family-name:var(--font-oswald)] font-black text-lg tracking-wider whitespace-nowrap">${product.price}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto flex flex-col gap-2">
                                        <Link
                                            href={`/shop/${product.id}`}
                                            className="w-full text-center bg-black text-white text-xs font-black tracking-widest uppercase py-3 rounded-full hover:bg-[#efaa27] transition-colors"
                                        >
                                            View Product
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
