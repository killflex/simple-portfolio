"use client";

import { useEffect, useRef, memo } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  ariaLabel?: string;
}

const VideoPlayerComponent = ({
  src,
  className = "w-full aspect-video object-cover object-center",
  ariaLabel,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const prefersReducedMotion = useRef<boolean>(false);

  useEffect(() => {
    // Check reduced motion preference
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Setup IntersectionObserver for viewport-aware playback
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting && !prefersReducedMotion.current) {
              videoRef.current.play().catch((err) => {
                // Silent fail for autoplay policy restrictions
                console.debug("Video autoplay failed:", err);
              });
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.25, // Play when 25% visible
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current && videoRef.current) {
        observerRef.current.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={!prefersReducedMotion.current}
      loop
      muted
      playsInline
      aria-label={ariaLabel}
      className={`pointer-events-none ${className}`}
    />
  );
};

export const VideoPlayer = memo(VideoPlayerComponent);
