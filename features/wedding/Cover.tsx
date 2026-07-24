"use client";

import { motion } from "framer-motion";
import { Countdown } from "@/components/ui/Countdown";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { wedding } from "@/data/wedding";

export function Cover() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070707]">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${wedding.hero.image})`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/10 blur-[180px]" />

            {/* Top Gradient */}
            <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-black via-black/60 to-transparent" />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
            >
                <motion.p
                    initial={{
                        opacity: 0,
                        letterSpacing: "0.8em",
                    }}
                    animate={{
                        opacity: 1,
                        letterSpacing: "0.45em",
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                    }}
                    className="text-xs uppercase tracking-[0.45em] text-amber-400 md:text-sm"
                >
                    {wedding.hero.title}
                </motion.p>

                <motion.h1
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                    }}
                    className="heading-font mt-10 text-6xl font-semibold text-white md:text-8xl"
                >
                    {wedding.bride.firstName}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="my-5 text-5xl text-amber-400"
                >
                    &
                </motion.div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.8,
                    }}
                    className="heading-font text-6xl font-semibold text-white md:text-8xl"
                >
                    {wedding.groom.firstName}
                </motion.h1>

                <div className="mx-auto my-10 h-px w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.2,
                    }}
                    className="text-lg uppercase tracking-[0.35em] text-neutral-300"
                >
                    {wedding.event.day}
                </motion.p>

                <motion.h2
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.4,
                    }}
                    className="heading-font mt-3 text-4xl text-white md:text-5xl"
                >
                    {wedding.event.date}
                </motion.h2>

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1.6,
                    }}
                    className="mx-auto mt-8 max-w-2xl leading-8 text-neutral-300"
                >
                    {wedding.greeting}
                </motion.p>

                {/* Countdown */}

                <Countdown
                    targetDate={wedding.event.countdownDate}
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 2,
                    }}
                    className="mt-12"
                >
                    <PrimaryButton>
                        Save The Date
                    </PrimaryButton>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="mt-20 flex flex-col items-center"
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                        Scroll
                    </p>

                    <div className="mt-4 text-3xl text-amber-400">
                        ↓
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}