import Link from "next/link";
import { Github, Twitter, Instagram, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="font-display text-3xl font-black">
              VOLT<span className="text-neon-cyan">X</span>
            </Link>
            <p className="text-white/40 max-w-sm">
              Next-gen electronics brand building tomorrow's hardware. Join the
              movement and upgrade your digital existence.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Instagram, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 glass rounded-lg hover:text-neon-cyan hover:border-neon-cyan transition-all"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm">
              Shop
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <Link href="#" className="hover:text-white">New Arrivals</Link>
              <Link href="#" className="hover:text-white">Audio Gear</Link>
              <Link href="#" className="hover:text-white">Wearables</Link>
              <Link href="#" className="hover:text-white">Setup Essentials</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm">
              Support
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/40">
              <Link href="#" className="hover:text-white">Track Order</Link>
              <Link href="#" className="hover:text-white">Shipping Policy</Link>
              <Link href="#" className="hover:text-white">Returns</Link>
              <Link href="#" className="hover:text-white">Warranty</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2026 VoltX Electronics. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-neon-green" />
            100% Encrypted Transactions
          </div>
        </div>
      </div>
    </footer>
  );
}
