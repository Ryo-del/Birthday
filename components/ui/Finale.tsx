"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface FinaleProps {
  onReplay: () => void;
}

export default function Finale({ onReplay }: FinaleProps) {
  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors: ["#f472b6", "#a78bfa", "#facc15"] });
      confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors: ["#f472b6", "#a78bfa", "#facc15"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-neutral-950/90 backdrop-blur-md text-center px-6"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-300 to-amber-300 bg-clip-text text-transparent"
      >
        С днём рождения ❤️
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-md text-white/60 text-sm md:text-base leading-relaxed"
      >
        Спасибо, что 29 лет рядом. Это лишь малая часть того, что я хотел сказать.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onReplay}
        className="mt-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md hover:bg-white/10 transition"
      >
        Смотреть заново
      </motion.button>
    </motion.div>
  );
}