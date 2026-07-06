"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const VIDEO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/video1.mp4`;

export function PortraitVideo({
  variant = "default",
  className,
}: {
  variant?: "hero" | "default";
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const isHero = variant === "hero";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "relative mx-auto",
        isHero ? "w-full max-w-[280px] xl:max-w-[300px]" : "w-full max-w-[260px]",
        className
      )}
    >
      {isHero && (
        <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-teal-500/20 blur-2xl" />
      )}

      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border shadow-2xl",
          isHero
            ? "border-white/20 bg-navy-950 shadow-teal-500/10"
            : "border-border bg-navy-950 shadow-xl"
        )}
      >
        {/* Phone-style top bar */}
        <div
          className={cn(
            "flex items-center justify-center py-2.5",
            isHero ? "bg-navy-900/80" : "bg-navy-900"
          )}
        >
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        <div className="relative aspect-[9/16] bg-navy-950">
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            aria-label="McCall Ambulance Service in action"
          />

          {/* Bottom gradient for controls legibility */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/80 to-transparent" />

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="ml-0.5 h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "px-4 py-3 text-center",
            isHero ? "bg-navy-900/80" : "bg-navy-900"
          )}
        >
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-widest",
              isHero ? "text-teal-300" : "text-teal-400"
            )}
          >
            McCall in Action
          </p>
        </div>
      </div>

      {isHero && (
        <p className="mt-4 text-center text-xs text-white/40">
          See our crew and fleet serving Greater Boston
        </p>
      )}
    </motion.div>
  );
}