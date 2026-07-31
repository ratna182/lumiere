"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

interface AudioPlayerProps {
    src: string;
    autoPlay?: boolean;
}

export function AudioPlayer({
    src,
    autoPlay = false,
}: AudioPlayerProps) {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [playing, setPlaying] = useState(false);

    useEffect(() => {

        if (autoPlay && audioRef.current) {

            audioRef.current
                .play()
                .then(() => {
                    setPlaying(true);
                })
                .catch(() => {
                    console.log(
                        "Browser blocked autoplay"
                    );
                });

        }

    }, [autoPlay]);

    const toggleMusic = async () => {

        if (!audioRef.current) return;

        if (playing) {

            audioRef.current.pause();
            setPlaying(false);

        } else {

            await audioRef.current.play();
            setPlaying(true);

        }

    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
            >
                <source
                    src={src}
                    type="audio/mpeg"
                />
            </audio>

            <button
                onClick={toggleMusic}
                aria-label="Toggle music"
                className="
                    group
                    fixed
                    bottom-6
                    right-6
                    z-[9999]
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold-500/40
                    bg-[#14100b]/80
                    text-gold-300
                    shadow-[0_18px_40px_-12px_rgba(212,175,55,0.35)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-gold-400/70
                "
            >
                <span
                    className={`
                        absolute
                        inset-0
                        rounded-full
                        bg-gold-500/15
                        blur-lg
                        transition-opacity
                        duration-500
                        ${playing ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                />

                <span
                    className={`
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-dashed
                        border-gold-500/30
                        ${playing ? "animate-spin" : ""}
                    `}
                    style={playing ? { animationDuration: "12s" } : undefined}
                />

                <span className="relative z-10 text-gold-300">
                    {playing ? (
                        <Pause size={20} />
                    ) : (
                        <Play size={20} />
                    )}
                </span>
            </button>
        </>
    );
}
