"use client";

import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";


const stories = [
    {
        year: wedding.story.firstMeet,
        title: "First Meet",
        description:
            "Awal pertemuan yang menjadi langkah pertama dari perjalanan panjang kami.",
    },
    {
        year: wedding.story.engagement,
        title: "Engagement",
        description:
            "Sebuah komitmen untuk melangkah bersama menuju masa depan.",
    },
    {
        year: wedding.story.wedding,
        title: "Wedding Day",
        description:
            "Hari bahagia dimana kami mengikat janji untuk selamanya.",
    },
];


export function Story() {
    return (
        <section className="relative overflow-hidden bg-[#070707] py-24">

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[180px]" />


            <div className="relative z-10 mx-auto max-w-5xl px-6">

                <SectionTitle
                    subtitle="Our Journey"
                    title="Our Love Story"
                />


                <div className="relative">

                    {/* Timeline Line */}

                    <div className="
            absolute
            left-6
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-amber-400
            via-amber-400/40
            to-transparent
            md:left-1/2
          " />


                    <div className="space-y-16">


                        {stories.map((story, index) => (

                            <motion.div
                                key={story.year}
                                initial={{
                                    opacity: 0,
                                    y: 60,
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
                                    delay: index * 0.2,
                                }}
                                className={`
                  relative
                  flex
                  items-center
                  md:w-1/2
                  ${index % 2 === 0
                                        ? "md:mr-auto"
                                        : "md:ml-auto"
                                    }
                `}
                            >

                                {/* Dot */}

                                <div className="
                  absolute
                  -left-[2px]
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-amber-400
                  bg-black
                  text-amber-400
                  md:left-auto
                  md:-right-6
                ">

                                    ✦

                                </div>


                                <GlassCard className="ml-16 w-full p-8 md:ml-0">

                                    <p className="
                    text-sm
                    uppercase
                    tracking-[0.4em]
                    text-amber-400
                  ">
                                        {story.year}
                                    </p>


                                    <h3 className="
                    heading-font
                    mt-4
                    text-4xl
                    text-white
                  ">
                                        {story.title}
                                    </h3>


                                    <p className="
                    mt-5
                    leading-8
                    text-neutral-400
                  ">
                                        {story.description}
                                    </p>


                                </GlassCard>


                            </motion.div>

                        ))}


                    </div>

                </div>


            </div>


        </section>
    );
}