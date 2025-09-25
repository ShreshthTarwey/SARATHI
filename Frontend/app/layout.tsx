import type React from "react";
import type { Metadata } from "next";
import { Fredoka as Fredoka_One, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Navigation from "@/components/navigation";
import TawkWidget from "@/components/website-widgets";
import "./globals.css";

// 1. ADDED: Import your voice control components
import { VoiceControlProvider } from "@/context/VoiceControlContext";
import GlobalVoiceControl from "@/components/GlobalVoiceControl";

const fredokaOne = Fredoka_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SARATHI - Inclusive Learning Platform",
  description:
    "A vibrant, playful platform for inclusive communication and learning",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Server-side route protection handled by Next middleware
  return (
    <html lang="en">
      <body
        className={`font-sans ${fredokaOne.variable} ${poppins.variable} antialiased`}
      >
        {/* 2. WRAPPED: The VoiceControlProvider now wraps the main application content */}
        <VoiceControlProvider>
          {/* Your team's existing code is untouched inside the provider */}
          <Navigation />

          <main className="pt-16 relative z-0">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          
          {/* 3. ADDED: The floating microphone button, which will appear on all pages */}
          <GlobalVoiceControl />
        </VoiceControlProvider>
        
        {/* These components are outside the voice provider, which is perfectly fine */}
        <Analytics />
        <TawkWidget />
      </body>
    </html>
  );
} // <-- THIS IS THE MISSING CLOSING BRACE