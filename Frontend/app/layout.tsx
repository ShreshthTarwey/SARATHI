import type React from "react";
import type { Metadata } from "next";
import { Fredoka as Fredoka_One, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Navigation from "@/components/navigation";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

// Import the voice control components
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

// This is the single, correct RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${fredokaOne.variable} ${poppins.variable} antialiased`}
      >
        <AuthProvider>
          {/* 1. VoiceControlProvider wraps everything inside the AuthProvider */}
          <VoiceControlProvider>
            {/* Your team's existing navigation */}
            <Navigation />

            {/* Your team's existing main content area */}
            <main className="pt-16 relative z-0">
              <Suspense fallback={null}>{children}</Suspense>
            </main>
            
            {/* 2. The floating microphone button is placed here */}
            {/* It's inside the Provider but outside the main content flow */}
            <GlobalVoiceControl />

          </VoiceControlProvider>
        </AuthProvider>

        <Analytics />
      </body>
    </html>
  );
}
