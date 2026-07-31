"use client";

import Link from "next/link";
import { Globe, Mail, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-gold-500/15 bg-[#080707] py-16">
            <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.08),transparent_62%)] blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-7 w-7 items-center justify-center">
                        <span className="absolute inset-0 rotate-45 rounded-[7px] border border-gold-500/60" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                    </span>

                    <div>
                        <h2 className="font-caps text-base font-semibold text-ivory">
                            LUMIERE
                        </h2>
                        <p className="mt-1 text-xs font-light text-sand">
                            Atelier of Timeless Wedding Invitations
                        </p>
                    </div>
                </div>

                <nav className="flex flex-wrap justify-center gap-7 text-sm font-light text-ivory-dim">
                    {[
                        ["Templates", "#templates"],
                        ["Features", "#features"],
                        ["Experience", "#demo"],
                        ["Pricing", "#pricing"],
                        ["FAQ", "#faq"],
                    ].map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className="transition-colors duration-300 hover:text-gold-300"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-3">
                    {[Globe, MessageCircle, Mail].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            aria-label="Social link"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 text-sand transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
                        >
                            <Icon size={16} strokeWidth={1.5} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="relative z-10 mt-12 flex items-center justify-center gap-3">
                <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/40" />
                <span className="h-1 w-1 rotate-45 bg-gold-500/60" />
                <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/40" />
            </div>

            <p className="relative z-10 mt-6 text-center text-xs font-light tracking-[0.2em] text-sand/70 uppercase">
                © 2026 Lumiere · Crafted with elegance
            </p>
        </footer>
    );
}
