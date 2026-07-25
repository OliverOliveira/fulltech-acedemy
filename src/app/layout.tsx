import type { Metadata } from "next";
import { Inter, Caveat, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const caveat = Caveat({subsets:['latin'],variable:'--font-caveat',weight:['400','700']});

const manrope = Manrope({subsets:['latin'],variable:'--font-manrope',weight:['400','700']});

export const metadata: Metadata = {
  title: "FullTech Academy",
  description: "Cursos de desenvolvimento web FullStack com Next.js, React, TypeScript, TailwindCSS e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full antialiased">
      <body
        className={cn(
          "min-h-screen flex flex-col px-2",
          inter.variable,
          caveat.variable,
          manrope.variable,
          "font-sans"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
