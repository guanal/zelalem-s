import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Zelalem - Information Systems Graduate & Frontend Developer",
  description:
    "Professional portfolio of Zelalem, Information Systems graduate from Bahir Dar University specializing in frontend development, UI design, and AI-powered solutions.",
  keywords:
    "Zelalem, Information Systems, Frontend Developer, UI Design, Bahir Dar University, Portfolio, React, Next.js",
  authors: [{ name: "Zelalem" }],
  creator: "Zelalem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zelalem-portfolio.vercel.app",
    title: "Zelalem - Information Systems Graduate & Frontend Developer",
    description: "Professional portfolio showcasing innovative projects and technical expertise",
    siteName: "Zelalem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelalem - Information Systems Graduate & Frontend Developer",
    description: "Professional portfolio showcasing innovative projects and technical expertise",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="zelalem-portfolio-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
