"use client";

import { motion } from "framer-motion";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center md:mb-20"
        >
            <p className="eyebrow mb-6 text-gold-400">
                {subtitle}
            </p>

            <h2 className="heading-font text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
                {title}
            </h2>

            <OrnamentDivider className="mt-8" />
        </motion.div>
    );
}
