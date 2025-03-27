// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
