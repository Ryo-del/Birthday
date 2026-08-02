"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { STORY_DATA } from "@/data/story";
import { useAudioSync } from "@/hooks/useAudioSync";

import Intro from "@/components/ui/Intro";
import PhotoGallery from "@/components/PhotoGallery";
import LyricsDisplay from "@/components/LyricsDisplay";
import Timeline from "@/components/Timeline";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  const {
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    seek,
  } = useAudioSync("/audio/birthday-song.opus");

  // Находим последний слайд, который уже начался
  let activeSlide = STORY_DATA[0];

  for (const slide of STORY_DATA) {
    if (currentTime >= slide.startTime) {
      activeSlide = slide;
    } else {
      break;
    }
  }

  console.log(
    "TIME:",
    currentTime.toFixed(3),
    "ACTIVE:",
    activeSlide.id
  );

  const handleStart = () => {
    setHasStarted(true);
    togglePlay();
  };

  return (
    <main className="relative flex h-screen w-full overflow-hidden bg-neutral-950 font-sans text-white select-none">
      {/* Фон */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-black to-pink-900/20 blur-3xl" />

      {/* Экран приветствия */}
      <AnimatePresence>
        {!hasStarted && <Intro onStart={handleStart} />}
      </AnimatePresence>

      {/* Основной интерфейс */}
      {hasStarted && (
        <>
          <div className="relative z-10 flex h-full w-full items-center justify-between px-8 md:px-16">
            <PhotoGallery activeSlide={activeSlide} />

            <LyricsDisplay
              storyData={STORY_DATA}
              activeSlideId={activeSlide.id}
              currentTime={currentTime}
              onSelectSlide={seek}
            />

            <Timeline
              currentTime={currentTime}
              duration={duration}
              activeSlide={activeSlide}
              onSeek={seek}
            />
          </div>

          <AudioPlayer
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            onTogglePlay={togglePlay}
          />
        </>
      )}
    </main>
  );
}