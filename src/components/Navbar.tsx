"use client";

import Link from "next/link";
import { ShoppingBag, Menu, User, Search } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { items, openCart } = useCartStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-3xl font-black tracking-tighter group"
          >
            VOLT<span className="text-neon-cyan group-hover:text-neon-purple transition-colors">X</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav links placeholder */}
            {["Shop", "New", "Mission"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-neon-cyan transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:text-neon-cyan transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-neon-cyan transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className="relative p-2 ml-2 glass rounded-xl border-none hover:bg-white/10 transition-all group"
            >
              <ShoppingBag className="w-6 h-6 group-hover:text-neon-cyan transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-neon-cyan text-black text-[10px] font-black rounded-full flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
