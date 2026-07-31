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
                y: -6,
            }}
            transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`
        lux-glass
        relative
        overflow-hidden
        rounded-[28px]
        ${className}
      `}
        >
            {/* top hairline highlight */}
            <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/60 to-transparent" />
            {children}
        </motion.div>
    );
}
