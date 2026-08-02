"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StorySlide } from "@/data/story";

interface PhotoGalleryProps {
  activeSlide: StorySlide;
}

export default function PhotoGallery({ activeSlide }: PhotoGalleryProps) {
  return (
    <div className="flex flex-1 items-center justify-center p-4 h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // Увеличиваем ширину блока до 480px–520px
          className="flex flex-col gap-5 w-full max-w-[480px] max-h-[75vh] overflow-y-auto no-scrollbar items-center"
        >
          {activeSlide.images.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? -2 : 2 }}
              animate={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? -1 : 1 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="
                relative 
                w-full 
                aspect-[4/3] 
                overflow-hidden 
                rounded-2xl 
                border-4 
                border-white/20 
                shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                shrink-0
              "
            >
              <img
                src={imgUrl}
                alt={`Photo ${idx + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}