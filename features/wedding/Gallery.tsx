"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";


export function Gallery() {

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
        max-w-7xl
        px-6
      ">


                <SectionTitle
                    subtitle="Our Memories"
                    title="Gallery"
                />


                <div className="
          grid
          grid-cols-2
          gap-5
          md:grid-cols-3
        ">


                    {wedding.gallery.map(
                        (image, index) => (

                            <motion.div

                                key={index}

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
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}

                                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                "

                            >

                                <Image

                                    src={image}

                                    alt={`Gallery ${index + 1}`}

                                    fill

                                    className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "

                                />


                                <div className="
                  absolute
                  inset-0
                  bg-black/0
                  transition
                  group-hover:bg-black/30
                " />


                            </motion.div>

                        )
                    )}


                </div>


            </div>


        </section>
    );
}