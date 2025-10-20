import { ThemeProvider } from "./theme-provider"
import './globals.css'

export const metadata = {
  title: {
    default: 'Aditya Garud - Full Stack Developer & Machine Learning Engineer',
    template: '%s | Aditya Garud'
  },
  description: 'Aditya Garud is a Full Stack Developer and Machine Learning Engineer specializing in AI, web development, and computer vision. Technical Lead at TekLingo, studying at Vishwakarma University, Pune.',
  keywords: [
    'Aditya Garud',
    'Full Stack Developer',
    'Machine Learning Engineer',
    'AI Developer',
    'Web Development',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'TekLingo',
    'Vishwakarma University',
    'Pune Developer',
    'Computer Vision',
    'Deep Learning',
    'TensorFlow',
    'PyTorch',
    'Discord Bot Developer',
    'LSTM',
    'NLP',
    'Technical Lead'
  ],
  authors: [{ name: 'Aditya Garud', url: 'https://github.com/yashranaway' }],
  creator: 'Aditya Garud',
  publisher: 'Aditya Garud',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adityagarud.com',
    siteName: 'Aditya Garud Portfolio',
    title: 'Aditya Garud - Full Stack Developer & Machine Learning Engineer',
    description: 'Full Stack Developer and Machine Learning Engineer specializing in AI, web development, and computer vision. Technical Lead at TekLingo.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aditya Garud - Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Garud - Full Stack Developer & Machine Learning Engineer',
    description: 'Full Stack Developer and Machine Learning Engineer specializing in AI, web development, and computer vision.',
    creator: '@adityagarud',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://adityagarud.com',
  },
  category: 'technology',
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aditya Garud",
    "url": "https://adityagarud.com",
    "image": "https://adityagarud.com/favicon.png",
    "jobTitle": "Full Stack Developer & Machine Learning Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "TekLingo"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Vishwakarma University"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/yashranaway",
      "https://www.linkedin.com/in/aditya-garud-8b633a303"
    ],
    "knowsAbout": [
      "Machine Learning",
      "Artificial Intelligence",
      "Web Development",
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "Natural Language Processing"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}