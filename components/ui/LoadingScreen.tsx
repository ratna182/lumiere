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
                    transition={{ duration: 0.9 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0908]"
                >
                    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_60%)] blur-3xl" />

                    <div className="relative text-center">
                        <motion.div
                            animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
                            transition={{ repeat: Infinity, duration: 2.2 }}
                            className="relative mx-auto flex h-24 w-24 items-center justify-center"
                        >
                            <span className="filigree-ring absolute inset-0" />
                            <span className="absolute inset-1 rotate-45 rounded-[20px] border border-gold-500/40" />
                            <span className="heading-font text-gold-gradient text-4xl font-semibold">
                                L
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, letterSpacing: "0.7em" }}
                            animate={{ opacity: 1, letterSpacing: "0.42em" }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="font-caps mt-10 text-xl font-semibold text-ivory"
                        >
                            LUMIERE
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-4 text-xs uppercase tracking-[0.4em] text-sand"
                        >
                            Premium Wedding Experience
                        </motion.p>

                        <motion.div
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="mx-auto mt-10 h-px w-64 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
