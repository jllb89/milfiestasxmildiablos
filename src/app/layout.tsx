// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Mil Diablos Patrocinios",
  description: "Haz un trato con el diablo. Aplica para que Mil Diablos patrocine tu evento o fiesta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
