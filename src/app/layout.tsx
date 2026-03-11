import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ho Cong Toan — Software Engineer",
  description:
    "Software Engineer specializing in microservice architectures, machine learning pipelines, and cloud-native infrastructure. Building with Java, Go, Python, and TypeScript.",
  keywords: [
    "Ho Cong Toan",
    "toanehihi",
    "Software Engineer",
    "Microservices",
    "Machine Learning",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ho Cong Toan" }],
  openGraph: {
    title: "Ho Cong Toan — Software Engineer",
    description:
      "Microservice architectures, ML pipelines, cloud-native infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
