import "./globals.css";
import {AnalysisProvider} from "@/context/AnalysisContext";

export const metadata = {
  title: "Blunder Radar AI",
  description:
    "AI-powered Solana memecoin analysis and risk scanner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

export const metadata = {
  title: "Blunder Radar AI",
  description:
    "AI-powered Solana memecoin analysis platform.",
  icons: {
    icon: "/logo.svg",
  },
};
