"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, MoveLeft, Package, CreditCard, Apple } from "lucide-react";
import { mockProducts } from "../lib/mockData";
import { useState } from "react";

export default function Checkout() {
    const [step, setStep] = useState(1);
    const cartItems = [
        { ...mockProducts[0], quantity: 1, selectedSize: "M" },
        { ...mockProducts[1], quantity: 2, selectedSize: "32" }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 200 ? 0 : 15;
    const total = subtotal + shipping;

    return (
        <main className="min-h-screen bg-[#fcfcfc] text-black">
            {/* Minimalist Checkout Header */}
            <header className="w-full border-b border-black/10 bg-white py-6 px-6 md:px-12 sticky top-0 z-50">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <Link href="/cart" className="text-black/50 hover:text-black transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                        <MoveLeft className="w-4 h-4" /> Return to Cart
                    </Link>
                    <div className="font-[family-name:var(--font-oswald)] text-2xl font-black tracking-tighter text-black">
                        BABARKEE<span className="text-[#efaa27]">.</span>
                    </div>
                    <div className="flex items-center gap-2 text-black/50 text-xs font-bold uppercase tracking-widest">
                        <Lock className="w-4 h-4 text-[#efaa27]" /> Secure
                    </div>
                </div>
            </header>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row min-h-[85vh]">

                {/* Left Side: Forms */}
                <div className="w-full lg:w-3/5 py-12 lg:py-20 lg:pr-24 border-r-0 lg:border-r border-black/10">

                    {/* Express Checkout */}
                    <div className="mb-12">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4 text-center">Express Checkout</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl hover:bg-black/80 transition-colors w-full">
                                <Apple className="w-6 h-6 fill-white" /> <span className="font-bold -ml-1">Pay</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-[#ffc439] text-[#003087] py-4 rounded-xl hover:bg-[#efaa27] transition-colors w-full font-black italic">
                                PayPal
                            </button>
                        </div>

                        <div className="flex items-center gap-4 my-8">
                            <div className="h-px bg-black/10 flex-grow"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40">Or pay with card</span>
                            <div className="h-px bg-black/10 flex-grow"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12">
                        {/* Step 1: Contact */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex items-end justify-between mb-2">
                                <h3 className="text-2xl font-black uppercase tracking-widest">Contact Information</h3>
                                <Link href="#" className="text-xs font-bold hover:text-[#efaa27] transition-colors underline object-contain">Log in</Link>
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />
                            <div className="flex items-center gap-3">
                                <input type="checkbox" id="news" className="w-4 h-4 accent-black" />
                                <label htmlFor="news" className="text-sm text-black/70">Keep me up to date on news and exclusive offers</label>
                            </div>
                        </motion.section>

                        {/* Step 2: Shipping */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-2">Shipping Address</h3>

                            <select className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black bg-white transition-colors cursor-pointer appearance-none">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                            </select>

                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />
                                <input type="text" placeholder="Last Name" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <input type="text" placeholder="Address" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <input type="text" placeholder="City" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />
                                <select className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black bg-white transition-colors cursor-pointer appearance-none">
                                    <option>State</option>
                                    <option>CA</option>
                                    <option>NY</option>
                                    <option>TX</option>
                                </select>
                                <input type="text" placeholder="ZIP code" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />
                            </div>
                            <input type="tel" placeholder="Phone" className="w-full border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors" />

                            <button onClick={() => setStep(2)} className="w-full bg-black text-white hover:bg-[#efaa27] transition-colors py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl mt-4">
                                Continue to Payment
                            </button>
                        </motion.section>
                    </div>


                    {/* Final Minimal Footer */}
                    <div className="flex items-center gap-6 mt-20 pt-8 border-t border-black/10 text-[10px] font-bold uppercase tracking-widest text-black/40">
                        <Link href="#" className="hover:text-black transition-colors">Refund policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Privacy policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Terms of service</Link>
                    </div>

                </div>

                {/* Right Side: Order Summary */}
                <div className="w-full lg:w-2/5 py-12 lg:py-20 lg:pl-16 bg-[#fafafa] lg:bg-transparent -mx-6 px-6 lg:mx-0 lg:px-0">
                    <div className="lg:sticky lg:top-32 flex flex-col gap-8">

                        <div className="flex flex-col gap-6">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-4">
                                    <div className="relative w-16 h-20 bg-white rounded-lg border border-black/10 overflow-hidden shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#efaa27] text-white rounded-full flex items-center justify-center text-[10px] font-black z-10">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <span className="font-bold text-sm uppercase tracking-tight line-clamp-1">{item.name}</span>
                                        <span className="text-xs text-black/50 font-medium">{item.color} / {item.selectedSize}</span>
                                    </div>
                                    <span className="font-[family-name:var(--font-oswald)] font-bold text-lg text-black/80">
                                        ${item.price * item.quantity}.00
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 py-6 border-y border-black/10">
                            <input type="text" placeholder="Discount code or gift card" className="flex-grow border border-black/20 rounded-xl px-4 py-4 focus:outline-none focus:border-black transition-colors uppercase text-sm font-bold tracking-widest" />
                            <button className="bg-black/10 hover:bg-black hover:text-white transition-colors text-black font-black uppercase tracking-widest text-xs px-6 py-4 rounded-xl">
                                Apply
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-sm font-medium text-black/70">
                                <span>Subtotal</span>
                                <span className="font-bold text-black">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium text-black/70">
                                <span>Shipping</span>
                                <span className="text-black text-xs uppercase font-bold tracking-widest">{shipping === 0 ? "Calculated at next step" : `$${shipping.toFixed(2)}`}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end pt-6 border-t border-black/10">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-black/70 mb-1">Total</span>
                                <span className="text-xs text-black/40">Including $0.00 in taxes</span>
                            </div>
                            <span className="font-[family-name:var(--font-oswald)] font-black text-3xl sm:text-4xl tracking-wider text-[#efaa27]">
                                <span className="text-xs tracking-normal text-black/30 align-top mr-1">USD</span>${total.toFixed(2)}
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}
