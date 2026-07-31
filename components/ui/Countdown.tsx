"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const labels = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
] as const;

const initialTime: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

export function Countdown({ targetDate }: CountdownProps) {
    const calculateTimeLeft = useCallback((): TimeLeft => {
        const difference =
            new Date(targetDate).getTime() - new Date().getTime();

        if (difference <= 0) {
            return initialTime;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);

    useEffect(() => {
        // first tick, slightly deferred to stay SSR-hydration-safe
        const first = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 300);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(first);
            clearInterval(timer);
        };
    }, [calculateTimeLeft]);

    return (
        <div className="mt-16 grid w-full max-w-xl grid-cols-4 gap-2.5 sm:gap-4">
            {labels.map(({ key, label }, index) => {
                const value = timeLeft[key];

                return (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.15 * index + 1.7,
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative rounded-2xl border border-gold-500/20 bg-[#14100b]/60 px-1 py-5 text-center backdrop-blur-xl sm:py-6"
                    >
                        <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/50 to-transparent" />

                        <div className="flex items-baseline justify-center overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={value}
                                    initial={{
                                        opacity: 0,
                                        y: -16,
                                        filter: "blur(4px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 16,
                                        filter: "blur(4px)",
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="text-gold-gradient block font-heading text-2xl font-semibold tabular-nums sm:text-4xl"
                                >
                                    {String(value).padStart(2, "0")}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        <p className="eyebrow mt-2.5 text-[0.6rem]! text-sand/90">
                            {label}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}
