import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavBar } from './components/navbar'
import { ThemeProvider } from './components/theme-provider'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashley Luu - Personal Website',
  description: 'Website for Ashley Luu Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
