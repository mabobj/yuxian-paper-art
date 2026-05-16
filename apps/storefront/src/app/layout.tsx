import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Red Window Art | Chinese Heritage Paper-Cut Art for Home & Gifting",
  description:
    "Handcrafted Yuxian paper-cut artworks for modern homes, meaningful gifts, and blessings that carry cultural stories.",
  openGraph: {
    title: "Red Window Art | Chinese Heritage Paper-Cut Art for Home & Gifting",
    description:
      "Handcrafted Yuxian paper-cut artworks for modern homes, meaningful gifts, and blessings that carry cultural stories.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}