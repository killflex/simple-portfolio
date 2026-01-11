"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
  description?: React.ReactNode;
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
    <div>
      {disabled ? (
        <Link href={href || "#"} className="block" onClick={handleClick}>
          <Card className="flex p-0 shadow-none bg-transparent border-none rounded-lg">
            <div className="flex-col items-center grow group">
              <CardHeader className="gap-y-1">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    {title}

                    <ChevronRightIcon
                      className={cn(
                        "size-4 translate-x-0 transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                        isExpanded ? "rotate-90" : "rotate-0"
                      )}
                    />
                  </h3>
                  <div className="text-xs sm:text-sm tabular-nums text-right">
                    {period}
                  </div>
                </div>
                {subtitle && (
                  <div className="font-sans text-xs">{subtitle}</div>
                )}
                {badges && (
                  <span className="flex flex-row flex-wrap gap-1">
                    {badges.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-lg border bg-foreground-muted px-1.5 py-0.5 font-mono text-xs font-medium text-muted-foreground"
                      >
                        {badge}
                      </span>
                    ))}
                  </span>
                )}
              </CardHeader>
              {description && (
                <div
                  className={cn(
                    "grid text-xs sm:text-sm transition-[opacity,grid-template-rows] duration-300 ease-in-out",
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="mt-2">{description}</div>
                  </div>
                </div>
              )}
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
                    <span className="flex flex-row flex-wrap gap-1">
                      {badges.map((badge, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-lg border bg-foreground-muted px-1.5 py-0.5 font-mono text-xs font-medium text-muted-foreground"
                        >
                          {badge}
                        </span>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            </CardHeader>
          </div>
        </Card>
      )}
    </div>
  );
};

export const ResumeCard = memo(ResumeCardComponent);
