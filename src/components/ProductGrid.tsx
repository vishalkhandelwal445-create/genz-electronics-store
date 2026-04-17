import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tighter">
            THE <span className="text-neon-cyan">DROP</span>
          </h2>
          <p className="text-white/40 mt-2 font-medium">
            Limited run hardware for the digital generation.
          </p>
        </div>
        <div className="flex gap-4">
          {/* Category Pills placeholder */}
          {["All", "Audio", "Wearables", "Setup"].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                cat === "All"
                  ? "bg-white text-black"
                  : "glass text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
