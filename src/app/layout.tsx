import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-cormorant",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Happy 38th Anniversary — De King & De Queen 👑",
  description: "A celebration of 38 years of love and building a kingdom together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body className="bg-[#0a0612] text-[#fdf6e3] antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
