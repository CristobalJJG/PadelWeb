import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta title="Padel Web" />
        <meta
          name="authors"
          content="José Manuel Illera Rodríguez, Aileen Padrón Torres y Cristóbal José Jiménez Gómez"
        />
        <meta
          name="description"
          content="Proporcionar información del club, lo que ofrece. Una vía para que los usarios puedan apuntarse a partidos del mismo nivel en el que estén."
        />
        <meta
          property="og:image"
          content="data:image/jpeg;base64,https://cdn.pixabay.com/photo/2021/06/04/06/54/racket-6308994_1280.jpg"
        />
        <meta
          property="og:description"
          content="Proporcionar información del club, lo que ofrece. Una vía para que los usarios puedan apuntarse a partidos del mismo nivel en el que estén."
        />
        <meta property="og:title" content="Padel Web" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
