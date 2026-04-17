"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCartStore();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0]);
    openCart();
  };

  return (
    <Link
      href={`/product/\${product.id}`}
      className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:border-neon-cyan/50 hover:-translate-y-2"
    >
      <div className="absolute top-4 left-4 z-10">
        <span className="glass-strong text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter">
          {product.badge}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
        
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 right-4 p-3 bg-neon-cyan text-black rounded-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs text-neon-purple font-bold uppercase tracking-widest">
              {product.category}
            </p>
            <h3 className="font-display text-xl font-bold mt-1 group-hover:text-neon-cyan transition-colors">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <Star className="w-3 h-3 fill-neon-cyan text-neon-cyan" />
          <span className="text-xs font-bold text-white/50">{product.rating}</span>
        </div>

        <div className="flex items-end gap-2">
          <span className="font-display text-2xl font-black">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-white/20 line-through mb-1">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </Link>
  );
}
