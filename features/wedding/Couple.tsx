"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ease = [0.22, 1, 0.36, 1] as const;

function PortraitArch({
    photo,
    alt,
    delay,
    side,
}: {
    photo: string;
    alt: string;
    delay: number;
    side: "left" | "right";
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay, ease }}
            className="relative"
        >
            {/* halo */}
            <div className="absolute -inset-8 rounded-full bg-gold-500/[0.06] blur-3xl" />

            <div className="group relative flex flex-col items-center">
                {/* crest */}
                <div className="mb-7 flex items-center gap-3">
                    <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/60" />
                    <span className="flex h-2 w-2 rotate-45 border border-gold-500/70">
                        <span className="m-[2px] bg-gold" />
                    </span>
                    <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500/60" />
                </div>

                {/* arch portrait */}
                <div
                    className={`relative h-80 w-64 sm:h-96 sm:w-72 ${
                        side === "left" ? "-rotate-1" : "rotate-1"
                    } group-hover:rotate-0 transition-transform duration-700 ease-out`}
                >
                    {/* gold arch frame */}
                    <div className="absolute -inset-3 rounded-t-full rounded-b-[2.5rem] border border-gold-500/25" />
                    <div className="absolute -inset-[13px] rounded-t-full rounded-b-[2.6rem] border border-gold-500/10" />

                    <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-[2.25rem] border border-gold-500/40 bg-[#14100b] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9),0_0_60px_-20px_rgba(212,175,55,0.25)]">
                        <Image
                            src={photo}
                            alt={alt}
                            fill
                            sizes="(max-width: 640px) 320px, 384px"
                            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                        />

                        {/* warm grade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-[#0a0908]/30" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_30%,rgba(10,9,8,0.55))]" />
                    </div>
                </div>

                {/* name */}
                <h3 className="heading-font mt-10 text-5xl font-medium text-ivory sm:text-6xl">
                    {alt}
                </h3>

                <p className="eyebrow mt-4 text-gold-400">
                    {side === "left" ? "The Bride" : "The Groom"}
                </p>

                <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/50" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" />
                    <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-500/50" />
                </div>

                <p className="mt-7 text-xs uppercase tracking-[0.35em] text-sand">
                    {side === "left" ? "Putri dari" : "Putra dari"}
                </p>

                <div className="mt-3 space-y-1 text-center">
                    <p className="heading-font text-2xl text-ivory-dim">
                        {side === "left" ? wedding.bride.father : wedding.groom.father}
                    </p>
                    <p className="font-script text-xl italic text-gold-300">&amp;</p>
                    <p className="heading-font text-2xl text-ivory-dim">
                        {side === "left" ? wedding.bride.mother : wedding.groom.mother}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export function Couple() {
    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            {/* emerald whisper */}
            <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,92,67,0.16),transparent_58%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <SectionTitle
                    subtitle="Bride & Groom"
                    title="Two Hearts, One Story"
                />

                <p className="mx-auto mb-24 max-w-2xl text-center font-light leading-8 text-sand">
                    {wedding.greeting}
                </p>

                <div className="relative grid gap-20 md:grid-cols-2 md:gap-10">
                    {/* shared medallion on desktop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease }}
                        className="absolute left-1/2 top-1/2 z-20 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex"
                    >
                        <span className="filigree-ring absolute inset-0 opacity-70" />
                        <span className="absolute inset-2 rounded-full border border-gold-500/40" />
                        <span className="font-script text-gold-gradient text-6xl italic">
                            &amp;
                        </span>
                    </motion.div>

                    <div className="relative flex justify-center">
                        <PortraitArch
                            photo={wedding.bride.photo}
                            alt={wedding.bride.firstName}
                            delay={0}
                            side="left"
                        />
                    </div>

                    <div className="relative flex justify-center">
                        <PortraitArch
                            photo={wedding.groom.photo}
                            alt={wedding.groom.firstName}
                            delay={0.2}
                            side="right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
