import type React from "react";
import type { Metadata } from "next";
import { Fredoka as Fredoka_One, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Navigation from "@/components/navigation";
import "./globals.css";

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
  // Client-side auth guard: if no token cookie, redirect to loginF app
  // This is a light-weight guard to avoid showing protected pages to logged out users
  if (typeof window !== "undefined") {
    try {
      const hasToken = document.cookie.split(";").some((c) => c.trim().startsWith("token="));
      if (!hasToken && window.location.pathname !== "/auth") {
        window.location.href = "http://localhost:5173/signin";
      }
    } catch (err) {
      // no-op
    }
  }
  return (
    <html lang="en">
      <body
        className={`font-sans ${fredokaOne.variable} ${poppins.variable} antialiased`}
      >
        {/* Navbar (fixed at top) */}
        <Navigation />

        {/* Content with padding to prevent overlap */}
        <main className="pt-16 relative z-0">
          <Suspense fallback={null}>{children}</Suspense>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
