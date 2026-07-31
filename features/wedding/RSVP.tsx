"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { wedding } from "@/data/wedding";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const ease = [0.22, 1, 0.36, 1] as const;

export function RSVP() {
    const message = encodeURIComponent(
        `Halo ${wedding.bride.firstName} & ${wedding.groom.firstName}, saya ingin mengkonfirmasi kehadiran di acara pernikahan kalian.`
    );

    const whatsapp =
        `https://wa.me/${wedding.rsvp.whatsapp}?text=${message}`;

    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(29,92,67,0.18),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl px-6">
                <SectionTitle
                    subtitle="Confirmation"
                    title="Will You Attend?"
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.1, ease }}
                    className="rule-frame relative overflow-hidden rounded-[36px] border border-gold-500/25 bg-gradient-to-b from-[#161209]/95 to-[#0c0a07]/95 px-7 py-14 text-center shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:px-14"
                >
                    <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/70 to-transparent" />

                    <p className="font-script text-4xl italic text-gold-300">
                        With joy, we await your presence
                    </p>

                    <p className="mx-auto mt-6 max-w-md font-light leading-8 text-sand">
                        Mohon konfirmasi kehadiran Anda melalui WhatsApp
                        agar kami dapat mempersiapkan acara dengan lebih baik.
                    </p>

                    <OrnamentDivider className="mt-9" />

                    <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-11 inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-[#1d5c43] via-[#17503a] to-[#0e3a2a] px-10 py-4 font-caps text-[0.68rem] font-semibold uppercase text-ivory shadow-[0_22px_50px_-18px_rgba(29,92,67,0.7),inset_0_1px_0_rgba(255,255,255,0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-18px_rgba(29,92,67,0.9),inset_0_1px_0_rgba(255,255,255,0.14)]"
                    >
                        <MessageCircle
                            size={18}
                            className="transition-transform duration-500 group-hover:rotate-12"
                        />
                        Confirm via WhatsApp
                    </a>

                    <p className="mt-6 text-xs tracking-[0.3em] text-sand/70 uppercase">
                        {wedding.bride.firstName} &amp; {wedding.groom.firstName} are waiting
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
