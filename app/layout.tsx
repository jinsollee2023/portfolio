// import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={robotoMono.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
