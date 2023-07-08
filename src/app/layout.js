import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maxion HR',
  description: 'HR Maxion Copyright',
}

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-white" lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head><link rel="shortcut icon" href="./favicon.ico" /></head>
      <body className="h-full">{children}</body>

    </html>
  )
}
