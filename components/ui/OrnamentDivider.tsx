"use client";

import { motion } from "framer-motion";

interface OrnamentDividerProps {
    className?: string;
    label?: string;
}

/**
 * Ornamental line — line ✦ diamond ✦ line, with an optional word
 * set in the script font (e.g. "since", "et", "&").
 */
export function OrnamentDivider({
    className = "",
    label,
}: OrnamentDividerProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`flex items-center justify-center gap-4 ${className}`}
            aria-hidden
        >
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold-500/70 to-gold-500/70 sm:w-20" />

            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inset-0 rotate-45 border border-gold-500/70" />
                <span className="absolute inset-[3px] rotate-45 bg-gold" />
            </span>

            {label ? (
                <span className="font-script px-1 text-2xl italic leading-none text-gold-300">
                    {label}
                </span>
            ) : null}

            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inset-0 rotate-45 border border-gold-500/70" />
                <span className="absolute inset-[3px] rotate-45 bg-gold" />
            </span>

            <span className="h-px w-14 bg-gradient-to-l from-transparent via-gold-500/70 to-gold-500/70 sm:w-20" />
        </motion.div>
    );
}
