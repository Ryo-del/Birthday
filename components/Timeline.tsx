"use client";

import { motion } from "framer-motion";
import { StorySlide } from "@/data/story";

interface TimelineProps {
  storyData: StorySlide[];
  activeSlideId: number;
  onSeek: (time: number) => void;
}

export default function Timeline({ storyData, activeSlideId, onSeek }: TimelineProps) {
  return (
    <div className="relative flex h-4/5 flex-col items-center justify-between py-6">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

      {storyData.map((slide) => {
        const active = slide.id === activeSlideId;
        return (
          <button
            key={slide.id}
            onClick={() => onSeek(slide.startTime)}
            className="group relative flex items-center justify-center"
          >
            <motion.span
              animate={{
                scale: active ? 1 : 0,
                opacity: active ? 1 : 0,
                x: active ? -14 : 0,
              }}
              className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-black"
            >
              {slide.year}
            </motion.span>

            <motion.div
              animate={{
                scale: active ? 1.6 : 1,
                backgroundColor: active ? "#fff" : "rgba(255,255,255,0.25)",
                boxShadow: active
                  ? "0 0 16px rgba(255,255,255,0.9)"
                  : "0 0 0 rgba(0,0,0,0)",
              }}
              className="h-2.5 w-2.5 rounded-full"
            />
          </button>
        );
      })}
    </div>
  );
}