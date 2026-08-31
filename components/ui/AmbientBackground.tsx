"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AmbientBackgroundProps {
  imgUrl?: string;
}

export default function AmbientBackground({ imgUrl }: AmbientBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-neutral-950">
      {/* Размытая копия текущего фото — общий фон, в который "тает" резкое фото */}
      <AnimatePresence mode="sync">
        {imgUrl && (
          <motion.div
            key={imgUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 1.6, ease: "easeInOut" } }}
            className="absolute inset-0"
          >
            <img
              src={imgUrl}
              alt=""
              className="h-full w-full scale-125 object-cover blur-3xl brightness-[0.22] saturate-75"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Базовое затемнение — чтобы текст читался стабильно */}
      <div className="absolute inset-0 bg-neutral-950/55" />

      {/* Медленно плывущие цветовые пятна — живость фона */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full bg-purple-700/15 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full bg-pink-600/10 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, -30, -70, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Зерно */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjIiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=')]" />

      {/* Виньетка */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}