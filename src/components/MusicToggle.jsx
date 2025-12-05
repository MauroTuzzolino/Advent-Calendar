import { useEffect, useRef, useState } from "react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(() => {
    return localStorage.getItem("music") === "on";
  });

  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // --- FUNZIONE PER FADE-IN ---
  const fadeIn = () => {
    if (!audioRef.current) return;

    clearInterval(fadeIntervalRef.current);
    audioRef.current.volume = 0; // parte da zero
    audioRef.current.play();

    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume < 0.25) {
        audioRef.current.volume = Math.min(audioRef.current.volume + 0.02, 0.25);
      } else {
        clearInterval(fadeIntervalRef.current);
      }
    }, 80);
  };

  // --- FUNZIONE PER FADE-OUT ---
  const fadeOut = () => {
    if (!audioRef.current) return;

    clearInterval(fadeIntervalRef.current);

    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume > 0) {
        audioRef.current.volume = Math.max(audioRef.current.volume - 0.02, 0);
      } else {
        audioRef.current.pause();
        clearInterval(fadeIntervalRef.current);
      }
    }, 80);
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("../../public/warm-christmas-vlog-244113.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      fadeIn();
    } else {
      fadeOut();
    }

    localStorage.setItem("music", isPlaying ? "on" : "off");
  }, [isPlaying]);

  return (
    <button className={`music-btn ${isPlaying ? "playing" : ""}`} onClick={() => setIsPlaying((p) => !p)}>
      {isPlaying ? "🔊" : "🔇"} Musica {isPlaying ? "ON" : "OFF"}
    </button>
  );
};

export default MusicToggle;
