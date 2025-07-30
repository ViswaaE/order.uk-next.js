// import { Geist, Geist_Mono } from "next/font/google";
import Topbar from "@/components/topbar";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from 'next/head';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Custom Home Title</title>
      </Head>
      <body className="mx-10">
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
