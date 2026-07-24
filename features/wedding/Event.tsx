"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";


export function Event() {

    return (
        <section className="relative overflow-hidden bg-[#070707] py-24">


            <div className="
        absolute
        left-1/2
        top-0
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-amber-400/10
        blur-[180px]
      " />


            <div className="
        relative
        z-10
        mx-auto
        max-w-5xl
        px-6
      ">


                <SectionTitle
                    subtitle="Save The Date"
                    title="Wedding Event"
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
                            {wedding.event.day}
                        </p>


                        <h2 className="
              heading-font
              mt-5
              text-6xl
              text-white
            ">
                            {wedding.event.date}
                        </h2>


                        <div className="
              mx-auto
              my-8
              h-px
              w-32
              bg-gradient-to-r
              from-transparent
              via-amber-400
              to-transparent
            " />


                        <p className="
              text-3xl
              text-white
            ">
                            {wedding.event.time}
                        </p>


                        <p className="
              mt-8
              text-xl
              text-neutral-300
            ">
                            {wedding.event.location}
                        </p>


                        <a
                            href={wedding.event.maps}
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
                            Open Maps
                        </a>


                    </GlassCard>


                </motion.div>


            </div>


        </section>
    );
}