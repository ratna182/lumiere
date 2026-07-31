import { MotionRoot } from "@/components/layout/MotionRoot";
import { Hero } from "@/features/landing/Hero";
import { Templates } from "@/features/landing/Templates";
import { Features } from "@/features/landing/Features";
import { Demo } from "@/features/landing/Demo";
import { Pricing } from "@/features/landing/Pricing";
import { FAQ } from "@/features/landing/FAQ";
import { Footer } from "@/features/landing/Footer";

export default function Home() {
    return (
        <MotionRoot>
            <main className="relative min-h-screen overflow-hidden bg-[#0a0908]">
                <Hero />

                <Templates />

                <Features />

                <Demo />

                <Pricing />

                <FAQ />

                <Footer />
            </main>
        </MotionRoot>
    );
}
