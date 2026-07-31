"use client";

import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "@/data/wedding";

interface InvitationGateProps {
    open: boolean;
    onOpen: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function InvitationGate({
    open,
    onOpen,
}: InvitationGateProps) {

    return (
        <AnimatePresence>
            {!open && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.06 }}
                    transition={{ duration: 1.1, ease }}
                    className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden bg-[#0a0908] px-6"
                >
                    {/* ember glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_62%)] blur-2xl"
                    />

                    {/* faint filigree rings */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2.4, ease }}
                        className="filigree-ring pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-40"
                    />

                    {/* corner ornaments */}
                    {(["corner-tl", "corner-tr", "corner-bl", "corner-br"] as const).map(
                        (corner, i) => (
                            <motion.span
                                key={corner}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 + i * 0.15, duration: 1 }}
                                className={`corner-bracket ${corner} hidden h-16 w-16 md:block`}
                            />
                        )
                    )}

                    {/* The card */}
                    <motion.div
                        initial={{ opacity: 0, y: 46, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease }}
                        className="relative z-10 mx-auto w-full max-w-lg"
                    >
                        <motion.div
                            exit={{ opacity: 0, y: -60, scale: 1.04 }}
                            transition={{ duration: 0.8, ease }}
                            className="relative"
                        >
                            {/* card frame */}
                            <div className="rule-frame relative rounded-[34px] border border-gold-500/25 bg-gradient-to-b from-[#161209]/90 to-[#0c0a07]/90 px-8 py-14 text-center shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:px-14 sm:py-16">
                                {/* top light */}
                                <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/70 to-transparent" />

                                {/* corner rosettes */}
                                <span className="pointer-events-none absolute left-5 top-5 flex h-2.5 w-2.5 rotate-45 border border-gold-500/50" />
                                <span className="pointer-events-none absolute right-5 top-5 flex h-2.5 w-2.5 rotate-45 border border-gold-500/50" />
                                <span className="pointer-events-none absolute bottom-5 left-5 flex h-2.5 w-2.5 rotate-45 border border-gold-500/50" />
                                <span className="pointer-events-none absolute bottom-5 right-5 flex h-2.5 w-2.5 rotate-45 border border-gold-500/50" />

                                {/* eyebrow */}
                                <motion.p
                                    initial={{ opacity: 0, letterSpacing: "0.9em" }}
                                    animate={{ opacity: 1, letterSpacing: "0.45em" }}
                                    transition={{ delay: 0.5, duration: 1.1, ease }}
                                    className="eyebrow text-gold-400"
                                >
                                    The Wedding Of
                                </motion.p>

                                {/* monogram medallion */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.9, duration: 1.1, ease }}
                                    className="relative mx-auto mt-10 flex h-28 w-28 items-center justify-center"
                                >
                                    <span className="filigree-ring absolute inset-0 opacity-80" />
                                    <span className="absolute inset-[7px] rotate-45 rounded-[18px] border border-gold-500/40" />
                                    <span className="heading-font text-gold-gradient text-4xl font-semibold">
                                        {wedding.bride.firstName.charAt(0)}
                                        <span className="font-script px-1 text-2xl italic">
                                            &amp;
                                        </span>
                                        {wedding.groom.firstName.charAt(0)}
                                    </span>
                                </motion.div>

                                {/* names */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.15, duration: 1, ease }}
                                    className="heading-font mt-10 text-5xl font-medium leading-tight text-ivory sm:text-6xl"
                                >
                                    {wedding.bride.firstName}
                                    <span className="font-script mx-3 inline-block -rotate-3 text-4xl italic text-gold-300 sm:text-5xl">
                                        &amp;
                                    </span>
                                    {wedding.groom.firstName}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                    className="mt-4 text-sm uppercase tracking-[0.4em] text-sand"
                                >
                                    {wedding.event.date}
                                </motion.p>

                                {/* guest line */}
                                <motion.div
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.7, duration: 1, ease }}
                                    className="mt-10"
                                >
                                    <p className="text-xs uppercase tracking-[0.4em] text-sand">
                                        Kepada Yth.
                                    </p>
                                    <p className="mx-auto mt-3 inline-block rounded-full border border-gold-500/25 bg-black/30 px-8 py-3 text-sm tracking-wide text-ivory-dim">
                                        Bapak / Ibu / Saudara(i)
                                    </p>
                                </motion.div>

                                {/* wax seal */}
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.9, duration: 1, ease }}
                                    className="mt-12 flex flex-col items-center"
                                >
                                    <motion.button
                                        onClick={onOpen}
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.94 }}
                                        transition={{ duration: 0.35, ease }}
                                        aria-label="Open invitation"
                                        className="group relative"
                                    >
                                        {/* glow */}
                                        <span className="absolute -inset-5 rounded-full bg-gold-500/25 blur-2xl transition-all duration-500 group-hover:bg-gold-400/40" />

                                        {/* seal body */}
                                        <span className="bg-gold relative flex h-24 w-24 items-center justify-center rounded-full shadow-[inset_0_2px_6px_rgba(255,255,255,0.6),inset_0_-6px_14px_rgba(92,71,21,0.85),0_20px_40px_-12px_rgba(212,175,55,0.5)] transition-transform duration-500 group-hover:rotate-3">
                                            <span className="absolute inset-1.5 rounded-full border border-[#8c6d1f]/60" />
                                            <span className="absolute inset-3 rounded-full border border-dashed border-[#5c4715]/70" />
                                            <span
                                                className="text-sm font-bold tracking-[0.12em] text-[#3a2b08]"
                                                style={{ fontFamily: "var(--font-cinzel)" }}
                                            >
                                                R
                                                <span className="mx-0.5 font-script text-xs normal-case">
                                                    ·
                                                </span>
                                                A
                                            </span>
                                        </span>
                                    </motion.button>

                                    <p className="eyebrow mt-6 text-[0.65rem]! text-gold-400">
                                        Buka Undangan
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
