import { Montserrat } from "next/font/google";
import "@/styles/portfolio.css";
import React from "react";
import { Navbar } from "@/app/(portfolio)/_components/navbar/navbar";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
