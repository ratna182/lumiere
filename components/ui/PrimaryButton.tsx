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
                btn-gold
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                px-10
                py-4
                font-caps
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
            "
        >
            {children}
        </button>
    );
}
