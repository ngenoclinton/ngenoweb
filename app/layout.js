import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Clinton's Portfolio | Web Developer",
  description: "A passionate Web Developer building modern, scalable web apps",
  icons: {
    icon: [
      { url: "/about/profile_photo.jpeg" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png/jpg" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png/jpg" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
