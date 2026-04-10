"use client";

import { Icon, loadIcon } from "@iconify/react";
import { useEffect, useState } from "react";
import { cn, Technology } from "@/lib/utils";

const getInitials = (label: string): string => {
  const parts = label.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

export const TechnologyIcon = ({
  technology,
  iconSize,
  className,
}: {
  technology: Technology;
  iconSize: number;
  className?: string;
}) => {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    const checkIcon = async () => {
      if (!technology.icon) {
        if (!cancelled) setIsAvailable(false);
        return;
      }

      try {
        const iconData = await loadIcon(technology.icon);
        if (!cancelled) {
          setIsAvailable(Boolean(iconData));
        }
      } catch {
        if (!cancelled) {
          setIsAvailable(false);
        }
      }
    };

    setIsAvailable(null);
    void checkIcon();

    return () => {
      cancelled = true;
    };
  }, [technology.icon]);

  if (isAvailable === false) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-foreground/20 bg-accent text-[10px] font-bold",
          className,
        )}
        style={{ width: iconSize, height: iconSize }}
        aria-label={technology.name}
      >
        {getInitials(technology.name)}
      </span>
    );
  }

  return (
    <Icon
      icon={technology.icon}
      width={iconSize}
      height={iconSize}
      className={cn("shrink-0", className)}
      aria-label={technology.name}
    />
  );
};
