import "./globals.css";

import { AnalysisProvider } from "@/context/AnalysisContext";


export const metadata = {

  title: "🔥 Blunder Radar AI",

  description:
    "AI-powered Solana intelligence platform for token analysis, smart money tracking, and Web3 research.",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body>


        <AnalysisProvider>

          {children}

        </AnalysisProvider>


      </body>


    </html>

  );

}
