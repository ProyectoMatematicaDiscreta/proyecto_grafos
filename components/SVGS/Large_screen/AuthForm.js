
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {


  variantsLoginformChilds,



} from "../../animations/VariantsLogin";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
export default function AuthForm() {
  const { pathname } = useRouter();

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [userCredencials, setUserCredencials] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [isCheck, setIsCheck] = useState(false)
  const [isCheckSesion, setIsCheckSesion] = useState(false)
  const handleChangeChecked = () => {
    setIsCheck(!isCheck)
  }
  const handleChangeCheckedSesion = () => {
    setIsCheckSesion(!isCheckSesion)
  }
  const onSubmit = async () => {
    const res = await axios.post("/api/auth/sign_up", userCredencials);
    await res.json
    console.log(res);
  }
  const handleChange = (e) => {
    setUserCredencials({ ...userCredencials, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-gradient-to-tr from-orange-400 to-teal-600  borde w-96 rounded-lg p-10 lg:w-full shadow-lg shadow-orange-500 hover:shadow-xl hover:shadow-orange-500">
      <form onSubmit={handleSubmit(onSubmit)} >
        {pathname === "/sign_up" ? (<div><motion.label variants={variantsLoginformChilds} htmlFor="name" >Nombre</motion.label>
          <motion.input variants={variantsLoginformChilds} type="text" name="name" {...register("name", { required: true, minLength: 3 })} onChange={handleChange} className="w-full p-1 mb-10   border-b-2 bg-transparent text-gray-500 " /></div>) : ""}

        <motion.label variants={variantsLoginformChilds} htmlFor="email">Correo</motion.label>
        <motion.input variants={variantsLoginformChilds} type="email" name="email" onChange={handleChange} className="w-full p-1 mb-10  border-b-2 bg-transparent  text-gray-500" />
        <motion.label variants={variantsLoginformChilds} htmlFor="password">Contraseña</motion.label>
        <motion.input variants={variantsLoginformChilds} type="password" name="password" onChange={handleChange} className="w-full p-1 mb-10 border-b-2 bg-transparent text-gray-500 " />


        <motion.input variants={variantsLoginformChilds} type="checkbox" value="" id="" checked={isCheck} onChange={handleChangeChecked} />
        <motion.label variants={variantsLoginformChilds} className="text-xs">Acepta los <Link href="/"><a className="text-blue-500"  > Terminos y
          Condiciones </a></Link>de la empresa</motion.label>
        <br />
        <motion.input variants={variantsLoginformChilds} type="checkbox" value="" id="" checked={isCheckSesion} onChange={handleChangeCheckedSesion} />
        <motion.label variants={variantsLoginformChilds} className="text-xs">Mantener la sesión iniciada</motion.label>
        {pathname === "/sign_up" ? <motion.button variants={variantsLoginformChilds} type="submit" className={`w-full bg-gray-500 p-2 rounded-xl mt-6 ${isCheck === false ? 'invisible' : 'visible'}`}>Crear</motion.button> : <motion.button variants={variantsLoginformChilds} type="submit" className={`w-full h-16 bg-gray-500 p-2 rounded-xl mt-16  ${isCheck === false ? 'invisible' : 'visible'}`}>Ingresar</motion.button>}


      </form>
    </div>
  )
};
