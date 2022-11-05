/* Codigo realizado por lizardo */
/* Pagina de reguntas */
// Importacion de librerias
import { useRouter } from "next/router";//Uso de la libreria de next/router para usar el push para redireccionar
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { supabase } from "../supabase/client";//Importacion del cliente de supabase

export default function questions() {
  const { push } = useRouter();//Uso de la libreria next/router
  //usando el useEffect para  validar al inicio cuando carge la pagina
  useEffect(() => {
    async function getsesion() {
      const session = await supabase.auth.getSession()
      if (!session) {
        push("/")
      }


    }
    getsesion()

  }, [])
  return (
    <div>
      {/* Llamando al componente navbar */}
      <Navbar />
      <h1 className="text-center mt-5 text-2xl">Preguntas</h1>
      <div className=" overscroll-auto hover:overscroll-contain bg-slate-500 w-96 h-96 mx-auto p-3">
        <div className="w-full bg-orange-200 mt-4 p-5">
          <h1>Luis</h1>
          <p>¿Como se hacen los grafos?</p>
        </div>

      </div>
      <br />
      <div className="grid ml-96">
        <label htmlFor="">Ingrese su pregunta</label>
        <input type="text" className="bg-cyan-400 w-8/12 " />
        <button className="w-8/12  bg-slate-500 p-4 mt-3">Enviar</button>
      </div>

    </div>
  )
};
