"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { CopyButton } from "@/components/ui/CopyButton";


export function Gift() {

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
                    subtitle="Wedding Gift"
                    title="Send Love"
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
              text-sm
              uppercase
              tracking-[0.4em]
              text-amber-400
            ">
                            {wedding.gift.bank}
                        </p>


                        <h2 className="
              mt-8
              text-4xl
              font-bold
              text-white
            ">
                            {wedding.gift.accountNumber}
                        </h2>


                        <p className="
              mt-5
              text-neutral-400
            ">
                            a.n
                        </p>


                        <p className="
              mt-2
              text-xl
              text-white
            ">
                            {wedding.gift.accountName}
                        </p>


                        <div className="mt-8 flex justify-center">

                            <CopyButton
                                text={wedding.gift.accountNumber}
                            />

                        </div>


                    </GlassCard>


                </motion.div>


            </div>


        </section>
    );
}