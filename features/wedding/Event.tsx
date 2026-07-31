"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Event() {
    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl px-6">
                <SectionTitle
                    subtitle="Save The Date"
                    title="The Celebration"
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.1, ease }}
                    className="relative"
                >
                    {/* rotating filigree behind the card */}
                    <div className="filigree-ring pointer-events-none absolute -inset-10 opacity-30 md:-inset-16" />

                    <div className="rule-frame relative overflow-hidden rounded-[36px] border border-gold-500/25 bg-gradient-to-b from-[#161209]/95 via-[#100d08]/95 to-[#0c0a07]/95 px-7 py-14 text-center shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:px-14 md:py-16">
                        <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/70 to-transparent" />

                        {/* corner rosettes */}
                        {["left-5 top-5", "right-5 top-5", "left-5 bottom-5", "right-5 bottom-5"].map(
                            (pos) => (
                                <span
                                    key={pos}
                                    className={`pointer-events-none absolute ${pos} flex h-3 w-3 rotate-45 border border-gold-500/50`}
                                >
                                    <span className="m-[3px] bg-gold-500/60" />
                                </span>
                            )
                        )}

                        <p className="eyebrow text-gold-shimmer">
                            {wedding.event.day}
                        </p>

                        <h2 className="heading-font text-gold-gradient mt-8 text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
                            {wedding.event.date}
                        </h2>

                        <OrnamentDivider label="at" className="mt-9" />

                        <div className="mx-auto mt-8 space-y-5">
                            <div className="flex items-center justify-center gap-3 text-ivory-dim">
                                <Clock3 size={17} className="text-gold-400" strokeWidth={1.5} />
                                <p className="heading-font text-2xl sm:text-3xl">
                                    {wedding.event.time}
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="h-1 w-1 rotate-45 bg-gold-500/60" />
                            </div>

                            <div className="flex items-center justify-center gap-3">
                                <MapPin size={17} className="text-gold-400" strokeWidth={1.5} />
                                <p className="heading-font text-2xl text-ivory sm:text-3xl">
                                    {wedding.event.location}
                                </p>
                            </div>
                        </div>

                        <p className="mx-auto mt-5 max-w-md text-sm font-light tracking-wide text-sand">
                            {wedding.event.address}
                        </p>

                        <a
                            href={wedding.event.maps}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-gold mt-11 inline-flex items-center gap-3 rounded-full px-10 py-4 font-caps text-[0.68rem] font-semibold uppercase"
                        >
                            <CalendarDays size={16} />
                            Open Maps
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
