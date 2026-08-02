"use client";

import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  console.log("================================");
  console.log("ACTIVE SLIDE:", activeSlideId);

  const container = containerRef.current;
  const active = document.getElementById(`slide-${activeSlideId}`);

  if (!container || !active) {
    console.log("container or active not found");
    return;
  }

  const target =
    active.offsetTop -
    container.clientHeight / 2 +
    active.clientHeight / 2;

  console.log("scrollTop BEFORE:", container.scrollTop);
  console.log("offsetTop:", active.offsetTop);
  console.log("target:", target);

  container.scrollTo({
    top: Math.max(target, 0),
    behavior: "smooth",
  });

  requestAnimationFrame(() => {
    console.log("scrollTop AFTER:", container.scrollTop);
  });
}, [activeSlideId]);
  return (
    <div
      ref={containerRef}
      className="
        relative
        h-[280px]
        w-full
        max-w-2xl
        overflow-y-auto
        px-4
        [scrollbar-width:none]
        [-ms-overflow-style:none]
        [&::-webkit-scrollbar]:hidden
        [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]
      "
    >
      <div className="py-[120px] space-y-8">
        {storyData.map((slide) => {
          const active = slide.id === activeSlideId;

          return (
            <motion.div
              id={`slide-${slide.id}`}
              key={slide.id}
              layout
              initial={false}
              animate={{
                opacity: active ? 1 : 0.25,
                scale: active ? 1 : 0.95,
                filter: active ? "blur(0px)" : "blur(2px)",
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="cursor-pointer"
              onClick={() => onSelectSlide(slide.startTime)}
            >
              <p className="flex flex-wrap gap-x-3 gap-y-2 text-3xl font-bold leading-snug md:text-4xl lg:text-[2.8rem]">
                {slide.words.map((word, i) => {
                  const passed = currentTime >= word.start;

                  const singing =
                    currentTime >= word.start &&
                    currentTime <= word.end;

                  return (
                    <motion.span
                      key={i}
                      initial={false}
                      animate={{
                        color: passed
                          ? "#fff"
                          : "rgba(255,255,255,.25)",
                        scale: singing ? 1.06 : 1,
                        textShadow: singing
                          ? "0 0 18px rgba(255,255,255,.8)"
                          : "0 0 0 rgba(0,0,0,0)",
                      }}
                      transition={{
                        duration: 0.15,
                      }}
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