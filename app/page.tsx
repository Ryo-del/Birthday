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

  // Путь к вашей аудиотреку в public/audio/
  const { isPlaying, currentTime, duration, togglePlay, seek } =
  useAudioSync("/audio/birthday-song.opus");

  const activeSlide =
    STORY_DATA.find(
      (slide) =>
        currentTime >= slide.startTime && currentTime < slide.endTime
    ) || STORY_DATA[0];

  const handleStart = () => {
    setHasStarted(true);
    togglePlay();
  };

  return (
    <main className="relative flex h-screen w-full overflow-hidden bg-neutral-950 font-sans text-white select-none">
      {/* Мягкий фон */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-black to-pink-900/20 blur-3xl pointer-events-none" />

      {/* Экран приветствия */}
      <AnimatePresence>
        {!hasStarted && <Intro onStart={handleStart} />}
      </AnimatePresence>

      {/* Главный интерфейс открытки */}
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