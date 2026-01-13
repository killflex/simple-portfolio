"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
    alt?: string;
  }
>(({ className, src, alt = "Avatar", ...props }, ref) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  // Memoize handlers to prevent re-renders
  const handleLoad = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = React.useCallback(() => {
    setHasError(true);
  }, []);

  if (!src || hasError) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("aspect-square h-full w-full relative", className)}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="128px"
        priority
        className={cn(
          "object-cover transition-opacity duration-75 ease-out",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
