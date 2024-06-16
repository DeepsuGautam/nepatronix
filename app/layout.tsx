import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// making navbar
import Nav from "@/Components/NavBar/Nav";
import Footer from "@/Components/Footer/Footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NepaTronix",
  description: "Nepal's leading IoT and Robotics Company",
  icons: {
    icon: "/logo2.png", // Add your logo here
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
