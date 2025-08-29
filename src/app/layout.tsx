import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cjdyas.design"),
  title: "Charles J. (CJ) Dyas - Product Designer",
  description: "Product & UI/UX Designer with 4+ years of experience focusing on UX, web design, and design systems to create user-centered products that serve over 2 million users annually.",
  openGraph: {
    type: "website",
    title: "Charles J. (CJ) Dyas",
    description: "Product & UI/UX Designer with 4+ years of experience focusing on UX, web design, and design systems to create user-centered products that serve over 2 million users annually.",
    images: ["/og-default.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased selection:bg-white selection:text-neutral-900 text-white/90 bg-neutral-950 font-inter`}
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial' }}
      >
        {children}
      </body>
    </html>
  );
}
