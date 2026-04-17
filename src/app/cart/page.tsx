"use client";

import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 flex flex-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-white/20" />
          </div>
          <h1 className="font-display text-3xl font-black mb-4">
            Your cart is empty
          </h1>
          <p className="text-white/40 mb-8 max-w-xs mx-auto">
            Looks like you haven't added any heat to your cart yet.
          </p>
          <Link href="/" className="cyber-btn-fill px-8 py-4 inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl sm:text-5xl font-black mb-10 tracking-tight">
          Your <span className="text-neon-cyan">Cart</span>
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Items List */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`\${item.id}-\${item.selectedColor}`}
                className="glass rounded-2xl p-4 flex gap-4 items-center"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg leading-tight truncate">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: item.selectedColor }}
                        />
                        <span className="text-xs text-white/40 uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.selectedColor)}
                      className="p-2 text-white/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center glass-strong rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedColor,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-1 hover:text-neon-cyan transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="p-1 hover:text-neon-cyan transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-display text-xl font-bold">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex justify-between text-white/40">
                <span>Subtotal</span>
                <span>₹{getTotal().toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Shipping</span>
                <span className="text-neon-green uppercase font-bold text-xs">
                  Free
                </span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between items-end">
                <span className="font-display text-xl font-bold uppercase">
                  Total
                </span>
                <span className="font-display text-3xl font-black text-neon-cyan">
                  ₹{getTotal().toLocaleString("en-IN")}
                </span>
              </div>

              <Link
                href="/checkout"
                className="cyber-btn-fill w-full py-5 mt-6 flex items-center justify-center gap-2 group"
              >
                Checkout Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
