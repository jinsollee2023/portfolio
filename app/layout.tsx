import "./globals.css";
import Head from "./head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { notoSansMono } from "./font";

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
