import { ThemeProvider } from "./theme-provider"
import './globals.css'

export const metadata = {
  title: 'Aditya Garud - Developer Portfolio',
  description: 'Personal portfolio showcasing my skills, projects, and experience as a developer.',
  keywords: ['Aditya Garud', 'Developer', 'Portfolio', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Aditya Garud' }],
  creator: 'Aditya Garud',
  openGraph: {
    title: 'Aditya Garud - Developer Portfolio',
    description: 'Personal portfolio showcasing my skills, projects, and experience as a developer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Garud - Developer Portfolio',
    description: 'Personal portfolio showcasing my skills, projects, and experience as a developer.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
    shortcut: '/favicon.svg',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6366F1' },
    { media: '(prefers-color-scheme: dark)', color: '#1E293B' }
  ],
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
