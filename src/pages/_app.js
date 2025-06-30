import Layout from "@/features/Layout";
import "@/styles/globals.css";
import {DM_Sans} from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dm-sans'
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${dmSans.variable} font-sans flex flex-col min-h-screen`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
