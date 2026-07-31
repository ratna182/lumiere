"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const templates = [
    {
        title: "Royal Elegance",
        category: "Luxury Collection",
        number: "01",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Pure Romance",
        category: "Classic Collection",
        number: "02",
        image:
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Garden Love",
        category: "Outdoor Collection",
        number: "03",
        image:
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Templates() {
    return (
        <section
            id="templates"
            className="relative overflow-hidden py-28 md:py-36"
        >
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p className="eyebrow text-gold-400">
                        Our Collection
                    </p>

                    <h2 className="heading-font mt-6 text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
                        Signature <em className="text-gold-gradient not-italic">Templates</em>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-sand">
                        Pilihan desain undangan digital premium yang dibuat
                        untuk momen paling spesial.
                    </p>

                    <div className="mt-9 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/60" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/70" />
                        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/60" />
                    </div>
                </motion.div>

                {/* CARDS */}
                <div className="mt-20 grid gap-8 md:grid-cols-3">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: index * 0.15, ease }}
                            whileHover={{ y: -12 }}
                            className="group relative overflow-hidden rounded-[30px] border border-gold-500/20 bg-[#100d08] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
                        >
                            {/* IMAGE */}
                            <div className="relative h-[420px] overflow-hidden">
                                <Image
                                    src={template.image}
                                    alt={template.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                                />

                                {/* grade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/20 to-transparent" />

                                {/* number */}
                                <span
                                    className="font-caps absolute right-6 top-5 text-sm font-medium text-gold-300/80"
                                    style={{ fontFamily: "var(--font-cinzel)" }}
                                >
                                    N° {template.number}
                                </span>

                                {/* hover veil */}
                                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0908]/55 opacity-0 backdrop-blur-[2px] transition-all duration-700 group-hover:opacity-100">
                                    <a
                                        href="/demo/ratna-andi"
                                        className="btn-gold inline-flex translate-y-4 items-center gap-2.5 rounded-full px-8 py-3.5 font-caps text-[0.62rem] font-semibold uppercase transition-transform duration-700 group-hover:translate-y-0"
                                    >
                                        View Live Demo
                                        <ArrowUpRight size={15} />
                                    </a>
                                </div>
                            </div>

                            {/* TEXT */}
                            <div className="relative p-8">
                                <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/50 to-transparent" />

                                <p className="eyebrow text-[0.55rem]! text-gold-400">
                                    {template.category}
                                </p>

                                <h3 className="heading-font mt-4 text-4xl font-medium text-ivory transition-colors duration-500 group-hover:text-gold-200">
                                    {template.title}
                                </h3>

                                <div className="mt-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-gradient-to-r from-gold-500/60 to-transparent" />
                                    <p className="text-sm font-light text-sand">
                                        Modern invitation with cinematic animation
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
