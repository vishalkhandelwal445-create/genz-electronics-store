"use client";

import { useCartStore } from "@/store/cart";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CartSlider() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, getTotal } = useCartStore();

  // Prevent scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-dark-900 z-[101] shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-neon-cyan" />
              <h2 className="font-display text-2xl font-black uppercase">
                Cart <span className="text-white/20">({items.length})</span>
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <ShoppingBag className="w-12 h-12 mb-4" />
                <p className="font-display font-bold">YOUR CART IS EMPTY</p>
                <button
                  onClick={closeCart}
                  className="text-neon-cyan text-sm mt-2 underline"
                >
                  Shop Latest Drops
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`\${item.id}-\${item.selectedColor}`} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden glass flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id, item.selectedColor)}
                          className="text-white/20 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        className="w-3 h-3 rounded-full mt-1"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center glass-strong rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.selectedColor,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="p-1 hover:text-neon-cyan"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold">
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
                            className="p-1 hover:text-neon-cyan"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-display font-bold">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/5 space-y-4 bg-white/[0.02]">
              <div className="flex justify-between items-end">
                <span className="text-white/40 uppercase tracking-widest text-xs font-bold">
                  Subtotal
                </span>
                <span className="font-display text-2xl font-black text-neon-cyan">
                  ₹{getTotal().toLocaleString("en-IN")}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="cyber-btn-fill w-full py-4 flex items-center justify-center gap-2 group"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[10px] text-center text-white/20 uppercase tracking-tighter">
                Free shipping on all orders over ₹1000
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
