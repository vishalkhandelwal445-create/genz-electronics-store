"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cart";
import RazorpayButton from "@/components/RazorpayButton";
import { ChevronLeft, ShieldCheck, Truck, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 flex flex-center px-4">
        <div className="text-center">
          <h1 className="font-display text-3xl font-black mb-4">
            No items to checkout
          </h1>
          <Link href="/" className="cyber-btn-fill px-8 py-4 inline-block">
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info Form */}
          <div className="space-y-8">
            <div>
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-neon-cyan transition-colors mb-6"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Cart
              </Link>
              <h1 className="font-display text-4xl font-black">
                Secure <span className="text-neon-cyan">Checkout</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/40">
                  Contact Info
                </h3>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="cyber-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="cyber-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/40">
                  Shipping Address
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="cyber-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="cyber-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  className="cyber-input"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="cyber-input"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    className="cyber-input"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="glass rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                Order Summary
              </h2>

              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div
                    key={`\${item.id}-\${item.selectedColor}`}
                    className="flex gap-4 items-center"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-white/40">
                        Qty: {item.quantity} • {item.category}
                      </p>
                    </div>
                    <span className="font-display font-bold">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-white/40">
                  <span>Subtotal</span>
                  <span>₹{getTotal().toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm text-white/40">
                  <span>Shipping</span>
                  <span className="text-neon-green">FREE</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="font-display font-black text-lg uppercase">
                    Total
                  </span>
                  <span className="font-display text-3xl font-black text-neon-cyan">
                    ₹{getTotal().toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <RazorpayButton
                  amount={getTotal()}
                  onSuccess={() => console.log("Payment Success")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-neon-cyan" />
                  Secure SSL
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                  <Truck className="w-4 h-4 text-neon-cyan" />
                  Free Shipping
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                  <CreditCard className="w-4 h-4 text-neon-cyan" />
                  All Cards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
