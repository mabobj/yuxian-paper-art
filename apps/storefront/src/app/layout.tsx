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
  title: "Yuxian Paper Art | Handcrafted Chinese Paper-Cut Heritage",
  description:
    "Discover handcrafted Yuxian paper-cut artworks for meaningful gifts and modern interiors.",
  openGraph: {
    title: "Yuxian Paper Art | Handcrafted Chinese Paper-Cut Heritage",
    description:
      "Discover handcrafted Yuxian paper-cut artworks for meaningful gifts and modern interiors.",
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