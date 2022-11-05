/* Codigo realizado por edvin y lizardo */
/* Pagina de inicio */
// Importacion de librerias
import Navbar from "../components/Navbar";
import Figures from "../components/HomeFigure";
import Figures2 from "../components/HomeFigure2";
import grafo1 from "../public/grafos1.png";
import grafo2 from "../public/grafos2.png";
import Image from "next/image";
import stylesHome from "../styles/Home.module.css"
import Link from "next/link";
import { motion } from "framer-motion";
import { variantsButton, variantsHome, variantsHomeImage, variantsHomeImage2 } from "../components/animations/VariantsGrafos"
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useRouter } from "next/router";

export default function index() {
  const { push } = useRouter();
  useEffect(() => {
    async function getsesion() {
      const { data } = await supabase.auth.getSession();
      if (data) {
        push("/grafos")
      }

    }
    getsesion();
  })




  return (
    <div>
      <Navbar />
      {/* el motion.div es el que hace posible las animaciones en la pagina */}
      <motion.div variants={variantsHome} initial="hidden" animate="visible" exit="exit" transition={{ duration: 2 }} >
        {/* LLamando al componente svg de figures */}
        <Figures />

        
        <motion.div variants={variantsHomeImage} initial="hidden" animate="visible" id={stylesHome.image1} transition={{ duration: 3, delay: 1 }} >
          <Image src={grafo1} alt="Grafo1" width={300} height={200} />
        </motion.div>
        <Link href="/grafos"><motion.button variants={variantsButton} initial="hidden" animate="visible" transition={{ duration: 3, delay: 1 }} id={stylesHome.button} className="absolute bg-cyan-400 w-40 p-3 rounded-3xl">Ir a grafos</motion.button></Link>
        <motion.div variants={variantsHomeImage2} initial="hidden" animate="visible" transition={{ duration: 3, delay: 1 }} id={stylesHome.image2} className="ml-6" >
          <Image src={grafo2} alt="Grafo2" width={400} height={300} />
        </motion.div>
        <Figures2 />

      </motion.div>



    </div>
  )
};
