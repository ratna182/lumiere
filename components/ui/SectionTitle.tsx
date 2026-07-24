"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    subtitle: string;
    title: string;
}

export function SectionTitle({
    subtitle,
    title,
}: SectionTitleProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.8,
            }}
            className="mb-16 text-center"
        >
            <p className="mb-3 uppercase tracking-[0.4em] text-amber-400 text-sm">
                {subtitle}
            </p>

            <h2 className="heading-font text-5xl text-white md:text-6xl">
                {title}
            </h2>
        </motion.div>
    );
}