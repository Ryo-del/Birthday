"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StorySlide } from "@/data/story";

interface PhotoGalleryProps {
  activeSlide: StorySlide;
}

function PhotoLayer({
  activeSlide,
  imgUrl,
}: {
  activeSlide: StorySlide;
  imgUrl: string;
}) {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={activeSlide.id}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{ opacity: 0, transition: { duration: 1.1, ease: "easeInOut" } }}
        className="absolute inset-0"
      >
        <motion.img
          src={imgUrl}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1, transition: { duration: 8, ease: "linear" } }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default function PhotoGallery({ activeSlide }: PhotoGalleryProps) {
  const imgUrl = activeSlide.images[0];

  return (
    // Занимает свою половину/верх — обычный flex-элемент, НЕ absolute на весь экран
    <div className="relative h-[45%] w-full overflow-hidden md:h-full md:w-[52%]">
      {/* Мобильная маска: фото тает вниз, в размытый фон под ним */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 78%, transparent 100%)",
        }}
      >
        <PhotoLayer activeSlide={activeSlide} imgUrl={imgUrl} />
      </div>

      {/* Десктопная маска: фото тает вправо, в размытый фон под ним */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          maskImage: "linear-gradient(to right, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 82%, transparent 100%)",
        }}
      >
        <PhotoLayer activeSlide={activeSlide} imgUrl={imgUrl} />
      </div>
    </div>
  );
}