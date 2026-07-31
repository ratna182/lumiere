"use client";

import { motion } from "framer-motion";
import { Countdown } from "@/components/ui/Countdown";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { wedding } from "@/data/wedding";

const ease = [0.22, 1, 0.36, 1] as const;

export function Cover() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070606]">
            {/* Background */}
            <div
                className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${wedding.hero.image})`,
                }}
            />

            {/* warm cinematic washes */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-[#0a0908]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2a0e12]/45 via-transparent to-[#0e2a1f]/35" />

            {/* ember glow */}
            <div className="pulse-glow absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_60%)] blur-3xl" />

            {/* top / bottom fade */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0908] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/60 to-transparent" />

            {/* hairline invitation frame */}
            <div className="pointer-events-none absolute inset-4 z-20 rounded-[28px] border border-gold-500/15 sm:inset-6" />
            <div className="pointer-events-none absolute inset-7 z-20 hidden rounded-[24px] border border-gold-500/8 sm:block" />

            <motion.div
                initial="hidden"
                animate="show"
                className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-36 text-center"
            >
                {/* eyebrow */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0, letterSpacing: "0.9em" },
                        show: {
                            opacity: 1,
                            letterSpacing: "0.45em",
                            transition: { duration: 1.4, ease },
                        },
                    }}
                    className="eyebrow text-gold-shimmer"
                >
                    {wedding.hero.title}
                </motion.p>

                {/* names */}
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 34, scale: 0.98 },
                        show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 1.4, ease },
                        },
                    }}
                    className="heading-font mt-12 text-6xl font-medium leading-[0.95] text-ivory drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] sm:text-8xl md:text-9xl"
                >
                    {wedding.bride.firstName}
                </motion.h1>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.5, rotate: -12 },
                        show: {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            transition: { duration: 1.1, ease },
                        },
                    }}
                    className="relative my-2 sm:my-3"
                >
                    <span className="font-script text-gold-gradient block -rotate-3 text-7xl italic sm:text-8xl md:text-9xl">
                        &amp;
                    </span>
                </motion.div>

                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 34, scale: 0.98 },
                        show: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 1.4, ease },
                        },
                    }}
                    className="heading-font text-6xl font-medium leading-[0.95] text-ivory drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] sm:text-8xl md:text-9xl"
                >
                    {wedding.groom.firstName}
                </motion.h1>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scaleX: 0.4 },
                        show: {
                            opacity: 1,
                            scaleX: 1,
                            transition: { duration: 1.2, ease },
                        },
                    }}
                    className="mt-12 w-full"
                >
                    <OrnamentDivider />
                </motion.div>

                {/* date */}
                <motion.p
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { duration: 1.2, delay: 0.2, ease },
                        },
                    }}
                    className="eyebrow mt-10 text-gold-300"
                >
                    {wedding.event.day}
                </motion.p>

                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1.2, delay: 0.35, ease },
                        },
                    }}
                    className="heading-font mt-4 text-4xl font-medium text-ivory sm:text-5xl md:text-6xl"
                >
                    {wedding.event.date}
                </motion.h2>

                <motion.p
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { duration: 1.2, delay: 0.55, ease },
                        },
                    }}
                    className="mx-auto mt-8 max-w-xl text-base font-light leading-8 text-ivory-dim/90 sm:text-lg"
                >
                    {wedding.greeting}
                </motion.p>

                {/* countdown */}
                <Countdown targetDate={wedding.event.countdownDate} />

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1, delay: 0.3, ease },
                        },
                    }}
                    className="mt-14"
                >
                    <PrimaryButton>Save The Date</PrimaryButton>
                </motion.div>

                {/* scroll cue */}
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2.6,
                        ease: "easeInOut",
                    }}
                    className="mt-24 flex flex-col items-center"
                >
                    <p className="eyebrow text-[0.6rem]! text-sand">
                        Scroll
                    </p>
                    <span className="mt-4 block h-10 w-px bg-gradient-to-b from-gold-400/80 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
