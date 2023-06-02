import '@/styles/globals.css'
import { Playfair_Display, Lato} from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight:'600',variable: '--font-playfair'})
const lato = Lato({ subsets: ['latin'], weight:'400', variable: '--font-lato'})



export default function App({ Component, pageProps }) {
  return (
    <main className={`${lato.variable} font-lato ${playfair.variable} font-playfair`}>
    <Component {...pageProps} />
    </main>
  )
}