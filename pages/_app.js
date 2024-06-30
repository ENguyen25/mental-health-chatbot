import Layout from "./layout";
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export default function App({ Component, pageProps }) {
    return (
        <main className={`${openSans.className}`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
    )
}