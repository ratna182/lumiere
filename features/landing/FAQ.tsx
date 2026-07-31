"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "Apakah undangan bisa dibuka di semua HP?",
        answer:
            "Ya. Undangan digital Lumiere dapat dibuka di Android, iPhone, tablet, maupun komputer tanpa perlu menginstal aplikasi.",
    },
    {
        question: "Apakah nama tamu bisa otomatis?",
        answer:
            "Bisa. Setiap link undangan dapat menampilkan nama tamu secara otomatis sehingga terlihat lebih personal.",
    },
    {
        question: "Bisakah menambahkan musik?",
        answer:
            "Tentu. Anda dapat menggunakan musik romantis atau lagu pilihan sendiri sebagai background.",
    },
    {
        question: "Apakah tersedia RSVP?",
        answer:
            "Ya. Tamu dapat langsung mengisi konfirmasi kehadiran melalui undangan digital.",
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative mx-auto max-w-3xl px-6 py-28 md:py-36"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
            >
                <p className="eyebrow mb-6 text-center text-gold-400">
                    Frequently Asked Questions
                </p>

                <h2 className="heading-font mb-16 text-center text-5xl font-medium leading-[1.05] text-ivory md:text-6xl">
                    Everything You
                    <br />
                    Need <em className="text-gold-gradient not-italic">To Know</em>
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={item.question}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: index * 0.08, ease }}
                                className={`
                                    lux-glass
                                    overflow-hidden
                                    rounded-2xl
                                    transition-colors
                                    duration-500
                                    ${isOpen ? "border-gold-500/40" : ""}
                                `}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <h3 className="heading-font text-xl font-medium text-ivory sm:text-2xl">
                                        {item.question}
                                    </h3>

                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.4, ease }}
                                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/40"
                                    >
                                        <Plus size={14} className="text-gold-300" />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease }}
                                        >
                                            <p className="px-7 pb-7 font-light leading-8 text-sand">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
