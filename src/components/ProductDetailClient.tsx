"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  Undo2,
  ChevronLeft,
  Check,
  Zap,
} from "lucide-react";

export default function ProductDetailClient() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const { addItem, openCart } = useCartStore();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Product Not Found
          </h1>
          <Link href="/" className="cyber-btn text-white">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.colors[selectedColor]);
    openCart();
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-neon-cyan transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Store
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden glass">
              <Image
                src={product.gallery[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="glass-strong text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.badge}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                    selectedImage === i
                      ? "ring-2 ring-neon-cyan ring-offset-2 ring-offset-dark-950"
                      : "glass opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`\${product.name} view \${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-neon-purple font-semibold">
                {product.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mt-2">
                {product.name}
              </h1>
              <p className="text-white/50 text-base sm:text-lg mt-2">
                {product.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-neon-cyan text-neon-cyan"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-white/50">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="flex items-end gap-3">
              <span className="font-display text-4xl sm:text-5xl font-black text-neon-cyan">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-lg text-white/30 line-through mb-1">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-sm font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded mb-1">
                {discount}% OFF
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            <div>
              <span className="text-xs uppercase tracking-wider text-white/40 font-semibold">
                Color
              </span>
              <div className="flex items-center gap-3 mt-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(i)}
                    className={`w-10 h-10 rounded-full transition-all flex items-center justify-center ${
                      selectedColor === i
                        ? "ring-2 ring-offset-2 ring-offset-dark-950 ring-neon-cyan scale-110"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === i && (
                      <Check className="w-4 h-4 text-black" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="glass rounded-xl p-5 space-y-3">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-cyan" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="cyber-btn-fill flex-1 py-4 text-base flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <Link
                href="/checkout"
                onClick={() => addItem(product, product.colors[selectedColor])}
                className="cyber-btn flex-1 py-4 text-base text-white flex items-center justify-center gap-2"
              >
                Buy Now
              </Link>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: "Free Delivery" },
                { icon: Shield, label: "1yr Warranty" },
                { icon: Undo2, label: "7-day Return" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-3 text-center"
                >
                  <Icon className="w-5 h-5 text-neon-cyan mx-auto mb-1" />
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
