"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";


export function RSVP() {

    const message = encodeURIComponent(
        `Halo ${wedding.bride.firstName} & ${wedding.groom.firstName}, saya ingin mengkonfirmasi kehadiran di acara pernikahan kalian.`
    );


    const whatsapp =
        `https://wa.me/${wedding.rsvp.whatsapp}?text=${message}`;


    return (
        <section className="relative overflow-hidden bg-[#070707] py-24">


            <div
                className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-amber-400/10
          blur-[180px]
        "
            />


            <div className="
        relative
        z-10
        mx-auto
        max-w-3xl
        px-6
      ">


                <SectionTitle
                    subtitle="Confirmation"
                    title="RSVP"
                />


                <motion.div

                    initial={{
                        opacity: 0,
                        y: 50,
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

                >

                    <GlassCard className="p-10 text-center">


                        <p className="
              leading-8
              text-neutral-400
            ">
                            Mohon konfirmasi kehadiran Anda
                            agar kami dapat mempersiapkan acara
                            dengan lebih baik.
                        </p>


                        <a
                            href={whatsapp}
                            target="_blank"
                            className="
                mt-10
                inline-flex
                rounded-full
                bg-amber-400
                px-10
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
                hover:bg-amber-300
              "
                        >
                            Confirm via WhatsApp
                        </a>


                    </GlassCard>


                </motion.div>


            </div>


        </section>
    );
}