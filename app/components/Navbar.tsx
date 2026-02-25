"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-white transition-all duration-300"
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-10 flex items-center">
          <motion.div
            className="flex items-center gap-2"
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="w-6 h-6 sm:w-8 sm:h-8 overflow-visible drop-shadow-md"
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
                    pathLength: [0, 1, 0],
                    opacity: [0, 1, 0],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
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
                    scale: 1,
                    rotate: [45, 135, 225, 315, 405],
                    transition: {
                      scale: { duration: 0.5, ease: "backOut" },
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                    }
                  },
                  hover: { scale: 1.1, rotate: 135, transition: { duration: 0.3 } }
                }}
              />
              {/* Pulsing White Dot */}
              <motion.circle
                cx="16" cy="16" r="3"
                fill="white"
                variants={{
                  initial: { scale: 0 },
                  animate: {
                    scale: [1, 1.5, 1],
                    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  },
                  hover: { scale: 0 }
                }}
              />
            </motion.svg>
            <span className="font-[family-name:var(--font-oswald)] text-xl sm:text-2xl font-black tracking-tighter text-black flex items-center">
              BABARKEE
              <motion.span
                className="text-[#efaa27] ml-0.5"
                variants={{
                  animate: {
                    y: [0, -3, 0],
                    opacity: [1, 0.5, 1],
                    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }
                }}
              >
                .
              </motion.span>
            </span>
          </motion.div>
        </Link>

        {/* Middle Text / Banner */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.2em] uppercase text-black/80">
          Elevate Everyday.
        </div>

        {/* Right Side Icons & Actions */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 pr-1 sm:pr-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-black/80 hover:text-[#efaa27] transition-colors"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <Link href="/wishlist" className="text-black/80 hover:text-[#efaa27] transition-colors">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="/cart" className="relative text-black/80 hover:text-[#efaa27] transition-colors">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#efaa27] text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center rounded-full">
                2
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center gap-2 bg-black/5 hover:bg-black/10 text-black text-[11px] font-black w-9 h-9 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 rounded-full tracking-widest uppercase transition-colors shrink-0"
          >
            <Menu className="w-4 h-4" />
            <span className="hidden sm:block">Menu</span>
          </button>
        </div>
      </div>

      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
