import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&family=Playlist+Script&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  )
}