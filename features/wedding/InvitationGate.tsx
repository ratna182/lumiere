"use client";

import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "@/data/wedding";

interface InvitationGateProps {
    open: boolean;
    onOpen: () => void;
}

export function InvitationGate({
    open,
    onOpen,
}: InvitationGateProps) {

    return (
        <AnimatePresence>

            {!open && (

                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
            fixed
            inset-0
            z-[9998]
            flex
            items-center
            justify-center
            bg-black/90
            backdrop-blur-xl
          "
                >

                    <motion.div
                        initial={{
                            scale: 0.9,
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
              mx-6
              w-full
              max-w-xl
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              p-12
              text-center
              backdrop-blur-2xl
            "
                    >

                        <p className="
              text-sm
              uppercase
              tracking-[0.45em]
              text-amber-400
            ">
                            The Wedding Of
                        </p>


                        <h1 className="
              heading-font
              mt-8
              text-6xl
              text-white
            ">
                            {wedding.bride.firstName}
                        </h1>


                        <h2 className="
              heading-font
              text-5xl
              text-amber-400
            ">
                            &
                        </h2>


                        <h1 className="
              heading-font
              text-6xl
              text-white
            ">
                            {wedding.groom.firstName}
                        </h1>


                        <p className="
              mt-10
              text-neutral-400
            ">
                            Kepada Yth.
                        </p>


                        <div className="
              mt-2
              rounded-full
              border
              border-white/10
              bg-black/40
              py-4
              text-white
            ">
                            Bapak / Ibu / Saudara(i)
                        </div>


                        <button
                            onClick={onOpen}
                            className="
                mt-10
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
                            Open Invitation
                        </button>


                    </motion.div>


                </motion.div>

            )}

        </AnimatePresence>
    );
}