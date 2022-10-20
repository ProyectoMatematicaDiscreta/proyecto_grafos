import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {

  variantsLoginError,
  variantsLoginform,
  variantsLoginformChilds,
  variantsMessageText,
  variantsPhone,
  variantsPhonePanel,


} from "../../animations/VariantsLogin";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function AuthSvg(props) {
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
  const onSubmit = () => {

    console.log(userCredencials);
  }
  const handleChange = (e) => {
    setUserCredencials({ ...userCredencials, [e.target.name]: e.target.value })
  }
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" width={351} height={642} {...props} className="overflow-hidden">
      <g data-name="Grupo 3">
        <g data-name="Grupo 1" transform="translate(0 -104)">
          <motion.g
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 1.5, delay: 0.5 }}

            data-name="Rect\xE1ngulo 1"
            transform="translate(35 104)"
            fill="cyan"
            stroke="rgba(112,112,112,0.90)"
            strokeWidth={11}
          >
            <rect width={200} height={500} rx={39} stroke="none" />
            <rect x={0} y={5.5} width={280} height={625} rx={33.5} />

          </motion.g>

          <motion.g
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 2, delay: 0.5 }}

            data-name="Rect\xE1ngulo 2"
            transform="translate(320 196)"
            fill="#fff"
            stroke="rgba(112,112,112,0.58)"
            strokeWidth={7}
          >
            <rect width={9} height={66} rx={4} stroke="none" />
            <rect x={3.5} y={3.5} width={2} height={59} rx={0.5} fill="none" />
          </motion.g>

          <motion.path
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 2.2, delay: 0.5 }}

            data-name="L\xEDnea 1"
            fill="none"
            stroke="#707070"
            d="M320 229.5h10"
          />
          <motion.rect
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 1, delay: 0.1 }}

            data-name="Rect\xE1ngulo 3"
            width={187}
            height={16}
            rx={8}
            transform="translate(82 114)"
            fill="rgba(112,112,112,0.56)"
          />
          {errors.name?.type === 'required' && <foreignObject x="60" y="150" width="150" height="350" stroke='none'><motion.div initial="before"
            animate="after"
            variants={variantsLoginError}

            transition={{ duration: 1.5 }} className="bg-red-600 p-2 rounded-xl text-yellow-300">El nombre es requerido.</motion.div></foreignObject>}
          {errors.name?.type === 'minLength' && <foreignObject x="60" y="150" width="150" height="350" stroke='none'><motion.div initial="before"
            animate="after"

            variants={variantsLoginError}

            transition={{ duration: 1.5 }} className="bg-red-600 p-2 rounded-xl text-yellow-300">El nombre debe contener al menos 3 caracteres.</motion.div></foreignObject>}
          {!errors.name && <g> <motion.g
            initial="before"
            animate="after"
            variants={variantsPhonePanel}
            transition={{ duration: 1.5, delay: 1 }}
            data-name="Rect\xE1ngulo 4"

            fill="yellow"
            stroke="#707070"
          >
            <rect width={225} height={81} rx={19} stroke="none" />
            <rect x={-0.5} y={0.5} width={225} height={81} rx={17.5} fill="none" />

          </motion.g>
            <text
              transform="translate(94 205)"
              fill="green "
              fontSize={pathname === "/sign_up" ? 32 : 20}
              fontFamily="SegoeUI-Bold, Segoe UI"
              fontWeight={500}
            >
              <motion.tspan x={1} y={-2} initial="before"
                animate="after"
                variants={variantsMessageText}
                transition={{ duration: 1.5, delay: 1 }}>
                {pathname === "/sign_up" ? "Reg\xEDstrese" : "Ingrese su usuario"}
              </motion.tspan>
            </text>
          </g>}

        </g>


        <motion.foreignObject initial="before"
          animate="after"
          variants={variantsLoginform} x="50" y="150" width="250" height="450" stroke='none'>

          <form onSubmit={handleSubmit(onSubmit)} >
            {pathname === "/sign_up" ? (<div><motion.label variants={variantsLoginformChilds} htmlFor="name" >Nombre</motion.label>
              <motion.input variants={variantsLoginformChilds} type="text" {...register("name", { required: true, minLength: 3 })} className="w-full p-1 mb-10   border-b-2 bg-transparent text-gray-500 " /></div>) : ""}

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

        </motion.foreignObject>
      </g>
    </motion.svg>
  )

};



