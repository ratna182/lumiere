"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { PhonePreview } from "@/features/wedding/PhonePreview";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
    return (
        <>
            <Navbar />

            <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0908]">
                {/* ember glow */}
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_58%)] blur-3xl" />

                {/* fine hairline grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

                {/* rotating filigree */}
                <div className="filigree-ring pointer-events-none absolute -right-40 top-1/2 h-[900px] w-[900px] -translate-y-1/2 opacity-20" />

                {/* floating sparkles */}
                {[
                    { top: "18%", left: "12%", d: 0 },
                    { top: "32%", left: "88%", d: 1.2 },
                    { top: "72%", left: "8%", d: 2 },
                    { top: "60%", left: "92%", d: 0.6 },
                ].map((s, i) => (
                    <motion.span
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.15, 0.8] }}
                        transition={{ duration: 5, delay: s.d, repeat: Infinity, ease: "easeInOut" }}
                        style={{ top: s.top, left: s.left }}
                        className="absolute z-10 hidden text-gold-400/70 md:block"
                    >
                        <Sparkles size={16} strokeWidth={1} />
                    </motion.span>
                ))}

                <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-6 pt-36 pb-20 lg:flex-row lg:gap-12 lg:pt-40">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1, ease }}
                        className="max-w-xl text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2, ease }}
                            className="inline-flex items-center gap-3 rounded-full border border-gold-500/30 bg-gold-500/[0.07] px-5 py-2.5"
                        >
                            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                            <span className="eyebrow text-[0.58rem]! text-gold-300">
                                Atelier of Cinematic Invitations
                            </span>
                        </motion.span>

                        <h1 className="heading-font mt-9 text-6xl font-medium leading-[1.02] text-ivory md:text-7xl">
                            Timeless
                            <br />
                            <em className="text-gold-gradient not-italic">
                                Wedding
                            </em>
                            <br />
                            Experiences
                        </h1>

                        <p className="mx-auto mt-8 max-w-md font-light leading-9 text-sand lg:mx-0">
                            Beautiful digital wedding invitations crafted for modern
                            couples who value elegance, intimacy, and unforgettable
                            memories.
                        </p>

                        <div className="mt-11 flex flex-wrap justify-center gap-4 lg:justify-start">
                            <Link
                                href="/demo/ratna-firman"
                                className="btn-gold inline-flex items-center gap-3 rounded-full px-9 py-4 font-caps text-[0.65rem] font-semibold uppercase"
                            >
                                View Live Demo
                            </Link>

                            <a
                                href="#templates"
                                className="btn-outline inline-flex items-center gap-3 rounded-full px-9 py-4 font-caps text-[0.65rem] font-semibold uppercase text-ivory-dim"
                            >
                                Explore
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-4 lg:justify-start">
                            <span className="flex gap-1 text-gold-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="text-sm">
                                        ★
                                    </span>
                                ))}
                            </span>
                            <p className="text-sm font-light text-sand">
                                Loved by <span className="text-ivory-dim">500+ couples</span> across Indonesia
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 80, rotate: 2 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1.3, ease, delay: 0.15 }}
                        className="relative"
                    >
                        <PhonePreview />

                        {/* floating caption */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease }}
                            className="lux-glass absolute -left-8 bottom-16 hidden rounded-2xl px-5 py-4 lg:block"
                        >
                            <p className="eyebrow text-[0.5rem]! text-gold-400">
                                Live Experience
                            </p>
                            <p className="mt-1.5 text-sm font-light text-ivory-dim">
                                Ratna <span className="font-script italic text-gold-300">&</span> Firman
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
