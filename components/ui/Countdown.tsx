"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
    const calculateTimeLeft = (): TimeLeft => {
        const difference =
            new Date(targetDate).getTime() - new Date().getTime();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    };

    const [mounted, setMounted] = useState(false);

    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setMounted(true);

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return null;
    }

    const items = [
        {
            label: "Days",
            value: timeLeft.days,
        },
        {
            label: "Hours",
            value: timeLeft.hours,
        },
        {
            label: "Minutes",
            value: timeLeft.minutes,
        },
        {
            label: "Seconds",
            value: timeLeft.seconds,
        },
    ];

    return (
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
                >
                    <h3 className="text-4xl font-bold text-amber-400">
                        {String(item.value).padStart(2, "0")}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}