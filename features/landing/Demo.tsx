"use client";

import { motion } from "framer-motion";

export function Demo() {
    return (
        <section
            id="demo"
            className="relative py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="tracking-[0.35em] uppercase text-amber-400">
                        Live Experience
                    </p>

                    <h2 className="heading-font mt-5 text-6xl text-white">
                        Interactive Demo
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                        Explore a real wedding invitation complete with elegant animations,
                        gallery, RSVP, countdown, maps, and background music.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
                >
                    <div className="aspect-video w-full bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex items-center justify-center">

                        <div className="text-center">

                            <div className="mb-6 inline-flex rounded-full border border-amber-400/40 px-5 py-2 text-sm uppercase tracking-[0.3em] text-amber-400">
                                Demo Preview
                            </div>

                            <h3 className="heading-font text-5xl text-white">
                                Ratna & Andi
                            </h3>

                            <p className="mt-5 text-neutral-400">
                                Full interactive wedding invitation demo coming soon.
                            </p>

                            <button className="mt-10 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
                                Open Demo
                            </button>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}