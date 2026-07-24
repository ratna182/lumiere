"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({
    children,
    className = "",
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.02,
            }}
            transition={{
                duration: 0.3,
            }}
            className={`
        rounded-[36px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        shadow-black/30
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}