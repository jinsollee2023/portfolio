// import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={notoSansMono.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
