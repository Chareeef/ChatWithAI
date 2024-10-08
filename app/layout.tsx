import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./components/Providers";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "highlight.js/styles/tomorrow-night-blue.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadim AI",
  description: "AI Chatbot for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <link
          rel="icon"
          href="/android-chrome?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
