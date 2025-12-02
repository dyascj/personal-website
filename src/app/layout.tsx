import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-white dark:selection:text-neutral-900 text-gray-900 dark:text-white/90 bg-white dark:bg-neutral-950 font-inter transition-colors duration-300`}
        style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial' }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
