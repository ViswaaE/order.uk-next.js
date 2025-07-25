// import { Geist, Geist_Mono } from "next/font/google";
import Topbar from "@/components/topbar";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
