import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
const TopNavbar = dynamic(() => import('../components/Navbar'))
const Footer = dynamic(() => import('../components/Footer'))
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <TopNavbar />
    <Component {...pageProps} />
    <Footer />
  </>

}
