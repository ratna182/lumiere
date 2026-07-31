"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ease = [0.22, 1, 0.36, 1] as const;

export function Gallery() {
    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.07),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <SectionTitle
                    subtitle="Our Memories"
                    title="Moments in Gold"
                />

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                    {wedding.gallery.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, delay: index * 0.12, ease }}
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-[26px]
                                border
                                border-gold-500/20
                                bg-[#100d08]
                                shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]
                                ${index === 0
                                    ? "col-span-2 aspect-[16/10] md:row-span-2 md:aspect-auto"
                                    : "aspect-square"
                                }
                            `}
                        >
                            <Image
                                src={image}
                                alt={`${wedding.bride.firstName} & ${wedding.groom.firstName} — memory ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                            />

                            {/* grade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/80 via-transparent to-[#0a0908]/20" />

                            {/* gold hairline reveal */}
                            <div className="pointer-events-none absolute inset-3 rounded-[18px] border border-gold-300/0 transition-all duration-700 group-hover:border-gold-300/40" />

                            {/* corner diamonds on hover */}
                            <Diamond
                                size={12}
                                strokeWidth={1.5}
                                className="absolute right-5 top-5 rotate-45 text-gold-300 opacity-0 transition-all duration-500 group-hover:opacity-100"
                            />
                            <Diamond
                                size={12}
                                strokeWidth={1.5}
                                className="absolute bottom-5 left-5 rotate-45 text-gold-300 opacity-0 transition-all duration-500 group-hover:opacity-100"
                            />

                            {/* caption */}
                            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                                <span className="h-px w-10 bg-gold-400/70" />
                                <p className="font-caps mt-3 text-[0.62rem] font-medium uppercase text-ivory">
                                    {index === 0
                                        ? "A Glimpse of Forever"
                                        : index === 1
                                          ? "Her Light"
                                          : "His Grace"}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
