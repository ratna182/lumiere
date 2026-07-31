"use client";

import { motion } from "framer-motion";
import { Gift as GiftIcon } from "lucide-react";

import { wedding } from "@/data/wedding";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { CopyButton } from "@/components/ui/CopyButton";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Gift() {
    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.09),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl px-6">
                <SectionTitle
                    subtitle="Wedding Gift"
                    title="With Love & Gratitude"
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.1, ease }}
                    className="relative"
                >
                    <div className="filigree-ring pointer-events-none absolute -inset-12 opacity-25" />

                    <div className="rule-frame relative overflow-hidden rounded-[36px] border border-gold-500/25 bg-gradient-to-b from-[#161209]/95 to-[#0c0a07]/95 px-7 py-14 text-center shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:px-14">
                        <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/70 to-transparent" />

                        {/* crest */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease, delay: 0.2 }}
                            className="relative mx-auto flex h-16 w-16 items-center justify-center"
                        >
                            <span className="absolute inset-0 rotate-45 rounded-[16px] border border-gold-500/40" />
                            <GiftIcon
                                size={22}
                                strokeWidth={1.25}
                                className="text-gold-300"
                            />
                        </motion.div>

                        <p className="font-script mt-8 text-3xl italic text-gold-300">
                            Your presence is our greatest gift,
                        </p>
                        <p className="mt-2 text-sm font-light tracking-wide text-sand">
                            namun jika ingin memberi tanda kasih, kami telah menyediakan:
                        </p>

                        <OrnamentDivider className="mt-9" />

                        {/* bank details */}
                        <div className="mt-10">
                            <p className="eyebrow text-gold-400">
                                {wedding.gift.bank}
                            </p>

                            <h2 className="text-gold-gradient heading-font mt-5 text-5xl font-semibold tracking-[0.06em] sm:text-6xl">
                                {wedding.gift.accountNumber}
                            </h2>

                            <p className="font-script mt-6 text-2xl italic text-ivory-dim">
                                a.n. {wedding.gift.accountName}
                            </p>
                        </div>

                        <div className="mt-10 flex justify-center">
                            <CopyButton text={wedding.gift.accountNumber} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
