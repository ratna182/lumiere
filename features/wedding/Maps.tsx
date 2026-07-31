"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

import { wedding } from "@/data/wedding";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Maps() {
    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl px-6">
                <SectionTitle
                    subtitle="Location"
                    title="Find Your Way"
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.1, ease }}
                >
                    <div className="rule-frame relative overflow-hidden rounded-[36px] border border-gold-500/25 bg-gradient-to-b from-[#161209]/95 to-[#0c0a07]/95 p-4 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:p-6">
                        <div className="relative overflow-hidden rounded-[26px] border border-gold-500/25">
                            <iframe
                                src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="h-[320px] w-full border-0 opacity-80 saturate-[0.85] sm:h-[400px]"
                                loading="lazy"
                                title="Wedding venue location"
                            />
                            {/* luxe grade over map */}
                            <div className="pointer-events-none absolute inset-0 rounded-[26px] shadow-[inset_0_0_80px_rgba(10,9,8,0.55)]" />
                        </div>

                        <div className="px-4 pb-4 pt-8 text-center sm:px-8">
                            <div className="mx-auto flex items-center justify-center gap-3">
                                <MapPin size={17} strokeWidth={1.5} className="text-gold-400" />
                                <h3 className="heading-font text-3xl text-ivory sm:text-4xl">
                                    {wedding.event.location}
                                </h3>
                            </div>

                            <p className="mt-3 text-sm font-light tracking-wide text-sand">
                                {wedding.event.address}
                            </p>

                            <OrnamentDivider className="mt-7" />

                            <a
                                href={wedding.event.maps}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-gold mt-9 inline-flex items-center gap-3 rounded-full px-10 py-4 font-caps text-[0.68rem] font-semibold uppercase"
                            >
                                <Navigation size={16} />
                                Open Google Maps
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
