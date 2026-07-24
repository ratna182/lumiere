"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Wifi,
    BatteryFull,
} from "lucide-react";


const pages = [
    {
        type: "cover",
        title: "The Wedding Of",
        name: "Ratna",
        second: "Andi",
        button: "Open Invitation",
    },
    {
        type: "couple",
        title: "Bride & Groom",
        name: "Ratna Pratiwi",
        second: "Andi Saputra",
        button: "Our Story",
    },
    {
        type: "gallery",
        title: "Our Memories",
        name: "Beautiful",
        second: "Moments",
        button: "View Gallery",
    },
    {
        type: "event",
        title: "Wedding Event",
        name: "Saturday",
        second: "20 June 2027",
        button: "See Location",
    },
    {
        type: "gift",
        title: "Wedding Gift",
        name: "Digital Gift",
        second: "For Couple",
        button: "Send Gift",
    },
    {
        type: "rsvp",
        title: "Confirmation",
        name: "Will You",
        second: "Attend?",
        button: "RSVP Now",
    },
];


export function PhonePreview() {

    const [index, setIndex] = useState(0);


    useEffect(() => {

        const timer = setInterval(() => {

            setIndex((prev) =>
                (prev + 1) % pages.length
            );

        }, 3500);


        return () => clearInterval(timer);

    }, []);



    const page = pages[index];


    return (

        <div className="relative">


            {/* GOLD GLOW */}

            <div className="absolute inset-0 rounded-[60px] bg-amber-400/30 blur-[120px]" />



            {/* PHONE FRAME */}

            <div
                className="
        relative
        h-[720px]
        w-[360px]
        rounded-[55px]
        border
        border-white/20
        bg-neutral-900
        p-3
        shadow-[0_30px_80px_rgba(0,0,0,.8)]
        "
            >



                {/* SCREEN */}

                <div
                    className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[45px]
          bg-black
          "
                >



                    {/* STATUS BAR */}

                    <div
                        className="
            flex
            items-center
            justify-between
            px-7
            pt-5
            text-xs
            text-white
            "
                    >

                        <span>
                            09:41
                        </span>


                        {/* Dynamic Island */}

                        <div
                            className="
              absolute
              left-1/2
              top-4
              -translate-x-1/2
              rounded-full
              bg-black
              px-8
              py-3
              "
                        />


                        <div className="flex gap-2">

                            <Wifi size={14} />

                            <BatteryFull size={16} />

                        </div>


                    </div>




                    {/* CONTENT */}


                    <div
                        className="
            flex
            flex-1
            items-center
            justify-center
            px-8
            "
                    >


                        <AnimatePresence mode="wait">


                            <motion.div

                                key={index}

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}

                                exit={{
                                    opacity: 0,
                                    y: -40
                                }}

                                transition={{
                                    duration: .6
                                }}

                                className="
                text-center
                "
                            >



                                <p
                                    className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-amber-300
                  "
                                >
                                    {page.title}
                                </p>



                                <h2
                                    className="
                  heading-font
                  mt-8
                  text-5xl
                  text-white
                  "
                                >
                                    {page.name}
                                </h2>



                                <p className="my-5 text-neutral-500">
                                    &
                                </p>



                                <h2
                                    className="
                  heading-font
                  text-5xl
                  text-white
                  "
                                >
                                    {page.second}
                                </h2>



                                <button
                                    className="
                  mt-12
                  rounded-full
                  bg-amber-400
                  px-7
                  py-3
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                  "
                                >
                                    {page.button}
                                </button>



                            </motion.div>



                        </AnimatePresence>



                    </div>





                    {/* HOME INDICATOR */}

                    <div
                        className="
            mx-auto
            mb-5
            h-1
            w-32
            rounded-full
            bg-white/40
            "
                    />



                </div>


            </div>


        </div>

    );

}