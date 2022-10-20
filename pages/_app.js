import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {

  return (

    <section className="bg-gradient-to-tr from-yellow-300 to-green-500 min-h-screen"  >
      <AnimatePresence mode='wait' initial="false">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </section>

  )
}

export default MyApp
