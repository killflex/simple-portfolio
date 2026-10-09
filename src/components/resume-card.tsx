"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { memo } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: React.ReactNode | string[];
  disabled?: boolean;
}

const ResumeCardComponent = ({
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  disabled,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div role="listitem">
      {disabled ? (
        <Link
          href={href || "#"}
          className="block"
          onClick={handleClick}
          aria-expanded={isExpanded}
          aria-label={`${title} - ${subtitle}. Click to ${
            isExpanded ? "collapse" : "expand"
          } details`}
        >
          <Card className="flex p-0 shadow-none bg-transparent border-none rounded-lg">
            <div className="flex-col items-center grow group">
              <CardHeader className="gap-y-1">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    {title}

                    <motion.span
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="inline-flex items-center ml-0.5"
                    >
                      <ChevronRightIcon
                        className="size-4 translate-x-0 transform transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </motion.span>
                  </h3>
                  <div className="text-xs sm:text-sm tabular-nums text-right text-muted-foreground">
                    {period}
                  </div>
                </div>
                {subtitle && (
                  <div className="font-sans text-xs text-muted-foreground">
                    {subtitle}
                  </div>
                )}
                {badges && (
                  <div
                    className="flex flex-row flex-wrap gap-1 mt-0.5"
                    role="list"
                    aria-label="Technologies used"
                  >
                    {badges.map((badge, index) => (
                      <span
                        key={index}
                        role="listitem"
                        className="inline-flex items-center rounded-lg border bg-muted/60 px-1.5 py-0.5 font-mono text-xs font-medium text-muted-foreground"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </CardHeader>
              <AnimatePresence initial={false}>
                {description && isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden text-xs sm:text-sm"
                  >
                    <div className="mt-2 leading-relaxed text-muted-foreground">
                      {Array.isArray(description) ? (
                        <ul className="ml-4 space-y-1 list-disc">
                          {description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        description
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </Link>
      ) : (
        <Card className="flex border-none shadow-none bg-transparent p-0 rounded-lg">
          <div className="grow items-center flex-col group mb-2">
            <CardHeader className="p-0">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {badges && (
                    <span
                      className="flex flex-row flex-wrap gap-1 ml-2"
                      role="list"
                      aria-label="Credentials"
                    >
                      {badges.map((badge, index) => (
                        <span
                          key={index}
                          role="listitem"
                          className="inline-flex items-center rounded-lg border bg-muted/60 px-1.5 py-0.5 font-mono text-xs font-medium text-muted-foreground"
                        >
                          {badge}
                        </span>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-right text-muted-foreground">
                  {period}
                </div>
              </div>
              {subtitle && (
                <div className="font-sans text-xs text-muted-foreground">
                  {subtitle}
                </div>
              )}
            </CardHeader>
          </div>
        </Card>
      )}
    </div>
  );
};

export const ResumeCard = memo(ResumeCardComponent);
