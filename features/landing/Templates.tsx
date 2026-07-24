"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const templates = [
    {
        title: "Royal Elegance",
        category: "Luxury Collection",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Pure Romance",
        category: "Classic Collection",
        image:
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Garden Love",
        category: "Outdoor Collection",
        image:
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    },
];

export function Templates() {
    return (
        <section
            id="templates"
            className="relative py-36"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* TITLE */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >

                    <p className="uppercase tracking-[0.35em] text-amber-400">
                        Our Collection
                    </p>

                    <h2 className="heading-font mt-5 text-6xl text-white">
                        Beautiful Templates
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                        Pilihan desain undangan digital premium yang dibuat
                        untuk momen paling spesial.
                    </p>

                </motion.div>


                {/* CARDS */}

                <div className="mt-20 grid gap-10 md:grid-cols-3">

                    {templates.map((template, index) => (

                        <motion.div
                            key={template.title}
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                delay: index * 0.15
                            }}
                            whileHover={{
                                y: -12
                            }}
                            className="group overflow-hidden rounded-[35px] border border-white/10 bg-neutral-900"
                        >

                            {/* IMAGE */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                                />


                                {/* OVERLAY */}

                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-500 group-hover:opacity-100">

                                    <button className="flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3 font-semibold text-black">

                                        <Eye size={18} />

                                        View Demo

                                    </button>

                                </div>


                            </div>


                            {/* TEXT */}

                            <div className="p-8">


                                <p className="text-xs uppercase tracking-[0.35em] text-amber-400">

                                    {template.category}

                                </p>


                                <h3 className="heading-font mt-3 text-4xl text-white">

                                    {template.title}

                                </h3>


                                <p className="mt-4 text-neutral-400">

                                    Modern wedding invitation with elegant animation.

                                </p>


                            </div>


                        </motion.div>

                    ))}


                </div>


            </div>
        </section>
    );
}