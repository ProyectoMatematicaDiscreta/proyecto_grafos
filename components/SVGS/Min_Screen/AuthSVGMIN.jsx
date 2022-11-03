import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { variantsLoginError, variantsLoginform, variantsLoginformChilds, variantsMessageText, variantsPhone, variantsPhoneMinPanel } from "../../animations/VariantsLogin";

export default function AuthMinSvg(props) {
  const { pathname } = useRouter();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [userCredencials, setUserCredencials] = useState({
    name: '',
    email: '',
    password: ''
  })




  const onSubmit = () => {

    console.log(userCredencials);
  }
  const handleChange = (e) => {
    setUserCredencials({ ...userCredencials, [e.target.name]: e.target.value })
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={257.983}
      height={631.661}
      className="overflow-hidden"
      {...props}
    >
      <g data-name="Grupo 3">
        <g data-name="Grupo 1">
          <motion.g
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 1.5, delay: 0.5 }}
            data-name="Rect\xE1ngulo 1"
            fill="cyan"
            stroke="rgba(112,112,112,0.59)"
            strokeWidth={11}
          >
            <rect width={0} height={531.661} rx={49} stroke="none" />
            <rect x={5.5} y={5.5} width={240} height={620} rx={33.5} />
          </motion.g>
          <motion.g
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 2, delay: 0.5 }}
            data-name="Rect\xE1ngulo 2"
            transform="translate(250 98.712)"
            fill="#fff"
            stroke="rgba(112,112,112,0.58)"
            strokeWidth={7}
          >
            <rect width={9} height={66} rx={4} stroke="none" />
            <rect x={3.5} y={3.5} width={2} height={59} rx={0.5} fill="none" />
          </motion.g>
          <path
            data-name="L\xEDnea 1"
            fill="none"
            stroke="#707070"
            d="M250 133.447h10"
          />
          <motion.rect
            initial="hidden"
            animate="visible"
            variants={variantsPhone}
            transition={{ duration: 1, delay: 0.2 }}
            data-name="Rect\xE1ngulo 3"
            width={107}
            height={16}
            rx={8}
            transform="translate(57.48 10)"
            fill="rgba(112,112,112,0.56)"
          />
          {errors.name?.type === 'required' && <foreignObject x="60" y="150" width="220" height="350" stroke='none'><motion.div initial="before"
            animate="after"
            variants={variantsLoginError}

            transition={{ duration: 1.5 }} className="bg-red-600 p-2 rounded-xl text-yellow-300">El nombre es requerido.</motion.div></foreignObject>}
          {!errors.name?.type === 'required' && <g> <motion.g
            initial="before"
            animate="after"
            variants={variantsPhoneMinPanel}
            transition={{ duration: 1.5, delay: 1 }}
            data-name="Rect\xE1ngulo 4"
            transform="translate(25 54.129)"
            fill="#fff"
            stroke="#707070"
          >
            <rect width={200.565} height={89.165} rx={18} stroke="none" />
            <rect
              x={0.5}
              y={0.5}
              width={200}
              height={88.165}
              rx={17.5}
              fill="yellow"
            />
          </motion.g>
          <text
            transform={pathname === "/sign_up" ? "translate(50 110)" : "translate(40 110)"}
            fill="green "
            fontSize={pathname === "/sign_up" ? 32 : 20}
            fontFamily="SegoeUI-Bold, Segoe UI"
            fontWeight={700}
          >
            <motion.tspan x={1} y={-2} initial="before"
              animate="after"
              variants={variantsMessageText}
              transition={{ duration: 1.5, delay: 1 }}>
              {pathname === "/sign_up" ? "Reg\xEDstrese" : "Ingrese su usuario"}
            </motion.tspan>
          </text> </g>}
          
          <motion.foreignObject initial="before"
            animate="after"
            variants={variantsLoginform} x="20" y="150" width="210" height="450" stroke='none'>

            <form onSubmit={handleSubmit(onSubmit)} >
              {pathname === "/sign_up" ? (<div><motion.label variants={variantsLoginformChilds} htmlFor="name" >Nombre</motion.label>
                <motion.input variants={variantsLoginformChilds} type="text" {...register("name", { required: true, minLength: 3 })} className="w-full p-1 mb-5   border-b-2 bg-transparent text-gray-500  caret-yellow-500  " /></div>) : ""}

              <motion.label variants={variantsLoginformChilds} htmlFor="email">Correo</motion.label>
              <motion.input variants={variantsLoginformChilds} type="email" name="email" onChange={handleChange} className="w-full p-1 mb-5  border-b-2 bg-transparent  text-gray-500 caret-yellow-500  " />
              <motion.label variants={variantsLoginformChilds} htmlFor="password">Contraseña</motion.label>
              <motion.input variants={variantsLoginformChilds} type="password" name="password" onChange={handleChange} className="w-full p-1 mb-5 border-b-2 bg-transparent text-gray-500 caret-yellow-500   " />
              {pathname === "/sign_up" ? <div> <motion.label variants={variantsLoginformChilds} htmlFor="confirmPassword">Confirmar contraseña</motion.label>
                <motion.input variants={variantsLoginformChilds} type="password" name="confirmPassword" onChange={handleChange} className="w-full p-1 mb-5 border-b-2 bg-transparent text-gray-500 caret-yellow-500  " /> </div> : ''}


              <br />

              {pathname === "/sign_up" ? <motion.button variants={variantsLoginformChilds} type="submit" className='w-full bg-gray-500 p-2 rounded-xl mt-6'>Crear</motion.button> : <motion.button variants={variantsLoginformChilds} type="submit" className='w-full h-16 bg-gray-500 p-2 rounded-xl mt-16 '>Ingresar</motion.button>}


            </form>

          </motion.foreignObject>

        </g>
      </g>
    </motion.svg>
  )

};
