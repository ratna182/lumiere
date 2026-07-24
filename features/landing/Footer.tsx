"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-16">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">

                <div>
                    <h2 className="heading-font text-3xl text-white">
                        Lumiere
                    </h2>

                    <p className="mt-2 text-neutral-400">
                        Premium Digital Wedding Invitation
                    </p>
                </div>

                <div className="flex gap-8 text-neutral-400">

                    <Link href="#templates">
                        Templates
                    </Link>

                    <Link href="#features">
                        Features
                    </Link>

                    <Link href="#demo">
                        Demo
                    </Link>

                    <Link href="#pricing">
                        Pricing
                    </Link>

                    <Link href="#faq">
                        FAQ
                    </Link>

                </div>

            </div>

            <div className="mt-10 text-center text-sm text-neutral-500">
                © 2026 Lumiere. Crafted with elegance.
            </div>
        </footer>
    );
}