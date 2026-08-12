import type { Metadata } from "next";
import { Righteous, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const righteous = Righteous({
  variable: "--font-righteous",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Amplichain — Twoja sieć muzycznych możliwości",
  description: "Marketplace i społeczność dla branży muzycznej: sprzedawaj sprzęt, oferuj usługi, znajdź kontakty. Najniższe prowizje, weryfikowani sprzedawcy, bezpieczne płatności.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${righteous.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
