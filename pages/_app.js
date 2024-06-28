import Layout from "./layout";
import '../styles/globals.css';

import { Oswald, Open_Sans } from 'next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export default function App({ Component, pageProps }) {
    return (
        <main className={`${oswald.variable} ${openSans.variable}`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    )
}