import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GiftListProvider } from "@/contexts/giftList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jingle Bells",
  description: "Faça suas listas de presentes de Natal!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>

      {/* LAYOUT CORRIGIDO */}
      <body className="flex flex-col min-h-screen bg-background text-foreground">

        <Header />

        {/* ESSE MAIN AQUI É A PARTE QUE RESOLVE TUDO */}
        <main className="flex-grow">
          <GiftListProvider>{children}</GiftListProvider>
        </main>

        <Footer />
      </body>
    </html>
  );
}
