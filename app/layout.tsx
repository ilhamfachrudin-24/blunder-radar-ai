import "./globals.css";

import { AnalysisProvider } from "@/context/AnalysisContext";

import type { Metadata } from "next";


export const metadata: Metadata = {

  title: "🔥 Blunder Radar AI",

  description:
    "AI-powered Solana intelligence platform for token analysis, smart money tracking, security analysis, and Web3 research.",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body suppressHydrationWarning>


        <AnalysisProvider>

          {children}

        </AnalysisProvider>


      </body>


    </html>

  );

}
