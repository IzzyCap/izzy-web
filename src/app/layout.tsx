import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header/header'
import { ModalContextProvider } from '@/store/modalContext'
import { noto } from './fonts'

export const metadata: Metadata = {
  title: 'Izzy Portfolio',
  description: 'Porfolio for Izzy Caparros Salva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header/>
        <main>
          <ModalContextProvider>
            {children}
          </ModalContextProvider>
        </main>
        <footer>

        </footer>
      </body>
    </html>
  )
}
