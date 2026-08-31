"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { STORY_DATA } from "@/data/story";
import { useAudioSync } from "@/hooks/useAudioSync";

import Intro from "@/components/ui/Intro";
import PhotoGallery from "@/components/PhotoGallery";
import LyricsDisplay from "@/components/LyricsDisplay";
import AudioPlayer from "@/components/AudioPlayer";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Finale from "@/components/ui/Finale";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  const {
    isPlaying,
    currentTime,
    duration,
    ended,
    togglePlay,
    seek,
  } = useAudioSync("/audio/birthday-song.opus");

  let activeSlide = STORY_DATA[0];

  for (const slide of STORY_DATA) {
    if (currentTime >= slide.startTime) {
      activeSlide = slide;
    } else {
      break;
    }
  }

  const handleStart = () => {
    setHasStarted(true);
    togglePlay();
  };

  const handleReplay = () => {
    seek(0);
    if (!isPlaying) togglePlay();
  };

  return (
    <main className="relative flex h-screen w-full overflow-hidden bg-neutral-950 font-sans text-white select-none">
      <AmbientBackground imgUrl={activeSlide.images[0]} />

      <AnimatePresence>
        {!hasStarted && <Intro onStart={handleStart} />}
      </AnimatePresence>

      {hasStarted && (
        <>
          {/* Мобильный: колонка (фото сверху / текст снизу). Десктоп: строка (фото слева / текст справа) */}
          <div className="relative z-10 flex h-full w-full flex-col md:flex-row">
            <PhotoGallery activeSlide={activeSlide} />

            <div className="relative z-10 flex h-[55%] w-full items-center justify-center gap-6 px-6 pb-28 md:h-full md:w-[48%] md:px-10 md:pb-0">
              <LyricsDisplay
                storyData={STORY_DATA}
                activeSlideId={activeSlide.id}
                currentTime={currentTime}
                onSelectSlide={seek}
              />
            </div>
          </div>

          <AudioPlayer
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            onTogglePlay={togglePlay}
          />

          <AnimatePresence>
            {ended && <Finale onReplay={handleReplay} />}
          </AnimatePresence>
        </>
      )}
    </main>
  );
}