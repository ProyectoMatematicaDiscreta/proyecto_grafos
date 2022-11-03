
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  variantsLoginform,
  variantsLoginformChilds,
} from "../../animations/VariantsLogin";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import stylesAuthForm from "../../../styles/AuthForm.module.css"
export default function AuthForm() {
  const { pathname } = useRouter();

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [userCredencials, setUserCredencials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })



  const onSubmit = async () => {
    const res = await axios.post("/api/auth/sign_up", userCredencials);
    await res.json
    console.log(res);
  }
  const handleChange = (e) => {
    setUserCredencials({ ...userCredencials, [e.target.name]: e.target.value })
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
        <form onSubmit={handleSubmit(onSubmit)} >
          {pathname === "/sign_up" ? (<div><motion.label variants={variantsLoginformChilds} htmlFor="name" >Nombre</motion.label>
            <motion.input variants={variantsLoginformChilds} type="text" name="name" {...register("name", { required: true, minLength: 3 })} onChange={handleChange} className="w-full p-1 mb-10   border-b-2 bg-transparent text-gray-500 caret-yellow-500  " /></div>) : ""}

          <motion.label variants={variantsLoginformChilds} htmlFor="email">Correo</motion.label>
          <motion.input variants={variantsLoginformChilds} type="email" name="email" onChange={handleChange} className="w-full p-1 mb-10  border-b-2 bg-transparent  text-gray-500 caret-yellow-500  " />
          <motion.label variants={variantsLoginformChilds} htmlFor="password">Contraseña</motion.label>
          <motion.input variants={variantsLoginformChilds} type="password" name="password" onChange={handleChange} className="w-full p-1 mb-10 border-b-2 bg-transparent text-gray-500 caret-yellow-500  " />
          {pathname === "/sign_up" ? <div> <motion.label variants={variantsLoginformChilds} htmlFor="confirmPassword">Confirmar contraseña</motion.label>
            <motion.input variants={variantsLoginformChilds} type="password" name="confirmPassword" onChange={handleChange} className="w-full p-1 mb-10 border-b-2 bg-transparent text-gray-500 caret-yellow-500  " /> </div>:''}
          


     
         
          {pathname === "/sign_up" ? <motion.button variants={variantsLoginformChilds} type="submit" className='w-full bg-gray-500 p-2 rounded-xl mt-6'>Crear</motion.button> : <motion.button variants={variantsLoginformChilds} type="submit" className='w-full h-16 bg-gray-500 p-2 rounded-xl mt-16 '>Ingresar</motion.button>}


        </form>
      </div>
    </motion.div>
  )
};
