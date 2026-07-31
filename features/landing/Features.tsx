"use client";

import { motion } from "framer-motion";
import {
    Heart,
    Images,
    Music,
    CalendarClock,
    MapPinned,
    Smartphone,
} from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Personal Invitation",
        desc: "Undangan dibuat khusus sesuai identitas pasangan.",
    },
    {
        icon: Images,
        title: "Beautiful Gallery",
        desc: "Galeri foto dengan tampilan elegan.",
    },
    {
        icon: Music,
        title: "Background Music",
        desc: "Musik romantis yang diputar otomatis.",
    },
    {
        icon: CalendarClock,
        title: "Countdown",
        desc: "Hitung mundur menuju hari bahagia.",
    },
    {
        icon: MapPinned,
        title: "Google Maps",
        desc: "Navigasi lokasi resepsi sekali klik.",
    },
    {
        icon: Smartphone,
        title: "Responsive",
        desc: "Sempurna di HP, Tablet dan Desktop.",
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Features() {
    return (
        <section
            id="features"
            className="relative overflow-hidden py-28 md:py-36"
        >
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(29,92,67,0.14),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p className="eyebrow text-gold-400">
                        Features
                    </p>

                    <h2 className="heading-font mt-6 text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
                        Everything <em className="text-gold-gradient not-italic">You Need</em>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-sand">
                        Semua fitur yang dibutuhkan untuk membuat undangan digital premium.
                    </p>
                </motion.div>

                <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.9, delay: index * 0.08, ease }}
                                whileHover={{ y: -8 }}
                                className="group lux-glass relative overflow-hidden rounded-[26px] p-8"
                            >
                                <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/50 to-transparent" />

                                <div className="relative mb-7 inline-flex h-14 w-14 items-center justify-center">
                                    <span className="absolute inset-0 rotate-45 rounded-[16px] border border-gold-500/35 transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-gold-400/60" />
                                    <Icon
                                        size={22}
                                        strokeWidth={1.25}
                                        className="text-gold-300 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="heading-font text-3xl font-medium text-ivory">
                                    {item.title}
                                </h3>

                                <p className="mt-3 font-light leading-7 text-sand">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
