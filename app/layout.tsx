
import './globals.css'

import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { Noto_Sans_Bengali } from 'next/font/google'
import Banner from '@/components/Banner'

const inter = Noto_Sans_Bengali({ subsets: ["bengali"] })

export const metadata: Metadata = {
  title: 'Saidpur News',
  description: 'saidpur news',
}

const MegaNav = dynamic(() => import('@/components/MegaNav'), {
  ssr: false,
})

const MiniNav = dynamic(() => import('@/components/MiniNav'), {
  ssr: false,
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MegaNav />
        <MiniNav />
        <Banner />
        {children}
      </body>
    </html>
  )
}
