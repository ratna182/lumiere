"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center bg-neutral-950 px-6">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                }}
                className="text-center"
            >
                <p className="mb-3 tracking-[0.35em] uppercase text-neutral-400">
                    Premium Wedding Invitation
                </p>

                <h1 className="text-6xl font-bold text-white md:text-8xl">
                    Lumiere
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-400">
                    Elegant Digital Wedding Invitation crafted for unforgettable moments.
                </p>

                <button className="mt-10 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-300">
                    Open Invitation
                </button>
            </motion.div>
        </section>
    );
}