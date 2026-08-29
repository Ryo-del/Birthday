"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-neutral-950">
      {/* Медленно плывущие цветовые пятна */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full bg-purple-700/25 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full bg-pink-600/20 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, -30, -70, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Зерно / grain — убирает "цифровую" стерильность */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjIiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" />

      {/* Виньетка по краям, чтобы взгляд держался в центре */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}