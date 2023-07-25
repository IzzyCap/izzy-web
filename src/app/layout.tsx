'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '@/components/header/header'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: '700'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <footer>

        </footer>
      </body>
    </html>
  )
}
