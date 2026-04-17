"use client";

import { ArrowRight, Zap, Trophy, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
      {/* Animated Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 blur-[120px] animate-pulse rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 blur-[120px] animate-pulse rounded-full transition-delay-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border-neon-cyan/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan">
              NEW DROP LIVE NOW
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            LEVEL <span className="text-neon-cyan">UP</span> YOUR <br />
            <span className="relative">
              EXISTENCE
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-neon-purple/30 -skew-x-12" />
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/50 font-medium leading-relaxed">
            Future-proof hardware for the generation that never sleeps. 
            Designed in the matrix, delivered to your door.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="cyber-btn-fill group">
              Explore Drop
              <ArrowRight className="inline-flex ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="cyber-btn">
              Our Mission
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-20 max-w-3xl mx-auto">
            {[ 
              { icon: Zap, label: "INSTANT PAIR", val: "0.01s" },
              { icon: Flame, label: "HIGH HEAT", val: "4.9/5" },
              { icon: Trophy, label: "PRO GEAR", val: "TOP-TIER" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-5 h-5 text-neon-purple" />
                <span className="font-display font-black text-2xl">{stat.val}</span>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
