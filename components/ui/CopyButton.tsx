"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
    text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
        >
            {copied ? (
                <>
                    <Check size={18} />
                    Copied
                </>
            ) : (
                <>
                    <Copy size={18} />
                    Copy
                </>
            )}
        </button>
    );
}