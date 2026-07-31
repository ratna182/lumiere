"use client";

import { motion } from "framer-motion";
import { Music2, Pause } from "lucide-react";

interface FloatingMusicProps {
    playing: boolean;
    onToggle: () => void;
}

export function FloatingMusic({
    playing,
    onToggle,
}: FloatingMusicProps) {
    return (
        <motion.button
            onClick={onToggle}
            aria-label="Toggle music"
            animate={
                playing
                    ? { rotate: 360 }
                    : { rotate: 0 }
            }
            transition={{
                duration: 8,
                repeat: playing ? Infinity : 0,
                ease: "linear",
            }}
            className="
                group
                fixed
                bottom-6
                right-6
                z-[999]
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-gold-500/40
                bg-[#14100b]/80
                text-gold-300
                shadow-[0_18px_40px_-12px_rgba(212,175,55,0.35)]
                backdrop-blur-xl
                transition
                hover:scale-110
            "
        >
            <span className="absolute inset-0 rounded-full bg-gold-500/15 blur-xl" />

            <span
                className={`absolute inset-0 rounded-full border border-dashed border-gold-500/30 ${
                    playing ? "animate-spin" : ""
                }`}
                style={playing ? { animationDuration: "12s" } : undefined}
            />

            <span className="relative z-10">
                {playing ? (
                    <Pause size={26} />
                ) : (
                    <Music2 size={26} />
                )}
            </span>
        </motion.button>
    );
}
