"use client";

import { MotionConfig } from "framer-motion";

/**
 * Applies framer-motion's reduced-motion preference across all
 * children, respecting the user's OS-level motion settings.
 */
export function MotionRoot({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MotionConfig reducedMotion="user">
            {children}
        </MotionConfig>
    );
}
