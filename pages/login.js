import { motion } from "framer-motion";
import { variantsPhone } from "../components/animations/VariantsLogin";
import AuthForm from "../components/SVGS/Large_screen/AuthForm";
import AuthSvg from "../components/SVGS/Min_Screen/AuthSVG";
import AuthMinSvg from "../components/SVGS/Min_Screen/AuthSVGMIN";
import stylesAuth from "../styles/LoginAuth.module.css"


export default function login() {

  return (
    <motion.div variants={variantsPhone} exit="exit" className="grid place-content-center min-h-screen">

      <div id={stylesAuth.small_screen_cellphone} >

        <AuthMinSvg />
      </div>

      <div id={stylesAuth.max_small_screen_cellphone}  >
        <AuthSvg />

      </div>

      <div id={stylesAuth.large_screen}  >
        <AuthForm />

      </div>

    </motion.div>
  )
};
