"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, ChevronRight, Star, Truck, ShieldCheck, Ruler, Minus, Plus } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { mockProducts } from "../../lib/mockData";

export default function ProductDetail() {
    const params = useParams();
    const productId = params?.id as string;

    const product = mockProducts.find(p => p.id === productId) || mockProducts[0]; // fallback

    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const galleryPhotos = [product.image, product.hoverImage, "/images/6.jpg", "/images/7.jpg"];

    return (
        <main className="min-h-screen bg-white text-black selection:bg-[#efaa27] selection:text-white">
            <Navbar />

            <div className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-[1500px] mx-auto min-h-screen">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-12 border-b border-black/5 pb-4 overflow-x-auto whitespace-nowrap">
                    <Link href="/" className="text-black/50 hover:text-black transition-colors flex items-center gap-2">
                        <MoveLeft className="w-4 h-4" /> Home
                    </Link>
                    <ChevronRight className="w-3 h-3 text-black/20" />
                    <Link href="/shop" className="text-black/50 hover:text-black transition-colors">Shop</Link>
                    <ChevronRight className="w-3 h-3 text-black/20" />
                    <Link href={`/shop?category=${product.category}`} className="text-black/50 hover:text-black transition-colors">{product.category}</Link>
                    <ChevronRight className="w-3 h-3 text-black/20" />
                    <span className="text-[#efaa27]">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">

                    {/* Left: Interactive Sticky Gallery */}
                    <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
                        {/* Main Stage */}
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative aspect-[3/4] w-full bg-[#f8f8f8] rounded-[2rem] overflow-hidden"
                        >
                            {product.tag && (
                                <div className="absolute top-6 left-6 z-20 bg-black text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-md">
                                    {product.tag}
                                </div>
                            )}
                            <Image
                                src={galleryPhotos[activeImage]}
                                alt={product.name}
                                fill
                                className="object-cover cursor-crosshair transform hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Thumbnails Row */}
                        <div className="grid grid-cols-4 gap-4">
                            {galleryPhotos.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`relative aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 border-2 ${activeImage === i ? "border-[#efaa27] scale-95 opacity-100 shadow-md" : "border-transparent opacity-60 hover:opacity-100 hover:scale-100"}`}
                                >
                                    <Image src={src} alt="Thumbnail" fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Meta Data */}
                    <div className="flex flex-col py-0 lg:py-10">
                        {/* Title & Price Loop */}
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-center gap-4 text-[#efaa27]">
                                <div className="flex gap-1">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <span className="text-black/50 text-xs font-bold tracking-widest uppercase">142 Reviews</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none pr-8">
                                {product.name}
                            </h1>

                            <p className="font-[family-name:var(--font-oswald)] text-4xl text-[#efaa27] font-black tracking-wider mt-2">
                                ${product.price}.00
                            </p>
                        </div>

                        <p className="text-lg font-medium text-black/70 leading-relaxed mb-12 max-w-xl">
                            {product.description}
                        </p>

                        <div className="h-px bg-black/5 w-full mb-10" />

                        {/* Sizes */}
                        <div className="flex flex-col gap-5 mb-12">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-sm font-black tracking-[0.2em] uppercase">Select Size</span>
                                <button className="text-xs font-bold uppercase text-black/40 hover:text-black tracking-widest flex items-center gap-2 transition-colors">
                                    <Ruler className="w-4 h-4" /> Size Guide
                                </button>
                            </div>

                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                                {product.sizes?.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-4 rounded-xl border text-sm font-black tracking-widest uppercase transition-all duration-300
                                            ${selectedSize === size ? "bg-black text-white border-black scale-95 shadow-lg" : "bg-white text-black/70 border-black/10 hover:border-black/50 hover:text-black hover:bg-black/5"}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <AnimatePresence>
                                {!selectedSize && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="text-[#efaa27] text-xs font-bold tracking-widest uppercase"
                                    >
                                        * Please select a size before adding to cart
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Add To Cart Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <div className="flex items-center justify-between bg-black/5 rounded-full px-6 py-4 w-full sm:w-1/3">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-[#efaa27] transition-colors"><Minus className="w-5 h-5" /></button>
                                <span className="font-black text-lg tracking-widest">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="hover:text-[#efaa27] transition-colors"><Plus className="w-5 h-5" /></button>
                            </div>

                            <Link
                                href="/cart"
                                className={`flex items-center justify-center bg-black text-white py-4 px-8 rounded-full text-sm font-black tracking-[0.2em] uppercase shadow-2xl transition-all duration-300 hover:bg-[#efaa27] flex-grow ${!selectedSize && 'opacity-50 cursor-not-allowed pointer-events-none'}`}
                            >
                                Add To Cart — ${(product.price * quantity).toFixed(2)}
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#f8f8f8] p-8 rounded-3xl">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <Truck className="w-6 h-6 text-[#efaa27]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-black uppercase tracking-widest mb-1">Free Global Shipping</span>
                                    <span className="text-xs font-medium text-black/50 leading-relaxed max-w-[200px]">On all orders over $200. Dispatch within 24 hours.</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <ShieldCheck className="w-6 h-6 text-[#efaa27]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-black uppercase tracking-widest mb-1">Lifetime Guarantee</span>
                                    <span className="text-xs font-medium text-black/50 leading-relaxed max-w-[200px]">Meticulously engineered for extreme durability.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}
