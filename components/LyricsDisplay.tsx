"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { StorySlide } from "@/data/story";

interface LyricsDisplayProps {
  storyData: StorySlide[];
  activeSlideId: number;
  currentTime: number;
  onSelectSlide: (startTime: number) => void;
}

export default function LyricsDisplay({
  storyData,
  activeSlideId,
  currentTime,
  onSelectSlide,
}: LyricsDisplayProps) {
  const activeLineRef = useRef<HTMLDivElement | null>(null);

  // Автоматический скролл к активной строчке
  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // Держит активную строку ровно по центру экрана!
      });
    }
  }, [activeSlideId]);

  return (
    <div 
      className="
        relative 
        flex-1 
        h-[70vh] 
        max-w-2xl 
        overflow-y-auto 
        no-scrollbar 
        py-[35vh] 
        px-6 
        md:px-12
        [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
      "
    >
      <div className="flex flex-col gap-10">
        {storyData.map((slide) => {
          const isActiveLine = activeSlideId === slide.id;

          return (
            <motion.div
              key={slide.id}
              ref={isActiveLine ? activeLineRef : null}
              animate={{
                opacity: isActiveLine ? 1 : 0.25,
                scale: isActiveLine ? 1.05 : 0.95,
                filter: isActiveLine ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="cursor-pointer origin-left transition-all"
              onClick={() => onSelectSlide(slide.startTime)}
            >
              <p className="text-3xl md:text-5xl font-bold leading-snug tracking-wide flex flex-wrap gap-x-3 gap-y-1">
                {slide.words.map((word, wordIdx) => {
                  const isWordActive = currentTime >= word.start;
                  const isWordCurrentlySinging =
                    currentTime >= word.start && currentTime <= word.end;

                  return (
                    <motion.span
                      key={wordIdx}
                      animate={{
                        color: isWordActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.3)",
                        scale: isWordCurrentlySinging ? 1.08 : 1,
                        textShadow: isWordCurrentlySinging
                          ? "0px 0px 20px rgba(255, 255, 255, 0.9)"
                          : "0px 0px 0px rgba(0,0,0,0)",
                      }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {word.text}
                    </motion.span>
                  );
                })}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}