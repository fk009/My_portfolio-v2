import type { Metadata } from "next";

import { Outfit, Playfair_Display } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A bold and dynamic creative portfolio",
  openGraph: {
    images: [
      {
        url: "https://fk009.github.io/My_portfolio-v2/portfolio_OGP.jpg",
        width: 1737,
        height: 905,
        alt: "Portfolio OGP Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${playfair.variable} h-full relative antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
