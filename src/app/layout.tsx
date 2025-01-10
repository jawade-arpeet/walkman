import React from "react";

import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";

import "@/styles/globals.css";
import cn from "@/utils/cn";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walkman",
  description: "Your personalized music player",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased bg-stone-950 text-stone-50",
          hostGrotesk.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
