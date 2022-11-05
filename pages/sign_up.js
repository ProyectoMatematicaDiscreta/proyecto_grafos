/* Codigo realizado por lizardo */
/* Pagina del registro */
// Importacion de librerias
import { motion } from "framer-motion";//Libreria de animaciones
import { variantsPhone } from "../components/animations/VariantsLogin";//Variantes que requiere motion para hacer las animaciones
import AuthForm from "../components/SVGS/Large_screen/AuthForm";//Llamando al componente AuthForm
import AuthSvg from "../components/SVGS/Min_Screen/AuthSVG";//Llamando al componente AuthSvg
import AuthMinSvg from "../components/SVGS/Min_Screen/AuthSVGMIN";//Llamando al componente AuthSVGMIN
import stylesAuth from "../styles/LoginAuth.module.css";//Llamando a los estilos stylesAuth
export default function sing_up() {
  return (
    <>
      <motion.div variants={variantsPhone} exit="exit" className="grid place-content-center min-h-screen  ">


        <div id={stylesAuth.small_screen_cellphone} >
          {/* Realizando la llamada al componente AuthMinSvg  */}
          <AuthMinSvg />
        </div>

        <div id={stylesAuth.max_small_screen_cellphone}  >
          {/* Realizando la llamada al componente AuthSvg  */}
          <AuthSvg />

        </div>
        <div id={stylesAuth.large_screen}  >
          {/* Realizando la llamada al componente AuthForm  */}
          <AuthForm />

        </div>

      </motion.div>
    </>
  )
};
