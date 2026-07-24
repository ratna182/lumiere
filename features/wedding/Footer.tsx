"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";


export function Footer() {

    return (
        <footer className="relative overflow-hidden bg-black py-20">


            <div
                className="
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-amber-400/10
          blur-[160px]
        "
            />


            <motion.div

                initial={{
                    opacity: 0,
                    y: 40,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                viewport={{
                    once: true,
                }}

                transition={{
                    duration: 0.8,
                }}

                className="
          relative
          z-10
          mx-auto
          max-w-3xl
          px-6
          text-center
        "

            >

                <p
                    className="
            text-sm
            uppercase
            tracking-[0.5em]
            text-amber-400
          "
                >
                    Thank You
                </p>


                <h2
                    className="
            heading-font
            mt-8
            text-6xl
            text-white
          "
                >
                    {wedding.bride.firstName}
                    <span className="mx-4 text-amber-400">
                        &
                    </span>
                    {wedding.groom.firstName}
                </h2>


                <p
                    className="
            mt-8
            text-neutral-400
          "
                >
                    Terima kasih atas doa dan kehadiran
                    Anda di hari bahagia kami.
                </p>


                <div
                    className="
            mx-auto
            mt-12
            h-px
            w-32
            bg-gradient-to-r
            from-transparent
            via-amber-400
            to-transparent
          "
                />


                <p
                    className="
            mt-8
            text-sm
            text-neutral-500
          "
                >
                    © 2027 Lumiere Wedding Invitation
                </p>


            </motion.div>


        </footer>
    );
}