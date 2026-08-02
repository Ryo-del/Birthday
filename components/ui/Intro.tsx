"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface IntroProps {
  onStart: () => void;
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl"
    >
      <h1 className="mb-4 text-[clamp(3rem,8vw,6rem)] font-light tracking-wide text-white">
        Happy Birthday 🎂
      </h1>

      <p className="mb-8 max-w-md px-6 text-center text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-neutral-400">
        Просьба надеть наушники...
      </p>

      <div className="relative group cursor-pointer" onClick={onStart}>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-70 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg animate-pulse" />
        <button
          className="
            relative
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            shadow-2xl
            transition-transform
            duration-300
            group-hover:scale-110
            active:scale-95
          "
        >
          <Play size={32} className="ml-1 fill-black" />
        </button>
      </div>
    </motion.section>
  );
}