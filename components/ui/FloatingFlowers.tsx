"use client";

import { motion } from "framer-motion";

const flowers = [
    {
        id: 1,
        left: "8%",
        delay: 0,
        size: 16,
        duration: 14,
    },
    {
        id: 2,
        left: "24%",
        delay: 3,
        size: 12,
        duration: 18,
    },
    {
        id: 3,
        left: "46%",
        delay: 1.5,
        size: 18,
        duration: 15,
    },
    {
        id: 4,
        left: "66%",
        delay: 5,
        size: 13,
        duration: 20,
    },
    {
        id: 5,
        left: "86%",
        delay: 2.5,
        size: 20,
        duration: 16,
    },
];

export function FloatingFlowers() {
    return (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    initial={{
                        y: "-12vh",
                        opacity: 0,
                        rotate: 0,
                    }}
                    animate={{
                        y: "112vh",
                        opacity: [0, 0.85, 0.85, 0],
                        rotate: 300,
                        x: [0, 24, -18, 0],
                    }}
                    transition={{
                        duration: flower.duration,
                        delay: flower.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: flower.left,
                        fontSize: flower.size,
                    }}
                    className="absolute top-0 text-gold-300/80 drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]"
                >
                    ✿
                </motion.div>
            ))}
        </div>
    );
}
