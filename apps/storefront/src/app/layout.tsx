import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Red Window Art | Chinese Heritage Paper-Cut Art for Home & Gifting",
  description:
    "Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.",
  openGraph: {
    title: "Red Window Art | Chinese Heritage Paper-Cut Art for Home & Gifting",
    description:
      "Handcrafted paper-cut artworks inspired by Yuxian tradition — made for modern homes, meaningful gifts, and cultural collectors.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}