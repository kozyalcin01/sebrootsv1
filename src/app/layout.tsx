import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Sobroots — Carry Your Roots",
  description:
    "Köklerinden güç alan, şehirde özgürce yürüyen kadınlar için el yapımı deri çantalar. Sınırlı üretim, zamansız tasarım.",
  keywords: ["deri çanta", "el yapımı çanta", "lüks çanta", "sobroots", "kadın çantası"],
  openGraph: {
    title: "Sobroots — Carry Your Roots",
    description: "El yapımı deri çantalar. Sınırlı üretim, zamansız tasarım.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
