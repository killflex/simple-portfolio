"use client";

import { Badge } from "@/components/ui/badge";
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
          <Card className="flex border-none shadow-none bg-transparent hover:bg-accent/50 transition-colors duration-300 p-0 rounded-lg">
            <div className="grow items-center flex-col group">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    {title}
                    {badges && (
                      <span className="inline-flex gap-x-1">
                        {badges.map((badge, index) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs rounded-full px-2 py-0.5 font-normal"
                            key={index}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    )}
                    <ChevronRightIcon
                      className={cn(
                        "size-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                        isExpanded ? "rotate-90" : "rotate-0"
                      )}
                    />
                  </h3>
                  <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                    {period}
                  </div>
                </div>
                {subtitle && (
                  <div className="font-sans text-xs text-muted-foreground">
                    {subtitle}
                  </div>
                )}
              </CardHeader>
              {description && (
                <div
                  className={cn(
                    "mt-2 text-xs sm:text-sm list-disc overflow-hidden transition-all duration-700 ease-in-out text-muted-foreground",
                    isExpanded ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  {description}
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
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs rounded-full px-2 py-0.5 font-normal"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
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
