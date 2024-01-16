import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from './components/navbar'
import { ThemeProvider } from './utils/theme-provider'
import { Footer } from './components/footer'
import Providers from './utils/toaster-provider'
import SectionScroll from './utils/reveal'

export const metadata: Metadata = {
  title: 'AL | Portfolio',
  description: 'Website for Ashley Luu Portfolio',
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
          <Providers>
            <NavBar />
            <SectionScroll />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
