"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, Trash2, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mockProducts } from "../lib/mockData";
import { useState } from "react";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { ...mockProducts[0], quantity: 1, selectedSize: "M" },
        { ...mockProducts[1], quantity: 2, selectedSize: "32" }
    ]);

    const updateQuantity = (id: string, newQty: number) => {
        if (newQty < 1) return;
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    };

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 200 ? 0 : 15;
    const total = subtotal + shipping;

    return (
        <main className="min-h-screen bg-[#fcfcfc] text-black">
            <Navbar />

            <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 max-w-[1500px] mx-auto min-h-[80vh]">
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Your Cart</h1>
                    <span className="text-sm font-bold bg-black text-white px-4 py-1.5 rounded-full">{cartItems.length} Items</span>
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center border-y border-black/10">
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-4">Your cart is empty</h2>
                        <p className="text-black/50 mb-8 max-w-md">Looks like you haven't added any premium essentials to your cart yet.</p>
                        <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-full font-black tracking-widest uppercase text-xs hover:bg-[#efaa27] transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* Cart Items List */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {cartItems.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={item.id}
                                    className="flex flex-col sm:flex-row gap-6 border-b border-black/10 pb-8 relative"
                                >
                                    {/* Image */}
                                    <Link href={`/shop/${item.id}`} className="relative aspect-[3/4] w-32 sm:w-40 bg-[#f0f0f0] rounded-xl overflow-hidden shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </Link>

                                    {/* Details */}
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between items-start mb-2 pr-8">
                                            <Link href={`/shop/${item.id}`}>
                                                <h3 className="text-xl font-bold uppercase tracking-tight">{item.name}</h3>
                                            </Link>
                                            <span className="font-[family-name:var(--font-oswald)] font-black text-xl tracking-wider">${item.price * item.quantity}.00</span>
                                        </div>

                                        <p className="text-sm font-medium text-black/50 mb-6">Color: {item.color} | Size: {item.selectedSize}</p>

                                        <div className="flex items-center gap-6 mt-auto">
                                            {/* Quantity Picker */}
                                            <div className="flex items-center bg-[#f0f0f0] rounded-full px-4 py-2 w-32 justify-between">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-[#efaa27] transition-colors">-</button>
                                                <span className="font-bold text-sm">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-[#efaa27] transition-colors">+</button>
                                            </div>

                                            {/* Remove */}
                                            <button onClick={() => removeItem(item.id)} className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-red-500 transition-colors flex items-center gap-2">
                                                <Trash2 className="w-4 h-4" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-4">
                            <div className="bg-[#f8f8f8] rounded-3xl p-8 sticky top-32">
                                <h3 className="text-2xl font-black uppercase tracking-widest mb-8 pb-4 border-b border-black/10">Order Summary</h3>

                                <div className="flex flex-col gap-4 mb-8">
                                    <div className="flex justify-between items-center text-sm font-medium text-black/70">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-black">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium text-black/70">
                                        <span>Estimated Shipping</span>
                                        <span className="font-bold text-black">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                </div>

                                <div className="h-px bg-black/10 w-full mb-6" />

                                <div className="flex justify-between items-end mb-10">
                                    <span className="text-lg font-bold uppercase tracking-widest">Total</span>
                                    <span className="font-[family-name:var(--font-oswald)] font-black text-4xl tracking-wider text-[#efaa27]">${total.toFixed(2)}</span>
                                </div>

                                <Link href="/checkout" className="group flex items-center justify-between w-full bg-black text-white px-8 py-5 rounded-full font-black tracking-widest uppercase text-sm shadow-2xl hover:bg-[#efaa27] transition-all">
                                    Checkout Securely
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>

                                <div className="mt-6 flex flex-col gap-3">
                                    <p className="text-[10px] text-center font-bold tracking-widest uppercase text-black/40">Taxes calculated at checkout</p>
                                    <div className="flex items-center justify-center gap-2 pt-4">
                                        {/* Mock Secure payment icons */}
                                        <div className="w-8 h-5 bg-black/10 rounded-sm"></div>
                                        <div className="w-8 h-5 bg-black/10 rounded-sm"></div>
                                        <div className="w-8 h-5 bg-black/10 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
