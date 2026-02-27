import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins, Roboto_Slab} from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"]
});

const robotoSlab = Roboto_Slab({
  variable: "--font-robotoSlab",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "TechPlato,Inc. -AI Innovation and Industry Expertise",
  description: "TechPlato — Innovative technology solutions and products to accelerate your business. Explore our services, products, and client success stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab
          .variable} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
