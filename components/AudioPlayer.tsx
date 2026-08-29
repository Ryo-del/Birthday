"use client";

import { Play, Pause } from "lucide-react";
import { formatTime } from "@/lib/utils";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
}

export default function AudioPlayer({
  isPlaying,
  currentTime,
  duration,
  onTogglePlay,
}: AudioPlayerProps) {
  const progress = (currentTime / duration) * 100 || 0;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xl"
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl px-6 py-5 shadow-2xl">
        <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full" />
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white/40"
          style={{ width: `${progress}%` }}
        />

        <div className="flex items-center gap-6">
          {/* Название — теперь не сжимается, имеет своё пространство */}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="truncate text-base font-semibold text-white/90 tracking-tight">
              A Million Dreams
            </span>
            <span className="truncate text-[11px] font-medium text-white/40 uppercase tracking-widest">
              P!nk • Greatest Showman
            </span>
          </div>

          {/* Контролы — фиксированная ширина, не сжимаются */}
          <div className="flex shrink-0 items-center gap-4">
            <span className="w-9 text-right text-[11px] font-mono text-white/30">
              {formatTime(currentTime)}
            </span>

            <button
              onClick={onTogglePlay}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-110 active:scale-95"
            >
              {isPlaying ? (
                <Pause size={20} className="fill-black" />
              ) : (
                <Play size={20} className="ml-1 fill-black" />
              )}
            </button>

            <span className="w-9 text-[11px] font-mono text-white/30">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}