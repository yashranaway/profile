import { ThemeProvider } from "./theme-provider"
import './globals.css'

export const metadata = {
  title: 'Aditya Garud',
  description: 'Personal portfolio showcasing my skills, projects, and experience as a developer.',
  keywords: ['Aditya Garud', 'Developer', 'Portfolio', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Aditya Garud' }],
  creator: 'Aditya Garud',
  openGraph: {
    title: 'Aditya Garud',
    description: 'Personal portfolio showcasing my skills, projects, and experience as a developer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Garud',
    description: 'Personal portfolio showcasing my skills, projects, and experience as a developer.',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#6366F1' },
      { media: '(prefers-color-scheme: dark)', color: '#1E293B' }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}