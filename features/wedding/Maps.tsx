"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";


export function Maps() {

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


            <div
                className="
          relative
          z-10
          mx-auto
          max-w-5xl
          px-6
        "
            >


                <SectionTitle
                    subtitle="Location"
                    title="Find Us"
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

                    <GlassCard className="overflow-hidden p-6">


                        <div
                            className="
                aspect-video
                overflow-hidden
                rounded-3xl
                border
                border-white/10
              "
                        >

                            <iframe
                                src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="
                  h-full
                  w-full
                  border-0
                "
                                loading="lazy"
                            />

                        </div>


                        <div className="p-6 text-center">


                            <h3
                                className="
                  text-2xl
                  font-semibold
                  text-white
                "
                            >
                                {wedding.event.location}
                            </h3>


                            <a
                                href={wedding.event.maps}
                                target="_blank"
                                className="
                  mt-8
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
                                Open Google Maps
                            </a>


                        </div>


                    </GlassCard>


                </motion.div>


            </div>


        </section>
    );
}