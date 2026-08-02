"use client";

import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
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
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md"
    >
      <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-5 shadow-2xl">
        {/* Полоска прогресса на фоне */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full" />
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white/40"
          style={{ width: `${progress}%` }}
        />

        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-white/90 tracking-tight">
              A Million Dreams
            </span>
            <span className="text-[11px] font-medium text-white/40 uppercase tracking-widest">
              P!nk • Greatest Showman
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-white/30">
              {formatTime(currentTime)}
            </span>
            
            <button
              onClick={onTogglePlay}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-110 active:scale-95"
            >
              {isPlaying ? (
                <Pause size={20} className="fill-black" />
              ) : (
                <Play size={20} className="ml-1 fill-black" />
              )}
            </button>

            <span className="text-[10px] font-mono text-white/30">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}