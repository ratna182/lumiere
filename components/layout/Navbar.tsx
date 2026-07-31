"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const menus = [
    {
        name: "Templates",
        href: "#templates",
    },
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Experience",
        href: "#demo",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "FAQ",
        href: "#faq",
    },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6"
        >
            <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-gold-500/20 bg-[#0d0b08]/70 px-5 py-3.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl sm:px-8 sm:py-4">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <span className="relative flex h-7 w-7 items-center justify-center">
                        <span className="absolute inset-0 rotate-45 rounded-[7px] border border-gold-500/60 transition-transform duration-500 group-hover:rotate-[135deg]" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                    </span>

                    <span className="font-caps text-base font-semibold text-ivory transition-colors duration-300 group-hover:text-gold-200">
                        LUMIERE
                    </span>
                </Link>

                {/* Menu */}
                <nav className="hidden items-center gap-9 lg:flex">
                    {menus.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="group relative text-sm font-light tracking-wide text-ivory-dim transition duration-300 hover:text-ivory"
                        >
                            {item.name}

                            <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#pricing"
                    className="btn-gold hidden rounded-full px-7 py-3 font-caps text-[0.62rem] font-semibold uppercase sm:inline-flex"
                >
                    Order Now
                </a>
            </div>
        </motion.header>
    );
}
