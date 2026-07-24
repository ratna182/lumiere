"use client";

import { motion } from "framer-motion";
import { Heart, Images, Music, MapPinned, CalendarClock, Smartphone } from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Personal Invitation",
        desc: "Undangan dibuat khusus sesuai identitas pasangan."
    },
    {
        icon: Images,
        title: "Beautiful Gallery",
        desc: "Galeri foto dengan tampilan elegan."
    },
    {
        icon: Music,
        title: "Background Music",
        desc: "Musik romantis yang diputar otomatis."
    },
    {
        icon: CalendarClock,
        title: "Countdown",
        desc: "Hitung mundur menuju hari bahagia."
    },
    {
        icon: MapPinned,
        title: "Google Maps",
        desc: "Navigasi lokasi resepsi sekali klik."
    },
    {
        icon: Smartphone,
        title: "Responsive",
        desc: "Sempurna di HP, Tablet dan Desktop."
    }
];

export function Features() {
    return (
        <section
            id="features"
            className="py-36"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center"
                >

                    <p className="tracking-[0.35em] uppercase text-amber-400">
                        Features
                    </p>

                    <h2 className="heading-font mt-5 text-6xl text-white">
                        Everything You Need
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                        Semua fitur yang dibutuhkan untuk membuat undangan digital premium.
                    </p>

                </motion.div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * .08 }}
                                whileHover={{ y: -8 }}
                                className="rounded-3xl border border-white/10 bg-neutral-900 p-8"
                            >

                                <div className="mb-6 inline-flex rounded-2xl bg-amber-400/10 p-4">

                                    <Icon className="text-amber-400" />

                                </div>

                                <h3 className="heading-font text-3xl text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-4 leading-8 text-neutral-400">

                                    {item.desc}

                                </p>

                            </motion.div>

                        )

                    })}

                </div>

            </div>
        </section>
    );
}