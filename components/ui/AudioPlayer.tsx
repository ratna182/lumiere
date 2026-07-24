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
                className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/60
          text-amber-400
          shadow-xl
          backdrop-blur-xl
          transition
          hover:scale-110
        "
            >

                {playing ? (
                    <Pause size={22} />
                ) : (
                    <Play size={22} />
                )}

            </button>

        </>
    );
}