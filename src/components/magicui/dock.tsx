"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { PropsWithChildren, useRef, useState } from "react";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: number;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

// Define DockIcon first so it can be referenced by Dock
const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate width based on mouse proximity
  const getWidth = () => {
    if (!ref.current || mouseX === undefined || mouseX === Infinity) return 40;
    
    const bounds = ref.current.getBoundingClientRect();
    const distanceFromMouse = mouseX - bounds.x - bounds.width / 2;
    const absDistance = Math.abs(distanceFromMouse);
    
    if (absDistance > distance) return 40;
    
    // Linear interpolation
    const ratio = 1 - absDistance / distance;
    return 40 + (magnification - 40) * ratio;
  };

  const width = getWidth();

  return (
    <div
      ref={ref}
      style={{ 
        width: `${width}px`,
        transition: "width 0.2s ease-out"
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

DockIcon.displayName = "DockIcon";

// Now define Dock interfaces and component
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
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref
  ) => {
    const [mouseX, setMouseX] = useState<number>(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child: any) => {
        // Only pass mouseX to DockIcon components
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            mouseX,
            magnification,
            distance,
          } as DockIconProps);
        }
        return child;
      });
    };

    return (
      <div
        ref={ref}
        onMouseMove={(e) => setMouseX(e.pageX)}
        onMouseLeave={() => setMouseX(Infinity)}
        {...props}
        className={cn(dockVariants({ className }))}
      >
        {renderChildren()}
      </div>
    );
  }
);

Dock.displayName = "Dock";

export { Dock, DockIcon, dockVariants };
