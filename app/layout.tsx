import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Iku Bio | Biotechnology Solutions",
  description: "Innovative biotechnology solutions by Iku Bio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-black`}>{children}</body>
    </html>
  )
}
