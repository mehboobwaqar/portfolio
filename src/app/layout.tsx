import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehboob Waqar | Flutter Developer & Mobile Software Engineer",
  description:
    "Portfolio of Mehboob Waqar — Mobile Software Engineer specializing in high-scale Flutter applications, AI/ML on-device computer vision, and IoT hardware ecosystems. 5+ apps on App Store & Play Store.",
  keywords: [
    "Mehboob Waqar",
    "Flutter Developer",
    "Mobile Software Engineer",
    "iOS Developer",
    "Android Developer",
    "IoT",
    "AI/ML",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Mehboob Waqar" }],
  openGraph: {
    title: "Mehboob Waqar | Flutter Developer & Mobile Software Engineer",
    description:
      "5+ production apps on App Store & Google Play Store. Expert in Flutter, AI/ML, IoT, and scalable mobile architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
