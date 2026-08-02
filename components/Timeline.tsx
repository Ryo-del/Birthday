"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StorySlide } from "@/data/story";

interface TimelineProps {
  currentTime: number;
  duration: number;
  activeSlide: StorySlide;
  onSeek: (time: number) => void;
}

export default function Timeline({
  currentTime,
  duration,
  activeSlide,
  onSeek,
}: TimelineProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current || !duration) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = Math.max(0, Math.min(1, clickY / rect.height));
    onSeek(percentage * duration);
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`relative flex h-full items-center transition-all duration-500 ${
        isOpen ? "w-28" : "w-10"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        {isOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      <motion.div
        ref={timelineRef}
        onClick={handleClick}
        animate={{
          width: isOpen ? "100%" : "20px",
          opacity: isOpen ? 1 : 0.4,
        }}
        className="relative h-4/5 w-full border-l border-white/20 backdrop-blur-md flex flex-col justify-between items-center py-6 cursor-pointer group"
      >
        <span className="text-xs font-mono text-neutral-400">1997</span>

        <div className="flex flex-col justify-between h-full py-4 w-full items-end pr-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`bg-white/30 h-[1px] transition-all ${
                i % 5 === 0 ? "w-4 bg-white/60" : "w-2"
              }`}
            />
          ))}
        </div>

        <span className="text-xs font-mono text-neutral-400">2026</span>

        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.8)]"
          style={{ top: `${progressPercentage}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        >
          {isOpen && (
            <span className="absolute -left-12 -top-2 rounded bg-white px-1.5 py-0.5 text-[10px] font-bold text-black shadow">
              {activeSlide.year}
            </span>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}