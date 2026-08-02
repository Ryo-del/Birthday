"use client";

import { useEffect, useRef, useState } from "react";

export function useAudioSync(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const frameRef = useRef<number>(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);

    audioRef.current = audio;

    const animate = () => {
      if (!audio.paused) {
        setCurrentTime(audio.currentTime);
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const onPlay = () => {
      setIsPlaying(true);
      animate();
    };

    const onPause = () => {
      setIsPlaying(false);
      cancelAnimationFrame(frameRef.current);
    };

    const onLoaded = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("loadedmetadata", onLoaded);

    return () => {
      cancelAnimationFrame(frameRef.current);

      audio.pause();

      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [src]);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  };

  return {
    isPlaying,
    currentTime,
    duration,
    seek,
    togglePlay,
  };
}