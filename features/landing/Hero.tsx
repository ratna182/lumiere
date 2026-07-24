"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { PhonePreview } from "@/features/wedding/PhonePreview";

export function Hero() {
    return (
        <>
            <Navbar />

            <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950">

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[180px]" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-6 pt-32 lg:flex-row">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >

                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-amber-300">
                            Trusted by Modern Couples
                        </span>

                        <h1 className="heading-font mt-8 text-6xl leading-[1.05] text-white md:text-7xl">
                            Crafting
                            <br />
                            Timeless
                            <br />
                            Wedding
                            <br />
                            Experiences
                        </h1>

                        <p className="mt-8 text-lg leading-9 text-neutral-300">
                            Beautiful digital wedding invitations designed for modern couples
                            who value elegance, simplicity, and unforgettable memories.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">

                            <button className="rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-300">
                                View Demo
                            </button>

                            <button className="rounded-full border border-white/20 px-8 py-4 text-white transition duration-300 hover:bg-white/5">
                                Order Now
                            </button>

                        </div>

                        <div className="mt-10 flex items-center gap-3">

                            <span className="text-xl text-amber-400">
                                ★★★★★
                            </span>

                            <p className="text-sm text-neutral-400">
                                Trusted by modern couples across Indonesia
                            </p>

                        </div>

                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <PhonePreview />
                    </motion.div>

                </div>

            </section>
        </>
    );
}