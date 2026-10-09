"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { PropsWithChildren } from "react";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: number;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DockIcon = ({
  className,
  children,
  ...props
}: DockIconProps) => {
  return (
    <div
      className={cn(
        "flex size-10 aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

DockIcon.displayName = "DockIcon";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border"
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(dockVariants({ className }))}
      >
        {children}
      </div>
    );
  }
);

Dock.displayName = "Dock";

export { Dock, DockIcon, dockVariants };
