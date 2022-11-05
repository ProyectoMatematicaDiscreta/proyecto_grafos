/* Codigo realizado por  lizardo */
/* Pagina global que contine todos los directorios */
// Importacion de librerias
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

import '../styles/globals.css'


function MyApp({ Component, pageProps, router }) {


  return (

    <section className="bg-gradient-to-tr from-yellow-300 to-green-500 min-h-screen"  >
      {/* Esta funcion AnimatePresence hace que se puedan animar todas las paginas por la libreria framer-motion */}
      <AnimatePresence mode='wait' initial="false">
 {/* todas la paginas se renderiazan aki */}
        <Head>
          <title>Grafos</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/logo.svg" />
        </Head>
          <Component {...pageProps} key={router.route} />

      </AnimatePresence>
    </section>

  )
}

export default MyApp
