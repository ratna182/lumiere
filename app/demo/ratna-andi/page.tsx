"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";

import { InvitationGate } from "@/features/wedding/InvitationGate";

import { Cover } from "@/features/wedding/Cover";
import { Couple } from "@/features/wedding/Couple";
import { Story } from "@/features/wedding/Story";
import { Event } from "@/features/wedding/Event";
import { Gallery } from "@/features/wedding/Gallery";
import { Gift } from "@/features/wedding/Gift";
import { RSVP } from "@/features/wedding/RSVP";
import { Maps } from "@/features/wedding/Maps";
import { Footer } from "@/features/wedding/Footer";

import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { FloatingFlowers } from "@/components/ui/FloatingFlowers";

export default function WeddingDemo() {
    const [open, setOpen] = useState(false);

    return (
        <MotionConfig reducedMotion="user">
            <main className="relative min-h-screen bg-[#0a0908]">

                {/* Opening Invitation */}
                <InvitationGate
                    open={open}
                    onOpen={() => setOpen(true)}
                />

                {open && (
                    <>
                        {/* Background Music */}
                        <AudioPlayer
                            src="/audio/music.mp3"
                            autoPlay
                        />

                        {/* Decoration */}
                        <FloatingFlowers />

                        {/* Wedding Sections */}

                        <Cover />

                        <Couple />

                        <Story />

                        <Event />

                        <Gallery />

                        <Gift />

                        <RSVP />

                        <Maps />

                        <Footer />

                    </>
                )}

            </main>
        </MotionConfig>
    );
}
