"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

export function Couple() {
    return (
        <section className="relative overflow-hidden bg-[#070707] py-24">

            {/* Glow Background */}
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                <SectionTitle
                    subtitle="Bride & Groom"
                    title="Together Forever"
                />

                <p className="mx-auto mb-20 max-w-3xl text-center leading-8 text-neutral-400">
                    {wedding.greeting}
                </p>

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Bride */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <GlassCard className="p-10 text-center">

                            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-amber-400">

                                <Image
                                    src={wedding.bride.photo}
                                    alt={wedding.bride.firstName}
                                    fill
                                    className="object-cover transition duration-700 hover:scale-110"
                                />

                            </div>

                            <h2 className="heading-font mt-10 text-5xl text-white">
                                {wedding.bride.firstName}
                            </h2>

                            <p className="mt-5 uppercase tracking-[0.3em] text-amber-400">
                                The Bride
                            </p>

                            <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                            <p className="text-neutral-300">
                                Putri dari
                            </p>

                            <h3 className="mt-3 text-xl font-semibold text-white">
                                {wedding.bride.father}
                            </h3>

                            <p className="my-2 text-neutral-500">&amp;</p>

                            <h3 className="text-xl font-semibold text-white">
                                {wedding.bride.mother}
                            </h3>

                        </GlassCard>
                    </motion.div>

                    {/* Groom */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <GlassCard className="p-10 text-center">

                            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-amber-400">

                                <Image
                                    src={wedding.groom.photo}
                                    alt={wedding.groom.firstName}
                                    fill
                                    className="object-cover transition duration-700 hover:scale-110"
                                />

                            </div>

                            <h2 className="heading-font mt-10 text-5xl text-white">
                                {wedding.groom.firstName}
                            </h2>

                            <p className="mt-5 uppercase tracking-[0.3em] text-amber-400">
                                The Groom
                            </p>

                            <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                            <p className="text-neutral-300">
                                Putra dari
                            </p>

                            <h3 className="mt-3 text-xl font-semibold text-white">
                                {wedding.groom.father}
                            </h3>

                            <p className="my-2 text-neutral-500">&amp;</p>

                            <h3 className="text-xl font-semibold text-white">
                                {wedding.groom.mother}
                            </h3>

                        </GlassCard>
                    </motion.div>

                </div>

            </div>

        </section>
    );
}