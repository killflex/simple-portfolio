"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2Icon,
  DownloadIcon,
  ExternalLinkIcon,
  PaletteIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DownloadCvModalProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "xs";
  variant?: "default" | "outline" | "secondary" | "ghost";
}

export function DownloadCvModal({
  className,
  size = "sm",
  variant = "default",
}: DownloadCvModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <Button
        type="button"
        size={size}
        variant={variant}
        onClick={() => setIsOpen(true)}
        className={cn(
          "rounded-lg cursor-pointer font-medium gap-1.5 shadow-sm active:scale-[0.98] transition-transform",
          className,
        )}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span>Download CV</span>
        <DownloadIcon className="size-3.5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-6 shadow-2xl backdrop-blur-xl z-10 space-y-5"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <XIcon className="size-4" />
              </button>

              {/* Header */}
              <div className="space-y-1.5 pr-6 text-left">
                <h3
                  id="cv-modal-title"
                  className="text-xl font-bold tracking-tight text-foreground"
                >
                  Select CV Option
                </h3>
              </div>

              {/* CV Options */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Option 1: Full Stack CV */}
                <a
                  href={DATA.cv.fullstack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex flex-col justify-between rounded-lg border border-border/70 bg-card/60 p-4 transition-colors hover:bg-muted/50 hover:border-foreground/20 cursor-pointer text-left"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex size-9 items-center justify-center rounded-lg border border-muted-500/20">
                        <Code2Icon className="size-4.5" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground">
                        CV Full-Stack
                      </h4>
                      <p className="text-xs text-muted-foreground leading-snug line-clamp-3">
                        {DATA.cv.fullstack.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-2 border-t border-border/40 text-xs font-medium">
                    <span className="inline-flex items-center gap-1 group-hover:underline">
                      View &amp; Download
                    </span>
                    <ExternalLinkIcon className="size-3.5" />
                  </div>
                </a>

                {/* Option 2: Designer CV */}
                <a
                  href={DATA.cv.designer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex flex-col justify-between rounded-lg border border-border/70 bg-card/60 p-4 transition-colors hover:bg-muted/50 hover:border-foreground/20 cursor-pointer text-left"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex size-9 items-center justify-center rounded-lg border border-muted-500/20">
                        <PaletteIcon className="size-4.5" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground">
                        CV Creative
                      </h4>
                      <p className="text-xs text-muted-foreground leading-snug line-clamp-3">
                        {DATA.cv.designer.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-2 border-t border-border/40 text-xs font-medium">
                    <span className="inline-flex items-center gap-1 group-hover:underline">
                      View &amp; Download
                    </span>
                    <ExternalLinkIcon className="size-3.5" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
