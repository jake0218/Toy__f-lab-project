'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'


import localFont from 'next/font/local'

// 기본폰트
// 폰트 최적화 => @next/font =>
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
