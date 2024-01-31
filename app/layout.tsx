import { Noto_Sans_KR, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const notoSansKr = Noto_Sans_KR({
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
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
