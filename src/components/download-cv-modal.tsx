"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
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
          "rounded-lg cursor-pointer font-medium gap-1.5 shadow-sm",
          className
        )}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span>Download CV</span>
        <DownloadIcon className="size-3.5" />
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-6 shadow-2xl backdrop-blur-xl transition-all animate-in zoom-in-95 duration-200 z-10 space-y-5">
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
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary">
                Curriculum Vitae
              </div>
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
                className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-4 transition-all hover:bg-muted/50 hover:shadow-md cursor-pointer text-left"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-muted-500/20">
                      <Code2Icon className="size-4.5" />
                    </div>
                    <span className="rounded-full bg-muted border border-muted-500/20 px-2 py-0.5 text-[10px] font-medium">
                      {DATA.cv.fullstack.badge}
                    </span>
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
                className="group relative flex flex-col justify-between rounded-xl border border-border/70 bg-card/60 p-4 transition-all hover:bg-muted/50 hover:shadow-md cursor-pointer text-left"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-muted-500/20">
                      <PaletteIcon className="size-4.5" />
                    </div>
                    <span className="rounded-full bg-muted border border-muted-500/20 px-2 py-0.5 text-[10px] font-medium">
                      {DATA.cv.designer.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-foreground">
                      CV Designer
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
          </div>
        </div>
      )}
    </>
  );
}
