import type { Metadata } from "next";
import { Roboto, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ott-adda Admin",
  description: "Admin panel for ott-adda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${roboto.variable} ${poppins.variable} ${geistMono.variable} bg-background text-foreground flex min-h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
