"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

export function FAQ() {
    return (
        <section
            id="faq"
            className="mx-auto max-w-5xl px-6 py-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="mb-4 text-center tracking-[0.35em] text-amber-400 uppercase">
                    Frequently Asked Questions
                </p>

                <h2 className="heading-font mb-14 text-center text-5xl text-white">
                    Everything You Need
                    <br />
                    To Know
                </h2>

                <div className="space-y-5">
                    {faqs.map((item) => (
                        <div
                            key={item.question}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                    {item.question}
                                </h3>

                                <ChevronDown
                                    className="text-amber-400"
                                    size={20}
                                />
                            </div>

                            <p className="leading-8 text-neutral-400">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}