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
        name: "Demo",
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
            transition={{ duration: 0.7 }}
            className="fixed inset-x-0 top-6 z-50 px-6"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-8 py-5 backdrop-blur-2xl">

                {/* Logo */}

                <Link href="/" className="group flex items-center gap-3">

                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,.9)]" />

                    <h1 className="heading-font text-3xl text-white transition duration-300 group-hover:text-amber-300">
                        Lumiere
                    </h1>

                </Link>

                {/* Menu */}

                <nav className="hidden items-center gap-10 lg:flex">

                    {menus.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="group relative text-sm font-medium text-neutral-300 transition duration-300 hover:text-white"
                        >
                            {item.name}

                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />

                        </a>
                    ))}

                </nav>

                {/* Button */}

                <button className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-black shadow-lg shadow-amber-500/20 transition duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-amber-400/40">
                    Order Now
                </button>

            </div>
        </motion.header>
    );
}