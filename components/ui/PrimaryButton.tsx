"use client";

import { ReactNode } from "react";

interface PrimaryButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export function PrimaryButton({
    children,
    onClick,
}: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
      rounded-full
      bg-amber-400
      px-8
      py-4
      font-semibold
      text-black
      transition-all
      duration-300
      hover:scale-105
      hover:bg-amber-300
      active:scale-95
      shadow-lg
      shadow-amber-500/20
      "
        >
            {children}
        </button>
    );
}