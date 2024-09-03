import type { Metadata } from "next";


import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-jetBrainsMono",
  weight: ["200","300","500"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Pilipili",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
