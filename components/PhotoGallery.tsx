"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StorySlide } from "@/data/story";

interface PhotoGalleryProps {
  activeSlide: StorySlide;
}

export default function PhotoGallery({ activeSlide }: PhotoGalleryProps) {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`grid gap-4 w-full max-w-xl ${
            activeSlide.images.length === 1
              ? "grid-cols-1"
              : activeSlide.images.length === 2
              ? "grid-cols-2"
              : "grid-cols-2 md:grid-cols-3"
          }`}
        >
          {activeSlide.images.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl group aspect-[4/3]"
            >
              <img
                src={imgUrl}
                alt={`Photo ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}