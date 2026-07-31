"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wifi, BatteryFull } from "lucide-react";

const pages = [
    {
        type: "cover",
        title: "The Wedding Of",
        name: "Ratna",
        second: "Andi",
        button: "Open Invitation",
    },
    {
        type: "couple",
        title: "Bride & Groom",
        name: "Ratna Pratiwi",
        second: "Andi Saputra",
        button: "Our Story",
    },
    {
        type: "gallery",
        title: "Our Memories",
        name: "Beautiful",
        second: "Moments",
        button: "View Gallery",
    },
    {
        type: "event",
        title: "Wedding Event",
        name: "Saturday",
        second: "20 June 2027",
        button: "See Location",
    },
    {
        type: "gift",
        title: "Wedding Gift",
        name: "Digital Gift",
        second: "For Couple",
        button: "Send Gift",
    },
    {
        type: "rsvp",
        title: "Confirmation",
        name: "Will You",
        second: "Attend?",
        button: "RSVP Now",
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function PhonePreview() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % pages.length);
        }, 3800);

        return () => clearInterval(timer);
    }, []);

    const page = pages[index];

    return (
        <div className="relative mx-auto w-[245px] sm:w-[300px] lg:w-[340px]">
            {/* layout spacer matching the scaled phone */}
            <div className="h-[490px] sm:h-[600px] lg:h-[680px]" />

            <div className="absolute left-0 top-0 origin-top-left scale-[0.72] sm:scale-[0.882] lg:scale-100">
                {/* gold aura */}
                <div className="pulse-glow absolute -inset-8 rounded-[70px] bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)] blur-[80px]" />

                {/* rotating filigree */}
                <div className="filigree-ring pointer-events-none absolute -inset-14 opacity-25" />

            {/* PHONE FRAME */}
            <div
                className="
                    relative
                    h-[680px]
                    w-[340px]
                    rounded-[54px]
                    border
                    border-gold-500/30
                    bg-gradient-to-b
                    from-[#1c1710]
                    via-[#12100b]
                    to-[#0c0a07]
                    p-3
                    shadow-[0_50px_120px_-30px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(212,175,55,0.25)]
                "
            >
                {/* side buttons */}
                <span className="absolute -left-[2px] top-24 h-8 w-[3px] rounded-l bg-gold-500/30" />
                <span className="absolute -left-[2px] top-36 h-12 w-[3px] rounded-l bg-gold-500/30" />
                <span className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-r bg-gold-500/30" />

                {/* SCREEN */}
                <div
                    className="
                        relative
                        flex
                        h-full
                        flex-col
                        overflow-hidden
                        rounded-[43px]
                        bg-gradient-to-b
                        from-[#14100b]
                        to-[#080707]
                    "
                >
                    {/* screen atmosphere */}
                    <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.13),transparent_62%)] blur-2xl" />

                    {/* STATUS BAR */}
                    <div className="relative z-10 flex items-center justify-between px-7 pt-5 text-xs text-ivory-dim">
                        <span>09:41</span>

                        <div className="flex gap-2">
                            <Wifi size={13} strokeWidth={1.5} />
                            <BatteryFull size={15} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-black px-9 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-1 items-center justify-center px-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -36, filter: "blur(6px)" }}
                                transition={{ duration: 0.7, ease }}
                                className="text-center"
                            >
                                <p className="eyebrow text-gold-400">
                                    {page.title}
                                </p>

                                <h2 className="heading-font text-gold-gradient mt-9 text-5xl font-medium">
                                    {page.name}
                                </h2>

                                <p className="font-script my-3 text-3xl italic text-gold-300">
                                    &amp;
                                </p>

                                <h2 className="heading-font text-5xl font-medium text-ivory">
                                    {page.second}
                                </h2>

                                <div className="mx-auto mt-8 flex items-center justify-center gap-3">
                                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/60" />
                                    <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" />
                                    <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-500/60" />
                                </div>

                                <button className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-caps text-[0.6rem] font-semibold uppercase">
                                    {page.button}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* dots */}
                    <div className="relative z-10 flex justify-center gap-2 pb-6">
                        {pages.map((_, i) => (
                            <span
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${
                                    i === index
                                        ? "w-5 bg-gold-400"
                                        : "w-1 bg-sand/30"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
