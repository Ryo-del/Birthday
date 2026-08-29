"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StorySlide } from "@/data/story";

interface PhotoGalleryProps {
  activeSlide: StorySlide;
}

export default function PhotoGallery({ activeSlide }: PhotoGalleryProps) {
  const imgUrl = activeSlide.images[0];

  return (
    <div className="relative h-[45%] w-full overflow-hidden md:h-full md:w-[52%]">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 1.1, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          {/* Ken Burns: медленный зум весь срок показа слайда */}
          <motion.img
            src={imgUrl}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1, transition: { duration: 8, ease: "linear" } }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Растворение фото в фон — вправо на десктопе, вниз на мобильном */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950 md:bg-gradient-to-r" />
      {/* Лёгкое затемнение снизу для читаемости */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      {/* Виньетка по контуру */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />
    </div>
  );
}