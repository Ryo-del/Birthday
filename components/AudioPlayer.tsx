"use client";

import { Play, Pause } from "lucide-react";
import { formatTime } from "@/lib/utils";

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
  return (
    <div className="absolute bottom-6 left-8 z-30 flex items-center gap-4 rounded-full bg-white/10 border border-white/10 px-6 py-3 backdrop-blur-xl">
      <button
        onClick={onTogglePlay}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 active:scale-95"
      >
        {isPlaying ? (
          <Pause size={18} className="fill-black" />
        ) : (
          <Play size={18} className="ml-0.5 fill-black" />
        )}
      </button>

      <div className="flex flex-col">
        <span className="text-xs font-medium text-white">
          Праздничный трек 🎉
        </span>
        <span className="text-[10px] text-neutral-400">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}