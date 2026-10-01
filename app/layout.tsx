import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
