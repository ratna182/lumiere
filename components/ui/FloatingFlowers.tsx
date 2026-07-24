"use client";

import { motion } from "framer-motion";

const flowers = [
    {
        id: 1,
        left: "10%",
        delay: 0,
        size: 18,
    },
    {
        id: 2,
        left: "25%",
        delay: 2,
        size: 14,
    },
    {
        id: 3,
        left: "45%",
        delay: 1,
        size: 20,
    },
    {
        id: 4,
        left: "65%",
        delay: 3,
        size: 16,
    },
    {
        id: 5,
        left: "85%",
        delay: 1.5,
        size: 22,
    },
];

export function FloatingFlowers() {
    return (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">

            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    initial={{
                        y: -100,
                        opacity: 0,
                        rotate: 0,
                    }}
                    animate={{
                        y: "110vh",
                        opacity: [0, 1, 1, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 12,
                        delay: flower.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: flower.left,
                        fontSize: flower.size,
                    }}
                    className="absolute top-0 text-amber-300"
                >
                    ✿
                </motion.div>
            ))}

        </div>
    );
}