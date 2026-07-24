"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

export function Pricing() {
    return (
        <section
            id="pricing"
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

                    <p className="uppercase tracking-[0.35em] text-amber-400">
                        Pricing
                    </p>

                    <h2 className="heading-font mt-5 text-6xl text-white">
                        Choose Your Package
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                        Paket sederhana, transparan, tanpa biaya tersembunyi.
                    </p>

                </motion.div>

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {plans.map((plan, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * .15 }}
                            whileHover={{ y: -8 }}
                            className={`rounded-3xl border p-10 ${plan.featured
                                    ? "border-amber-400 bg-amber-400/10"
                                    : "border-white/10 bg-neutral-900"
                                }`}
                        >

                            <h3 className="heading-font text-4xl text-white">
                                {plan.name}
                            </h3>

                            <div className="mt-5 text-5xl font-bold text-amber-400">
                                {plan.price}
                            </div>

                            <p className="mt-4 text-neutral-400">
                                {plan.desc}
                            </p>

                            <div className="mt-8 space-y-4">

                                {plan.features.map((feature) => (

                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <Check
                                            size={18}
                                            className="text-amber-400"
                                        />

                                        <span className="text-neutral-300">
                                            {feature}
                                        </span>

                                    </div>

                                ))}

                            </div>

                            <button className="mt-10 w-full rounded-full bg-amber-400 py-4 font-semibold text-black transition hover:scale-105">
                                Choose Plan
                            </button>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}