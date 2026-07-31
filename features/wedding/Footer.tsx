"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#080707] py-28">
            <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.1),transparent_62%)] blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease }}
                className="relative z-10 mx-auto max-w-3xl px-6 text-center"
            >
                <p className="eyebrow text-gold-400">
                    Thank You
                </p>

                <h2 className="heading-font mt-10 text-5xl font-medium leading-tight text-ivory sm:text-7xl">
                    {wedding.bride.firstName}
                    <span className="font-script text-gold-gradient mx-4 inline-block -rotate-3 text-5xl italic sm:text-6xl">
                        &amp;
                    </span>
                    {wedding.groom.firstName}
                </h2>

                <p className="font-script mt-8 text-3xl italic text-gold-300">
                    With love, from the two of us
                </p>

                <p className="mx-auto mt-4 max-w-md font-light leading-8 text-sand">
                    Terima kasih atas doa dan kehadiran Anda di hari bahagia kami.
                </p>

                <OrnamentDivider label="fin" className="mt-12" />

                <p className="mt-10 text-xs uppercase tracking-[0.35em] text-sand/80">
                    © 2027 · Crafted by Lumiere
                </p>
            </motion.div>
        </footer>
    );
}
