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
            className="btn-gold inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-caps text-[0.7rem] font-semibold uppercase tracking-[0.24em]"
        >
            {copied ? (
                <>
                    <Check size={16} />
                    Copied
                </>
            ) : (
                <>
                    <Copy size={16} />
                    Copy Number
                </>
            )}
        </button>
    );
}
