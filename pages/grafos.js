/* Codigo realizado por  lizardo */
/* Pagina de grafos */
// Importacion de librerias
import Navbar from "../components/Navbar";
import { Excalidraw } from "@excalidraw/excalidraw";//Libreria que hace la parte de integracion de formas para renderizarlas en la pantalla
import { motion } from 'framer-motion'
import { variantsHome } from "../components/animations/VariantsGrafos";
import { useEffect } from 'react'
import { supabase } from "../supabase/client";
import { useRouter } from "next/router";
export default function App() {
  const { push } = useRouter();
//Verifica si lla estamos registrados
  useEffect(() => {
    async function getsesion() {
      const {data} = await supabase.auth.getSession();
      if (!data) {
        push("/login")
      }

    }
    getsesion();
  })
  return (
    <div>
      <Navbar />
{/* Se anima cuando inicia */}
      <motion.div
        variants={variantsHome}
        initial="hidden"
        animate="visible"

        transition={{ duration: 1 }}
        style={{
          transition: "all .5s ease-in",
          width: "100vw",
          marginLeft: 0,
          height: "100vh",
          position: "relative"
        }}
      >
        {/* Llamando al componente Excalidraw para la renderizaacion de figuras */}
        <Excalidraw
          initialData={{
            appState: {
              viewBackgroundColor: "cyan"
            },
            elements: [
              {
                id: "DHWFPSN-r0MzySHwTVMJn",
                type: "square",
                x: 200,
                y: 200,
                width: 100,
                height: 100,
                angle: 0,
                strokeColor: "#000000",
                backgroundColor: "#40c057",
                fillStyle: "solid",
                strokeWidth: 1,
                strokeStyle: "solid",
                roughness: 1,
                opacity: 100,
                groupIds: [],
                strokeSharpness: "sharp",
                seed: 77373752,
                version: 92,
                versionNonce: 496909640,
                isDeleted: false,
                boundElements: null,
                updated: 1657731262544,
                link: null,
                locked: false
              }
            ]
          }}
        />
      </motion.div>
      
    </div>
  );
}