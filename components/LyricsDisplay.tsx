"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StorySlide } from "@/data/story";

interface LyricsDisplayProps {
  storyData: StorySlide[];
  activeSlideId: number;
  currentTime: number;
  onSelectSlide: (startTime: number) => void;
}

type Role = "prev" | "active" | "next1" | "next2";

const ROLE_STYLES: Record<Role, string> = {
  prev: "text-lg md:text-xl text-white/25 font-semibold",
  active: "text-3xl md:text-5xl font-bold",
  next1: "text-lg md:text-xl text-white/25 font-semibold",
  next2: "text-base md:text-lg text-white/12 font-semibold",
};

export default function LyricsDisplay({
  storyData,
  activeSlideId,
  currentTime,
  onSelectSlide,
}: LyricsDisplayProps) {
  const activeIndex = storyData.findIndex((s) => s.id === activeSlideId);

  const windowSlides: { slide: StorySlide; role: Role }[] = [];

  if (activeIndex > 0) {
    windowSlides.push({ slide: storyData[activeIndex - 1], role: "prev" });
  }
  windowSlides.push({ slide: storyData[activeIndex], role: "active" });
  if (activeIndex + 1 < storyData.length) {
    windowSlides.push({ slide: storyData[activeIndex + 1], role: "next1" });
  }
  if (activeIndex + 2 < storyData.length) {
    windowSlides.push({ slide: storyData[activeIndex + 2], role: "next2" });
  }

  return (
    <div className="relative mx-auto flex h-full w-full max-w-xl min-w-0 flex-col justify-center gap-4 px-4 md:gap-5">
      <AnimatePresence mode="popLayout" initial={false}>
        {windowSlides.map(({ slide, role }) => (
          <motion.p
            key={slide.id}
            layout
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
            transition={{
              layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.6, ease: "easeOut" },
              filter: { duration: 0.6, ease: "easeOut" },
              y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
            onClick={() => onSelectSlide(slide.startTime)}
            className={`flex cursor-pointer flex-wrap gap-x-2 gap-y-1 leading-snug ${ROLE_STYLES[role]}`}
          >
            {role === "active"
              ? slide.words.map((word, i) => {
                  const passed = currentTime >= word.start;
                  const singing =
                    currentTime >= word.start && currentTime <= word.end;

                  return (
                    <motion.span
                      key={i}
                      initial={false}
                      animate={{
                        color: passed ? "#fff" : "rgba(255,255,255,.35)",
                        scale: singing ? 1.05 : 1,
                        textShadow: singing
                          ? "0 0 18px rgba(255,255,255,.7)"
                          : "0 0 0 rgba(0,0,0,0)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {word.text}
                    </motion.span>
                  );
                })
              : slide.words.map((w) => w.text).join(" ")}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}