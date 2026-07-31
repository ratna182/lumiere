"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Music2, Images, MapPin } from "lucide-react";
import { PhonePreview } from "@/features/wedding/PhonePreview";

const ease = [0.22, 1, 0.36, 1] as const;

const bullets = [
    {
        icon: Music2,
        text: "Background music that sets the mood",
    },
    {
        icon: Images,
        text: "A gallery of memories, framed in gold",
    },
    {
        icon: MapPin,
        text: "One-tap navigation to the venue",
    },
];

export function Demo() {
    return (
        <section
            id="demo"
            className="relative overflow-hidden py-28 md:py-36"
        >
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.09),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.1, ease }}
                    >
                        <p className="eyebrow text-gold-400">
                            Live Experience
                        </p>

                        <h2 className="heading-font mt-6 text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
                            Every detail,
                            <br />
                            <em className="font-script text-gold-gradient text-6xl italic md:text-7xl">
                                curated
                            </em>
                        </h2>

                        <p className="mt-7 max-w-md font-light leading-8 text-sand">
                            Open the invitation, feel the wax seal, listen to the music,
                            and walk through the entire journey — from the first meeting
                            to the final toast.
                        </p>

                        <ul className="mt-10 space-y-5">
                            {bullets.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -24 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.15 * i, ease }}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                                            <span className="absolute inset-0 rotate-45 rounded-[10px] border border-gold-500/40" />
                                            <Icon size={16} strokeWidth={1.5} className="text-gold-300" />
                                        </span>
                                        <span className="font-light text-ivory-dim">
                                            {item.text}
                                        </span>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <Link
                            href="/demo/ratna-firman"
                            className="group mt-12 inline-flex items-center gap-3 rounded-full border border-gold-500/35 bg-gold-500/[0.07] px-9 py-4 font-caps text-[0.65rem] font-semibold uppercase text-gold-200 backdrop-blur-xl transition-all duration-500 hover:border-gold-400/60 hover:bg-gold-500/15"
                        >
                            Open the Live Invitation
                            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1.5" />
                        </Link>
                    </motion.div>

                    {/* FRAMED PHONE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, ease }}
                        className="relative flex justify-center"
                    >
                        <div className="filigree-ring pointer-events-none absolute -inset-16 opacity-20" />

                        <div className="rule-frame relative rounded-[44px] border border-gold-500/20 bg-gradient-to-b from-[#161209]/80 to-[#0c0a07]/80 p-8 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:p-12">
                            <p className="eyebrow mb-8 text-[0.55rem]! text-center text-sand/80">
                                The Ratna <span className="font-script text-gold-300 normal-case">&</span> Firman Invitation
                            </p>

                            <PhonePreview />

                            <div className="mt-8 flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/50" />
                                <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" />
                                <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500/50" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
