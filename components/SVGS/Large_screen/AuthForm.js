/* Codigo realizado por lizardo */
/* Pagina del ingreso */
// Importacion de librerias
import { motion } from "framer-motion";
import {
  variantsLoginform,
  variantsLoginformChilds,
} from "../../animations/VariantsLogin";
import { useRouter } from "next/router";
import stylesAuthForm from "../../../styles/AuthForm.module.css"
import { supabase } from "../../../supabase/client";
export default function AuthForm() {
  const { pathname } = useRouter();

//Login con la api de supabase y con las cuentas de google
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithGoogle()
  }
  return (
    <motion.div
      initial="before"
      animate="after"
      variants={variantsLoginform}
      className="static">
      <div id={stylesAuthForm.container} className="z-40 top-20  left-96 w-44  p-6 text-center font-bold text-lg rounded-lg translate-x-24 translate-y-8  ">
        <h1 className="text-yellow-50 ">{pathname === "/sign_up" ? "Registrese" : "Ingrese sus datos"}</h1>
      </div>
      <div className="bg-gradient-to-tr from-orange-400 to-teal-600  borde w-96 rounded-lg p-10 lg:w-full shadow-lg shadow-orange-500 hover:shadow-xl hover:shadow-orange-500">
        <form onSubmit={handleSubmit}>

          {pathname === "/sign_up" ? <motion.button variants={variantsLoginformChilds} type="submit" className='w-full bg-gray-500 p-2 rounded-xl mt-6' >Creee su cuenta con google</motion.button> : <motion.button variants={variantsLoginformChilds} type="submit" className='w-full h-16 bg-gray-500 p-2 rounded-xl mt-16 ' > Ingresar con su cuenta de google</motion.button>}






        </form>
      </div>
    </motion.div>
  )
};
