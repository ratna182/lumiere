"use client";

import { motion } from "framer-motion";
import { Music2, Pause } from "lucide-react";

interface FloatingMusicProps {
    playing: boolean;
    onToggle: () => void;
}


export function FloatingMusic({
    playing,
    onToggle,
}: FloatingMusicProps) {

    return (
        <motion.button

            onClick={onToggle}

            animate={
                playing
                    ? {
                        rotate: 360,
                    }
                    : {
                        rotate: 0,
                    }
            }

            transition={{
                duration: 8,
                repeat: playing ? Infinity : 0,
                ease: "linear",
            }}

            className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-black/60
        text-amber-400
        shadow-2xl
        backdrop-blur-xl
        transition
        hover:scale-110
      "

        >

            <span
                className="
          absolute
          inset-0
          rounded-full
          bg-amber-400/20
          blur-xl
        "
            />


            <div className="relative z-10">

                {playing ? (
                    <Pause size={28} />
                ) : (
                    <Music2 size={28} />
                )}

            </div>


        </motion.button>
    );
}