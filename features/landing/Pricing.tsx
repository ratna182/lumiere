"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const plans = [
    {
        name: "Basic",
        price: "Rp149K",
        desc: "Untuk pasangan yang ingin undangan digital elegan.",
        features: [
            "1 Template Premium",
            "RSVP",
            "Countdown",
            "Google Maps",
            "Background Music",
        ],
    },
    {
        name: "Premium",
        price: "Rp299K",
        desc: "Pilihan paling populer.",
        featured: true,
        features: [
            "Semua fitur Basic",
            "Photo Gallery",
            "Love Story",
            "Custom Domain",
            "Unlimited Photos",
            "Fast Support",
        ],
    },
    {
        name: "Exclusive",
        price: "Rp499K",
        desc: "Undangan digital tanpa batas.",
        features: [
            "Semua fitur Premium",
            "Custom Design",
            "VIP Support",
            "Premium Animation",
            "Unlimited Revision",
            "Priority Queue",
        ],
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
    return (
        <section
            id="pricing"
            className="relative overflow-hidden py-28 md:py-36"
        >
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p className="eyebrow text-gold-400">
                        Pricing
                    </p>

                    <h2 className="heading-font mt-6 text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
                        Choose Your <em className="text-gold-gradient not-italic">Package</em>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl font-light leading-8 text-sand">
                        Paket sederhana, transparan, tanpa biaya tersembunyi.
                    </p>
                </motion.div>

                <div className="mt-20 grid items-stretch gap-7 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, delay: index * 0.15, ease }}
                            whileHover={{ y: -8 }}
                            className={`
                                relative
                                overflow-hidden
                                rounded-[30px]
                                p-10
                                ${
                                    plan.featured
                                        ? "rule-frame border border-gold-500/45 bg-gradient-to-b from-[#1c1507]/95 via-[#14100b]/95 to-[#0c0a07]/95 shadow-[0_50px_100px_-30px_rgba(212,175,55,0.25)] lg:-my-4 lg:py-14"
                                        : "lux-glass"
                                }
                            `}
                        >
                            {plan.featured && (
                                <>
                                    <span className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/80 to-transparent" />
                                    <div className="absolute left-1/2 top-5 -translate-x-1/2">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/15 px-4 py-1.5 backdrop-blur-xl">
                                            <Crown size={12} className="text-gold-300" />
                                            <span className="eyebrow text-[0.5rem]! text-gold-200">
                                                Most Requested
                                            </span>
                                        </span>
                                    </div>
                                </>
                            )}

                            <h3 className="font-caps text-sm font-semibold text-ivory">
                                {plan.name}
                            </h3>

                            <div className="text-gold-gradient heading-font mt-6 text-5xl font-semibold">
                                {plan.price}
                            </div>

                            <p className="mt-4 font-light leading-7 text-sand">
                                {plan.desc}
                            </p>

                            <div className="my-8 flex items-center gap-3">
                                <span className="h-px w-full bg-gradient-to-r from-gold-500/30 to-transparent" />
                                <span className="h-1.5 w-1.5 rotate-45 bg-gold-500/60" />
                            </div>

                            <div className="space-y-4">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-500/40">
                                            <Check
                                                size={11}
                                                strokeWidth={2.5}
                                                className="text-gold-300"
                                            />
                                        </span>
                                        <span className="text-sm font-light text-ivory-dim">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`
                                    mt-11
                                    w-full
                                    rounded-full
                                    py-4
                                    font-caps
                                    text-[0.65rem]
                                    font-semibold
                                    uppercase
                                    ${
                                        plan.featured
                                            ? "btn-gold"
                                            : "btn-outline text-ivory-dim"
                                    }
                                `}
                            >
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
