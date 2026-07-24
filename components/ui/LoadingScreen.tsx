"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070707]"
                >
                    <div className="text-center">

                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                        >
                            <h1 className="heading-font text-7xl text-amber-400">
                                Lumiere
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: .4,
                            }}
                            className="mt-8 tracking-[0.4em] text-neutral-400 uppercase"
                        >
                            Premium Wedding Experience
                        </motion.p>

                        <motion.div
                            animate={{
                                width: ["0%", "100%"],
                            }}
                            transition={{
                                duration: 2,
                            }}
                            className="mx-auto mt-12 h-[2px] w-56 bg-amber-400"
                        />

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}