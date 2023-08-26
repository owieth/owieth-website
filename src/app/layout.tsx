import Footer from '@/components/Footer'
import { Header } from '@/components/header/header'
import Seo from '@/components/seo/seo'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir-Medium.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/Avenir-Heavy.woff2',
      weight: '800',
    },
  ],
  variable: '--font-avenir',
});

const title = 'swissDAO - The Swiss Web3 Builder Community.³';
const description =
  'Our goal is to connect builders with projects and join forces to build the new internet.';
const keywords =
  'swissDAO, swissdao, daosuisse, suissedao, web3, switzerland, builder, community, decentralized finance, blockchain,';
const url = 'https://swissdao.space/favicon.ico';

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    url: 'https://swissdao.space',
    siteName: 'swissDAO',
    images: [
      {
        url,
        width: 25,
        height: 25
      }
    ]
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@swissDAOspace',
    images: {
      url
    }
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} font-sans`}>
        <Seo />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}