import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "google docs clone",
  description: "this is to only learn next and some functionalities"
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3371ff",
          fontSize: "16px"
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}