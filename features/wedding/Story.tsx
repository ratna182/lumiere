"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";

const stories = [
    {
        year: wedding.story.firstMeet,
        title: "First Meet",
        caption: "where it all began",
        description:
            "Awal pertemuan yang menjadi langkah pertama dari perjalanan panjang kami.",
    },
    {
        year: wedding.story.engagement,
        title: "Engagement",
        caption: "a promise made",
        description:
            "Sebuah komitmen untuk melangkah bersama menuju masa depan.",
    },
    {
        year: wedding.story.wedding,
        title: "Wedding Day",
        caption: "forever begins",
        description:
            "Hari bahagia dimana kami mengikat janji untuk selamanya.",
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Story() {
    return (
        <section className="relative overflow-hidden bg-[#0a0908] py-28 md:py-36">
            {/* gold + burgundy whisper */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_60%)] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(110,36,48,0.14),transparent_60%)] blur-3xl" />

            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <SectionTitle
                    subtitle="Our Journey"
                    title="The Love Story"
                />

                <div className="relative">
                    {/* timeline line */}
                    <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold-500 via-gold-500/30 to-transparent md:left-1/2" />

                    <div className="space-y-20 md:space-y-28">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.year}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, ease }}
                                className={`
                                    relative
                                    flex
                                    items-center
                                    md:w-1/2
                                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                                `}
                            >
                                {/* diamond marker */}
                                <motion.div
                                    initial={{ scale: 0, rotate: 90 }}
                                    whileInView={{ scale: 1, rotate: 45 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease, delay: 0.2 }}
                                    className={`
                                        absolute
                                        left-6
                                        z-10
                                        -translate-x-1/2
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center
                                        md:left-auto
                                        ${index % 2 === 0 ? "md:-right-3.5 md:translate-x-0" : "md:-left-3.5 md:translate-x-0"}
                                    `}
                                >
                                    <span className="absolute inset-0 rotate-45 border border-gold-400/70 bg-[#0a0908] shadow-[0_0_24px_rgba(212,175,55,0.4)]" />
                                    <span className="absolute inset-[6px] rotate-45 bg-gold" />
                                </motion.div>

                                {/* card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 1, delay: 0.15, ease }}
                                    className="lux-glass relative ml-14 w-full overflow-hidden rounded-[24px] p-8 md:ml-0 md:p-9"
                                >
                                    <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-200/50 to-transparent" />

                                    <p className="eyebrow text-gold-400">
                                        {story.year}
                                    </p>

                                    <h3 className="heading-font mt-4 text-4xl font-medium text-ivory md:text-5xl">
                                        {story.title}
                                    </h3>

                                    <p className="font-script mt-2 text-2xl italic text-gold-300">
                                        {story.caption}
                                    </p>

                                    <OrnamentDivider className="mt-6 gap-3!" />

                                    <p className="mt-6 font-light leading-8 text-sand">
                                        {story.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
